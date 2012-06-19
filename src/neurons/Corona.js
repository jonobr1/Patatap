define([
  'animation/Tween',
  'Vector',
  'utils/utils',
  'underscore'
], function(Tween, Vector, utils) {

  var TWO_PI = Math.PI * 2.0;

  var Corona = function(params) {

    var _this = this;

    var params = _.defaults(params || {}, {
      amount: 8,
      startAngle: 0,
      endAngle: TWO_PI,
      radius: stage.center.y,
      distance: stage.center.y / 8,
      lineWidth: 10,
      delay: 0,
      curve: Tween.Easing.Circular.InOut,
      duration: 250,
      origin: stage.center.clone()
    });

    this.amount = params.amount;
    this.radius = params.radius;
    this.distance = params.distance;
    this.lineWidth = params.lineWidth;
    this.delay = params.delay;
    this.duration = params.duration;
    this.origin = params.origin;

    this.starts = [];
    this.ends = [];

    _.each(_.range(params.amount), function(i) {

      var theta = utils.map((i / params.amount), 0, 1, params.startAngle, params.endAngle);
      var object = { t: 0, u: 0 };

      var crad = Math.cos(theta);
      var srad = Math.sin(theta);
      var x = crad * this.radius + this.origin.x;
      var y = srad * this.radius + this.origin.y;

      var v1 = new Vector(x, y);
      var v2 = new Vector(x, y);

      var start = new Tween(object)
        .to({ t: 1.0 }, this.duration)
        .setEasing(params.curve)
        .setDelay(this.delay * i)
        .bind('update', function() {

          var distance = _this.distance * object.t;
          var x = crad * (_this.radius + distance) + _this.origin.x;
          var y = srad * (_this.radius + distance) + _this.origin.y;

          v2.set(x, y);
          render.call(_this, v1, v2);

        })
        .bind('end', function() {
          end.start();
        });

      var end = new Tween(object)
        .to({ u: 1.0 }, this.duration)
        .setEasing(params.curve)
        .bind('update', function() {

          var distance = _this.distance * object.u;
          var x = crad * (_this.radius + distance) + _this.origin.x;
          var y = srad * (_this.radius + distance) + _this.origin.y;

          v1.set(x, y);
          render.call(_this, v1, v2);

        })
        .bind('end', function() {
          object.t = 0;
          object.u = 0;
          v1.set(x, y);
          v2.copy(v1);
        });

        this.starts.push(start);
        this.ends.push(end);

    }, this);

  };

  _.extend(Corona.prototype, {

    unrepeat: function() {

      if (!_.isFunction(this.__repeatCallback)) {
        return this;
      }

      var last = this.ends[this.ends.length - 1];
      last.unbind('end', this.__repeatCallback);

      delete this.__repeatCallback;

      return this;

    },

    repeat: function() {

      var _this = this;
      var last = this.ends[this.ends.length - 1];


      this.__repeatCallback = function() {
        _.each(_this.starts, function(tween) {
          tween.start();
        });
      };

      last.bind('end', this.__repeatCallback);

      return this;

    },

    start: function() {

      _.each(this.starts, function(tween) {
        tween.start();
      });

      return this;

    },

    reset: function() {

      _.each(this.ends, function(end) {
        end.trigger('end');
      });

      return this;

    },

    stop: function() {

      _.each(this.starts, function(start, i) {
        this.ends[i].stop().trigger('end');
        start.stop();
      }, this);

      return this.unrepeat();

    }

  });

  function render(v1, v2) {

    stage.ctx.strokeStyle = 'white';
    stage.ctx.lineCap = 'round';
    stage.ctx.lineWidth = this.lineWidth;
    stage.ctx.beginPath();
    stage.ctx.moveTo(v1.x, v1.y);
    stage.ctx.lineTo(v2.x, v2.y);
    stage.ctx.stroke();

  }

  return Corona;

})