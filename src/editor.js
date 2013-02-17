(function() {

  var root = this;
  var Editor = root.Editor = function(width, height, triggers) {

    this.container = document.createElement('div');

    this.domElement = document.createElement('canvas');
    this.domElement.width = width;
    this.domElement.height = height;
    this.hidden = false;

    this.position = { x: 0, y: 0 };

    this.meta = document.createElement('p');
    this.meta.innerHTML = ' ';

    this.domElement.addEventListener('mousemove', _.bind(function(e) {
      var rect = this.domElement.getBoundingClientRect();
      this.position.x = e.clientX - rect.left;
      this.position.y = e.clientY - rect.top;
      this.meta.innerHTML = 'b: ' + Math.round((this.position.x / width) * 256) + ', a: ' + (1 - (this.position.y / height)).toFixed(3) + ', x: ' + this.position.x + ', y: ' + this.position.y;
    }, this));

    _.extend(this.domElement.style, {
      border: '3px solid #ccc',
      cursor: 'crosshair',
      background: 'white'
    });

    _.extend(this.meta.style, {
      fontSize: 10 + 'px',
      lineHeight: 10 + 'px',
      height: 10 + 'px',
      padding: 0,
      margin: 0,
      textAlign: 'right',
      fontFamily: 'sans-serif'
    });

    _.extend(this.container.style, {
      position: 'fixed',
      bottom: 20 + 'px',
      right: 20 + 'px'
    });

    this.container.appendChild(this.domElement);
    this.container.appendChild(this.meta);

    this.ctx = this.domElement.getContext('2d');
    this.ctx.strokeStyle = 'none';

    this.triggers = triggers || {};

  };

  _.extend(Editor, {

    Resolution: 256

  });

  _.extend(Editor.prototype, {

    appendTo: function(elem) {

      elem.appendChild(this.container);
      return this;

    },

    show: function() {

      this.container.style.display = 'block';
      this.hidden = false;
      return this;

    },

    hide: function() {

      this.container.style.display = 'none';
      this.hidden = true;
      return this;

    },

    dump: function() {

      return JSON.stringify(this.triggers);

    },

    addClicks: function(functions, fixed) {

      var length = functions.length;
      var index = 0;

      this.domElement.addEventListener('click', _.bind(function(e) {
        var rect = this.domElement.getBoundingClientRect();
        var x = this.position.x = e.clientX - rect.left;
        var y = this.position.y = e.clientY - rect.top;
        if (!!fixed && index >= length) {
          return;
        } else if (index >= length) {
          index = index % length;
        }
        this.add(this.position.x, this.position.y, functions[index]);
        index = (index + 1);
      }, this));

      return this;

    },

    add: function(x, y, callback) {

      var trigger = {
        bandwidth: Math.round((x / this.domElement.width) * Editor.Resolution),
        threshold: 1 - (y / this.domElement.height),
        x: x,
        y: y,
        started: false,
        callback: callback
      };

      this.triggers[x + y] = trigger;

      var onComplete = callback.onComplete || function() {};

      var c = function() {
        trigger.started = false;
        onComplete();
      };

      callback.onComplete = c;

      return this;

    },

    update: function(eq) {

      _.each(this.triggers, function(trigger) {

        var amplitude = eq[trigger.bandwidth];
        if (!trigger.started && amplitude > trigger.threshold) {
          trigger.callback(amplitude);
          trigger.started = true;
        }

      });

      if (this.hidden) {
        return this;
      }

      return this.render(eq);

    },

    render: function(eq) {

      var width = this.domElement.width;
      var height = this.domElement.height;
      var w = width / Editor.Resolution;

      this.ctx.clearRect(0, 0, width, height);

      this.ctx.fillStyle = 'black';

      _.each(eq, function(v, i) {
        var pct = i / Editor.Resolution;
        var a = SOUND.eqData[i];
        var x = pct * width;
        this.ctx.fillRect(x, height - height * a, 1, height * a);
      }, this);

      this.ctx.fillStyle = 'red';

      _.each(this.triggers, function(t) {

        this.ctx.beginPath();
        this.ctx.arc(t.x, t.y, w * 2, 0, Math.PI * 2, false);
        this.ctx.fill();

      }, this);

      return this;

    }

  });

})();