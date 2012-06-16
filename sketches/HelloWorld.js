/**
 * All sketches have a global object, stage
 */

require([
], function() {

  stage.draw(function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = 'red';
    this.ctx.beginPath();
    this.ctx.arc(this.center.x, this.center.y, 50, 0, Math.PI * 2, false);
    this.ctx.fill();
  });

});