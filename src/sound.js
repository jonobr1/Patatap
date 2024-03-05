import { defaults } from './underscore.js';

const identity = (v) => v;

let has;

try {
  has = !!AudioContext;
} catch (e) {
  has = false;
}

function load({ context, uri, callback }) {

  return new Promise((resolve, reject) => {

    const r = new XMLHttpRequest();
    r.open('GET', uri, true);
    r.responseType = 'arraybuffer';

    r.onerror = reject;
    r.onload = () => {
      resolve({
        context,
        data: r.response,
        callback
      });
    };

    r.send();

  });

}

function decode({ context, data, callback }) {

  return new Promise((resolve, reject) => {

    const success = (buffer) => {
      resolve(buffer, data);
      if (callback) {
        callback(buffer, data);
      }
    };

    context.decodeAudioData(data, success, reject);

  });

}


export class Sound {

  #loop = false;
  #volume = 1.0;
  #speed = 1.0;
  #startTime = 0;
  #offset = 0;

  playing = false;
  filter = null;
  buffer = null;
  data = null;
  gain = null;
  src = null;
  ctx = null;

  static has = has;

  constructor(context, uri, callback) {

    const scope = this;

    this.ctx = context;

    switch (typeof uri) {

      case 'string':
        this.src = uri;
        load({ context, uri, callback: assignBuffer }).then(decode);
        break;

      case 'object':
        decode({
          context,
          data: uri,
          callback: assignBuffer
        });
        break;

    }

    function assignBuffer(buffer, data) {

      scope.buffer = buffer;
      scope.data = data;

      scope.gain = scope.filter = context.createGain();
      scope.gain.connect(context.destination);
      scope.gain.gain.value = Math.max(Math.min(scope.#volume, 1.0), 0.0);

      if (callback) {
        callback(this);
      }

    }

  }

  #ended() {
    this.playing = false;
  }

  applyFilter(node) {

    if (this.filter && this.filter !== this.gain) {
      this.filter.disconnect(this.gain);
    }

    this.filter = node;
    this.filter.connect(this.gain);

    return this;

  }

  play(options) {

    if (!this.buffer) {
      return this;
    }

    const params = defaults(options || {}, {
      time: this.ctx.currentTime,
      loop: this._loop,
      offset: this._offset,
      duration: this.buffer.duration - this._offset
    });

    if (this.ctx && /suspended/i.test(this.ctx.state)) {
      this.ctx.resume();
    }

    if (this.source) {
      this.stop();
    }

    this.#startTime = params.time;
    this.#loop = params.loop;
    this.playing = true;

    this.source = this.ctx.createBufferSource();
    this.source.onended = this.#ended;
    this.source.buffer = this.buffer;
    this.source.loop = params.loop;
    this.source.playbackRate.value = this.#speed;

    this.source.connect(this.filter);

    if (this.source.start) {
      this.source.start(params.time, params.offset);
    } else if (this.source.noteOn) {
      this.source.noteOn(params.time, params.offset);
    }

    return this;

  }

  pause(options) {

    if (!this.source || !this.playing) {
      return this;
    }

    const params = defaults(options || {}, {
      time: this.ctx.currentTime
    });

    this.source.onended = identity;

    if (this.source.stop) {
      this.source.stop(params.time);
    } else if (this.source.noteOff) {
      this.source.noteOff(params.time);
    }

    this.playing = false;

    let currentTime = this.ctx.currentTime;
    if (params.time != 'undefined') {
      currentTime = params.time;
    }

    this.#offset = currentTime - this.#startTime + (this.#offset || 0);

    if (this.#loop) {
      this.#offset = Math.max(this.#offset, 0.0) % this.buffer.duration;
    } else {
      this.#offset = Math.min(Math.max(this.#offset, 0.0), this.buffer.duration);
    }

    return this;

  }

  stop(options) {

    if (!this.source || !this.playing) {
      return this;
    }

    const params = defaults(options || {}, {
      time: this.ctx.currentTime
    });

    this.source.onended = identity;

    if (this.source.stop) {
      this.source.stop(params.time);
    } else if (this.source.noteOff) {
      this.source.noteOff(params.time);
    }

    this.playing = false;
    this.#offset = 0;

    return this;

  }

  get volume() {
    return this.#volume;
  }

  set volume(v) {
    this.#volume = v;
    if (this.gain) {
      this.gain.gain.value = Math.max(Math.min(this.#volume, 1.0), 0.0);
    }
  }

  get speed() {
    return this.#speed;
  }

  set speed(s) {
    this.#speed = s;
    if (this.playing) {
      this.play();
    }
  }

  get currentTime() {
    return this.playing
      ? (this.ctx.currentTime - this.#startTime + this.#offset) * this.#speed
      : this.#offset;
  }

  set currentTime(t) {

    let time;

    if (!this.buffer) {
      return;
    }

    if (this.#loop) {
      time = Math.max(t, 0.0) % this.buffer.duration;
    } else {
      time = Math.min(Math.max(t, 0.0), this.buffer.duration);
    }

    this.#offset = time;

    if (this.playing) {
      this.play();
    }

  }

  get millis() {
    return Math.floor(this.currentTime * 1000);
  }

  get duration() {
    if (!this.buffer) {
      return 0;
    }
    return this.buffer.duration;
  }

}