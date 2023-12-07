import * as TWEEN from "@tweenjs/tween.js";
import Two from "two.js";
import animations, { register, center } from "./index.js";
import { TWO_PI, duration, two } from "../common.js";
import palette from "./palette.js";
import { range } from "../underscore.js";

const amount = 25;

let playing = false;
let animate_in, animate_out;

const a = makeSemiCircle();
const b = makeSemiCircle();
const group = two.makeGroup(a, b);
const options = { in: 0, out: 0 };

b.rotation = Math.PI;

resize();
reset();

function start(silent) {
  playing = true;
  animate_in.start();
  group.visible = true;
  if (!silent && animation.sound) {
    animation.sound.stop().play();
  }
}

function resize() {
  group.scale = animations.min_dimension * 0.33;
  group.linewidth = 1 / group.scale;
  group.translation.copy(center);
}

function update() {
  group.fill = group.stroke = palette.colors.foreground;
}

function reset() {

  if (animate_in) {
    animate_in.stop();
  }
  if (animate_out) {
    animate_out.stop();
  }

  options.in = 0;
  options.out = 0;

  group.visible = false;
  group.opacity = 1;
  group.rotation = Math.random() * TWO_PI;

  a.translation.clear();
  b.translation.clear();

  animate_in = new TWEEN.Tween(options)
    .to({ in: 1 }, duration * 0.5)
    .easing(TWEEN.Easing.Circular.In)
    .onUpdate(() => (group.visible = Math.random() < options.in))
    .onComplete(onComplete);

  animate_out = new TWEEN.Tween(options)
    .to({ out: 1 }, duration * 0.5)
    .easing(TWEEN.Easing.Circular.Out)
    .delay(duration * 0.35)
    .onUpdate(onUpdate)
    .onComplete(reset);

  playing = false;

}

function onComplete() {
  group.visible = true;
  animate_out.start();
}

function onUpdate() {
  const t = Math.pow(options.out, 0.5) * 0.5;
  a.translation.y = t;
  b.translation.y = - t;
  group.opacity = 1 - options.out;
}

function makeSemiCircle() {

  const points = range(amount).map((i) => {
    const pct = i / (amount - 1);
    const theta = pct * Math.PI;
    const x = Math.cos(theta);
    const y = Math.sin(theta);
    return new Two.Anchor(x, y);
  });

  const path = new Two.Path(points);
  path.fill = path.stroke = palette.colors.foreground;
  path.closed = true;

  return path;

}

const animation = {
  resize: resize,
  update: update,
  clear: reset,
  start: start,
  get playing() { return playing; },
  hash: '2,2',
  name: 'splits',
  sounds: []
};

register(animation.hash, animation);
export default animation;