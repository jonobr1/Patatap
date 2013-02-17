(function() {

  var border = 3;

  var root = this;
  var Editor = root.Editor = function(width, height, triggers) {

    this.dragging = false;

    this.container = document.createElement('div');

    this.domElement = document.createElement('canvas');
    this.domElement.width = width;
    this.domElement.height = height;
    this.hidden = false;

    this.field = document.createElement('div');

    this.position = { x: 0, y: 0 };

    this.meta = document.createElement('p');
    this.meta.innerHTML = ' ';

    this.container.addEventListener('mousemove', _.bind(function(e) {
      var rect = this.domElement.getBoundingClientRect();
      this.position.x = e.clientX - rect.left;
      this.position.y = e.clientY - rect.top;

      var b = Math.max(Math.min(Math.round((this.position.x / width) * 256), 256), 0);
      var a = Math.max(Math.min((1 - (this.position.y / height)).toFixed(3), 1), 0);
      var x = Math.max(Math.min(this.position.x, rect.width), 0);
      var y = Math.max(Math.min(this.position.y, rect.height), 0);

      this.meta.innerHTML = 'b: ' + b + ', a: ' + a + ', x: ' + x + ', y: ' + y;
    }, this));

    _.extend(this.domElement.style, {
      border: border + 'px solid #ccc',
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
      bottom: 10 + 'px',
      right: 10 + 'px',
      zIndex: 9999
    });

    _.extend(this.field.style, {
      cursor: 'crosshair',
      top: border + 'px',
      left: border + 'px',
      position: 'absolute',
      width: width + 'px',
      height: height + 'px'
    });

    this.container.appendChild(this.domElement);
    this.container.appendChild(this.meta);
    this.container.appendChild(this.field);

    this.container.className = 'no-select';

    this.ctx = this.domElement.getContext('2d');
    this.ctx.strokeStyle = 'none';

    this.triggers = triggers || [];
    this.peaks = _.map(_.range(Editor.Resolution), function(i) {
      return 0;
    });

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

    getPosition: function(o) {
      var o = {
        x: (o.bandwidth / Editor.Resolution) * this.domElement.width,
        y: (1 - o.threshold) * this.domElement.height
      };
      return o;
    },

    dump: function() {

      var data = _.map(this.triggers, function(trigger) {
        return {
          threshold: trigger.threshold,
          bandwidth: trigger.bandwidth
        };
      });

      return JSON.stringify(data);

    },

    addClicks: function(functions, fixed) {

      var length = functions.length;
      var index = 0;

      this.field.addEventListener('click', _.bind(function(e) {
        if (this.dragging) {
          this.dragging = false;
          return;
        }
        var rect = this.domElement.getBoundingClientRect();
        var x = this.position.x = Math.max(Math.min(e.clientX - rect.left, rect.width), 0);
        var y = this.position.y = Math.max(Math.min(e.clientY - rect.top, rect.height), 0);
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

      this.triggers.push(trigger);

      var elem = document.createElement('div');
      elem.className = 'trigger';
      elem.setAttribute('title', this.triggers.length);
      trigger.elem = elem;
      _.extend(elem.style, {
        top: y + 'px',
        left: x + 'px'
      });

      var drag = _.bind(function(e) {
        var rect = this.field.getBoundingClientRect();
        var _x = Math.max(Math.min(e.clientX - rect.left, rect.width), 0);
        var _y = Math.max(Math.min(e.clientY - rect.top, rect.height), 0);
        trigger.bandwidth =  Math.round((_x / rect.width) * Editor.Resolution);
        trigger.threshold = 1 - (_y / rect.height);
        _x = (trigger.bandwidth / Editor.Resolution) * rect.width;
        trigger.x = _x;
        trigger.y = _y;
        _.extend(elem.style, {
          left: _x + 'px',
          top: _y + 'px'
        });
      }, this);

      var dragEnd = _.bind(function(e) {
        var rect = this.field.getBoundingClientRect();
        var _x = Math.max(Math.min(e.clientX - rect.left, rect.width), 0);
        var _y = Math.max(Math.min(e.clientY - rect.top, rect.height), 0);
        trigger.bandwidth =  Math.round((_x / rect.width) * Editor.Resolution);
        trigger.threshold = 1 - (_y / rect.height);
        _x = (trigger.bandwidth / Editor.Resolution) * rect.width;
        trigger.x = _x;
        trigger.y = _y;
        _.extend(elem.style, {
          left: _x + 'px',
          top: _y + 'px'
        });
        window.removeEventListener('mousemove', drag);
        window.removeEventListener('mouseup', dragEnd);
        _.defer(_.bind(function() { // reset on next stack
          this.dragging = false;
        }, this));
      }, this);

      elem.addEventListener('mousedown', _.bind(function(e) {
        this.dragging = true;
        window.addEventListener('mousemove', drag);
        window.addEventListener('mouseup', dragEnd);
      }, this));

      this.field.appendChild(elem);

      var onComplete = callback.onComplete || function() {};

      var c = function() {
        trigger.started = false;
        elem.className = elem.className.replace(/\sanimating/ig, '');
        onComplete();
      };

      callback.onComplete = c;

      return this;

    },

    update: function(eq) {

      _.each(this.triggers, function(trigger) {

        var amplitude = eq[trigger.bandwidth];
        if (!trigger.started && amplitude > trigger.threshold) {
          trigger.started = true;
          trigger.elem.className += ' animating';
          trigger.callback(amplitude);
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
      this.ctx.strokeStyle = '#ccc';
      this.ctx.fillStyle = 'black';
      this.ctx.lineWidth = 2;

      _.each(eq, function(v, i) {
        var pct = i / Editor.Resolution;
        var a = SOUND.eqData[i];
        var x = pct * width;
        this.ctx.fillRect(x, height - height * a, 1, height * a);
        if (a > this.peaks[i]) {
          this.peaks[i] = a;
        }
        var peak = this.peaks[i];
        this.ctx.fillRect(x, height - height * peak, 1, 1);
      }, this);

      return this;

    }

  });

})();