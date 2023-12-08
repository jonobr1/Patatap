import * as TWEEN from "@tweenjs/tween.js";
import animations, { register, center } from "./index.js";
import { duration, two } from "../common.js";
import palette from "./palette.js";

let playing = false;
let animate_in, animate_out;

const circle = two.makeCircle(0, 0, animations.min_dimension * 0.25);
circle.noStroke().fill = palette.colors.accent;

resize();
reset();

function start(silent) {
  playing = true;
  animate_in.start();
  circle.visible = true;
  if (!silent && animation.sound) {
    animation.sound.stop().play();
  }
}

function resize() {
  circle.radius = animations.min_dimension * 0.25;
}

function update() {
  circle.fill = palette.colors.accent;
}

function reset() {

  if (animate_in) {
    animate_in.stop();
  }
  if (animate_out) {
    animate_out.stop();
  }

  const isRight = Math.random() > 0.5;
  const isTop = Math.random() > 0.5;

  circle.translation.x = two.width * (isRight ? 0.75 : 0.25);
  circle.translation.y = two.height * (isTop ? - 0.5 : 1.5);
  circle.scale = 1;

  animate_in = new TWEEN.Tween(circle.translation)
    .to({ y: center.y }, duration / 2)
    .easing(TWEEN.Easing.Circular.Out)
    .onComplete(() => animate_out.start());
  
    animate_out = new TWEEN.Tween(circle)
      .to({ scale: 0 }, duration / 2)
      .easing(TWEEN.Easing.Circular.Out)
      .onComplete(reset);

  circle.visible = false;
  playing = false;

}

const animation = {
  resize: resize,
  update: update,
  clear: reset,
  start: start,
  get playing() { return playing; },
  hash: '1,2',
  name: 'ufo',
  sounds: []
};

register(animation.hash, animation);
export default animation;