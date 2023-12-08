import * as TWEEN from "@tweenjs/tween.js";
import Two from "two.js";
import animations, { register, center } from "./index.js";
import { TWO_PI, duration, two } from "../common.js";
import palette from "./palette.js";
import { map, range } from "../underscore.js";

let playing = false
let animate_in, animate_out;

const line = two.makeLine();
line.stroke = palette.colors.black;
line.cap = 'round';

resize();
reset();

function start(silent) {
  playing = true;
  line.visible = true;
  animate_in.start();
  if (!silent && animation.sound) {
    animation.sound.stop().play();
  }
}

function resize() {
  line.translation.copy(center);
}

function update() {
  line.noFill().stroke = palette.colors.black;
}

function reset() {

  if (animate_in) {
    animate_in.stop();
  }
  if (animate_out) {
    animate_out.stop();
  }

  const n = Math.random();
  const distance = Math.round(
    map(n, 0, 1, two.height * 0.5, two.width)
  );

  let theta = Math.random() * TWO_PI;
  line.vertices[0].set(
    distance * Math.cos(theta),
    distance * Math.sin(theta)
  );

  theta += Math.PI;
  line.vertices[1].set(
    distance * Math.cos(theta),
    distance * Math.sin(theta)
  );

  line.linewidth = Math.round(n * 7) + 3;
  line.ending = line.beginning = 0;
  line.visible = false;

  animate_in = new TWEEN.Tween(line)
    .to({ ending: 1 }, duration * 0.1)
    .easing(TWEEN.Easing.Circular.In)
    .onComplete(onComplete);

  animate_out = new TWEEN.Tween(line)
    .to({ beginning: 1 }, duration * 0.35)
    .easing(TWEEN.Easing.Circular.Out)
    .onComplete(reset);

  playing = false;

}

function onComplete() {
  animate_out.start();
}

const animation = {
  start: start,
  update: update,
  clear: reset,
  resize: resize,
  get playing() { return playing; },
  hash: '1,5',
  name: 'strike',
  sounds: []
};

register(animation.hash, animation);
export default animation;