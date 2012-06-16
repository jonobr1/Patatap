/**
 * All sketches have a global object, stage
 */

require([
], function() {

  stage.draw(function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = 'red';
    this.ctx.beginPath();
    this.ctx.arc(this.width / 2, this.height / 2, 50, 0, Math.PI * 2, false);
    this.ctx.fill();
  });

});