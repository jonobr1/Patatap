define([
  'animation/Tween',
  'underscore'
], function(Tween) {

  var TWO_PI = Math.PI * 2,
    HALF_PI = Math.PI / 2,
    start = HALF_PI,
    end = HALF_PI + TWO_PI;

  var Sunrise = function(params) {

    this.initialize(params);

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

    },

    initialize: function(params) {

      var _this = this;
      var params = _.defaults(params || {}, {
        startAngle: start,
        endAngle: start + TWO_PI,
        radius: stage.center.y / 2,
        distance: stage.center.y / 2,
        delay: 1000,
        curve: Tween.Easing.Circular.Out,
        palette: ['#e34f0c']
      });

      this.t = 0;
      this.a1 = params.startAngle;
      this.a2 = params.startAngle;
      this.radius = params.radius;
      this.distance = params.distance;
      this.palette = params.palette;
      this.color = this.palette[Math.floor(this.palette.length * Math.random())];

      start = params.startAngle;
      end = params.endAngle;

      this.entrance = new Tween(this)
        .to({ a1: end, t: 1 })
        .setEasing(params.curve);

      this.exit = new Tween(this)
        .to({ a2: end, t: 2 })
        .setEasing(params.curve);

      this.entrance
        .bind('update', _.bind(render, this))
        .bind('end', function() {
          _this.exit.start();
        });
      this.exit
        .bind('update', _.bind(render, this))
        .bind('end', function() {
          _this.a1 = params.startAngle;
          _this.a2 = params.startAngle;
          _this.t = 0;
        });

      return this;

    }

  });

  function render() {

    var x = stage.center.x;
    var y = (stage.center.y + this.distance) - this.distance * this.t;

    stage.ctx.fillStyle = this.color;
    stage.ctx.beginPath();
    stage.ctx.arc(x, y, this.radius, this.a2, this.a1, false);
    stage.ctx.lineTo(x, y);
    stage.ctx.fill();

  }

  return Sunrise;

});
