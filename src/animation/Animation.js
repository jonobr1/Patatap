define([
  'animation/Tween',
  'utils/Events',
  'underscore'
], function(Tween, Events) {

  var Animation = function(params) {

    var params = _.defaults(params || {}, {
      duration: 1000,
      curve: Tween.Easing.Linear.None,
      direction: true,
      loop: false,
      to: {
        t: 1
      }
    });

    this.__callbacks = {
      start: [],
      update: [],
      end: []
    };

    /**
     * {Float} How long will the animation play for. Metric TBD.
     */
    this.duration = params.duration;

    /**
     * {Float} The normalized value of where the animation is in its animating.
     * i.e: if the animation is halfway through animating then t = 0.5;
     */
    this.t = 0;

    /**
     * {Boolean} indicating which direction the animation should play in. True:
     * animation playing forwards, False: aniamtion playing in reverse.
     */
    this.direction = params.direction;

    this.__tween = new Tween(this)
      .to(params.to, params.duration)
      .setEasing(params.curve);

  };

  _.extend(Animation.prototype, Events, {

    pause: function() {

      Tween.remove(this.__tween);
      return this;

    },

    unpause: function() {

      Tween.add(this.__tween);
      return this;

    },

    pingPong: function() {

      this.reset();

      var _this = this;
      var callback = function() {
        if (_this.direction) {
          _this.reverse();
        } else {
          _this.play();
        }
      };

      this.__tween.bind('end', callback);
      this.__callbacks.end.push(callback);

      return this;

    },

    play: function() {

      this.direction = true;

      this.t = 0.0;
      this.__tween.to({ t: 1.0 }, this.duration).start();

      return this;

    },

    repeat: function() {

      this.reset();

      var _this = this;
      var callback = function() {
        if (_this.direction) {
          _this.play();
        } else {
          _this.reverse();
        }
      };

      this.__tween.bind('end', callback);
      this.__callbacks.end.push(callback);

      return this;

    },

    reverse: function() {

      this.direction = false;

      this.t = 1.0;
      this.__tween.to({ t: 0 }, this.duration).start();

      return this;

    },

    reset: function() {

      this.__tween.stop();

      _.each(this.__callbacks, function(event) {
        _.each(event, function(callback) {
          this.unbind(event, callback);
        }, this);
        event.length = 0;
      }, this.__tween);

      return this;

    },

    update: function(func) {

      this.__tween.bind('update', _.bind(func, this));

      return this;

    }

  });

  return Animation;

})