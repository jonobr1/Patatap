define([
  'utils/Events',
  'underscore',
  'TWEEN'
], function(Events) {

  var Animation = function(params) {

    var params = _.defaults(params || {}, {
      duration: 350,
      curve: TWEEN.Linear.None,
      direction: true,
      loop: false
    });

    this.__tween = new TWEEN.Tween();

    /**
     * {Float} How long will the animation play for. Metric TBD.
     */
    this.duration = params.duration;

    /**
     *
     */
    this.curve = params.curve;

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

  };

  _.extend(Animation.prototype, Events, {

    pause: function() {

      

    },

    pingPong: function() {

      

    },

    play: function() {

      

    },

    repeat: function() {

      

    },

    reverse: function() {

      

    }

  });

  return Animation;

})