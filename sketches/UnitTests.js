/**
 * All sketches have a global object, stage
 */

require([
  'animation/Animation',
  'animation/Tween',
], function(Animation, Tween) {

  var TWO_PI = Math.PI * 2;
  var origin = { x: 0, y: 0 };

  /**
   * Repeating reverse
   */
  var a1 = new Animation({
    curve: Tween.Easing.Quadratic.InOut
  })
    .update(function() {

      var x = 100, y = 100;

      stage.ctx.fillStyle = 'black';
      stage.ctx.beginPath();
      stage.ctx.arc(x, y, 50, TWO_PI * this.t, false);
      stage.ctx.lineTo(x, y);
      stage.ctx.fill();
    })
    .repeat()
    .reverse();

  /**
   * Pingponging normally
   */
  var a2 = new Animation({
    curve: Tween.Easing.Circular.InOut
  })
    .update(function() {

      var x = 250, y = 100;

      stage.ctx.fillStyle = '#00AEEF';
      stage.ctx.beginPath();
      stage.ctx.arc(x, y, 50, 0, TWO_PI * this.t, false);
      stage.ctx.lineTo(x, y);
      stage.ctx.fill();
    })
    .pingPong()
    .play();

  /**
   * Pingpong in reverse
   */
  var a3 = new Animation()
    .update(function() {

      var x = 400, y = 100;

      stage.ctx.fillStyle = '#EC008C';
      stage.ctx.beginPath();
      stage.ctx.arc(x, y, 50, 0, TWO_PI * this.t, false);
      stage.ctx.lineTo(x, y);
      stage.ctx.fill();
    })
    .pingPong()
    .reverse();

  /**
   * Repeat normally.
   */
  var a4 = new Animation()
    .update(function() {

      var x = 550, y = 100;

      stage.ctx.fillStyle = '#FFF200';
      stage.ctx.beginPath();
      stage.ctx.arc(x, y, 50, 0, TWO_PI * this.t, false);
      stage.ctx.lineTo(x, y);
      stage.ctx.fill();
    })
    .repeat()
    .play();

});