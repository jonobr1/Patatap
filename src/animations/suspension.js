import { map, range } from "../underscore.js";
import Two from "two.js";
import * as TWEEN from "@tweenjs/tween.js";
import animations, { register, center } from "./index.js";
import { duration, two, TWO_PI } from "../common.js";
import palette from "./palette.js";

let playing = false;
let r1 = animations.min_dimension * 12 / 900;
let r2 = animations.min_dimension * 20 / 900;
let animate_in;

const destinations = [];
const circles = range(16).map(() => {
  const r = Math.round(map(Math.random(), 0, 1, r1, r2));
  const circle = new Two.Circle(0, 0, r);
  circle.fill = palette.colors.white;
  circle.noStroke();
  destinations.push(new Two.Vector());
  return circle;
});

const group = two.makeGroup(circles);
group.visible = false;
group.translation.copy(center);

const options = { ending: 0 };
const ending = { ending: 1 };

resize();
reset();

function start(silent) {
  playing = true;
  group.visible = true;
  animate_in.start();
  if (!silent && animation.sound) {
    animation.sound.stop().play();
  }
}

function update() {
  group.fill = palette.colors.white;
}

function resize() {
  group.translation.copy(center);
}

function reset() {

  if (animate_in) {
    animate_in.stop();
  }

  const distance = two.height;
  const theta = Math.random() * TWO_PI;
  const deviation = map(Math.random(), 0, 1, Math.PI / 4, Math.PI / 2);
  
  options.ending = 0;

  for (let i = 0; i < circles.length; i++) {

    const circle = circles[i];
    const t = theta + (2 * Math.random() - 1) * deviation;
    const a = Math.random() * distance;
    const x = a * Math.cos(t);
    const y = a * Math.sin(t);

    destinations[i].set(x, y);
    circle.translation.clear();

  }

  animate_in = new TWEEN.Tween(options)
    .to(ending, duration * 0.5)
    .easing(TWEEN.Easing.Sinusoidal.Out)
    .onUpdate(onUpdate)
    .onComplete(reset);


  playing = false;
  group.visible = false;

}

function onUpdate({ ending }) {
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    const dest = destinations[i];
    circle.translation.lerp(dest, ending);
  }
}

const animation = {
  start: start,
  update: update,
  clear: reset,
  resize: resize,
  get playing() { return playing; },
  hash: '0,5',
  name: 'suspension',
  sounds: []
};

register(animation.hash, animation);
export default animation;

