define([
  'animation/Tween',
  'underscore'
], function(Tween) {

  var TWO_PI = Math.PI * 2,
    HALF_PI = Math.PI / 2,
    start = HALF_PI,
    end = HALF_PI + TWO_PI;

  var Sunrise = function(params) {

    var _this = this;
    var params = _.defaults(params || {}, {
      angle: start,
      radius: stage.center.y / 2,
      distance: stage.center.y / 2,
      delay: 1000,
      curve: Tween.Easing.Circular
    });

    this.t = 0;
    this.a1 = params.angle;
    this.a2 = params.angle;
    this.radius = params.radius;
    this.distance = params.distance;

    start = params.angle;
    end = params.angle + TWO_PI;

    this.entrance = new Tween(this)
      .to({ a1: end, t: 1 })
      .setEasing(params.curve.Out);

    this.exit = new Tween(this)
      .to({ a2: end, t: 2 })
      .setEasing(params.curve.Out);

    this.entrance
      .bind('update', _.bind(render, this))
      .bind('end', function() {
        _this.exit.start();
      });
    this.exit
      .bind('update', _.bind(render, this))
      .bind('end', function() {
        _this.a1 = params.angle;
        _this.a2 = params.angle;
        _this.t = 0;
      });

  };

  _.extend(Sunrise.prototype, {

    unrepeat: function() {

      if (!_.isFunction(this.__repeatCallback)) {
        return this;
      }

      this.exit.unbind('end', this.__repeatCallback);
      delete this.__repeatCallback;

      return this;

    },

    repeat: function() {

      var _this = this;

      this.__repeatCallback = function() {
        _this.entrance.start();
      };

      this.exit.bind('end', this.__repeatCallback);

      return this;

    },

    start: function(duration) {

      this.entrance.start();

      return this;

    },

    stop: function() {

      this.entrance.stop();
      this.exit.stop();

      return this.unrepeat();

    }

  });

  function render() {

    var x = stage.center.x;
    var y = (stage.center.y + this.distance) - this.distance * this.t;

    stage.ctx.fillStyle = '#e34f0c';  // TODO: Abstract
    stage.ctx.beginPath();
    stage.ctx.arc(x, y, this.radius, this.a2, this.a1, false);
    stage.ctx.lineTo(x, y);
    stage.ctx.fill();

  }

  return Sunrise;

});
