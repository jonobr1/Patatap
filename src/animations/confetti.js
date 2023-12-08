import { map, range } from "../underscore.js";
import Two from "two.js";
import * as TWEEN from "@tweenjs/tween.js";
import animations, { register, center } from "./index.js";
import { duration, two } from "../common.js";
import palette from "./palette.js";

let playing = false;
let animate_in;

const destinations = [];

const circles = range(32).map((i) => {
  const circle = new Two.Circle();
  const kid = Math.floor(Math.random() * palette.keys.length);
  circle.property = palette.keys[kid];
  circle.fill = palette.colors[circle.property];
  circle.noStroke();
  destinations.push(new Two.Vector());
  return circle;
});

const options = { ending: 0 };
const ending = { ending: 1 };
const group = two.makeGroup(circles);

reset();

function start(silent) {
  playing = true;
  group.visible = true;
  animate_in.start();
  if (!silent && animation.sound) {
    animation.sound.stop().play();
  }
}

function resize() {}

function update() {
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    circle.fill = palette.colors[circle.property];
  }
}

function reset() {

  let ox, oy,
    pos = Math.floor(Math.random() * 4);

  if (animate_in) {
    animate_in.stop();
  }

  switch (pos) {
    // west
    case 3:
      ox = - two.width / 8;
      oy = center.y;
      break;
    // east
    case 2:
      ox = two.width * 1.125;
      oy = center.y;
      break;
    // north
    case 1:
      ox = center.x;
      oy = - two.height / 8;
      break;
    // south
    default:
      ox = center.x;
      oy = two.height * 1.125;
  }

  group.position.set(ox, oy);

  const theta = Math.atan2(center.y - oy, center.x - ox);
  const deviation = Math.PI / 2;
  const distance = two.width;
  const r1 = animations.min_dimension * 12 / 900;
  const r2 = animations.min_dimension * 20 / 900;

  for (let i = 0; i < circles.length; i++) {

    const circle = circles[i];
    const t = theta + (2 * Math.random() - 1) * deviation;
    const a = Math.random() * distance;
    const x = a * Math.cos(t);
    const y = a * Math.sin(t);

    destinations[i].set(x, y);

    circle.position.clear();
    circle.radius = Math.round(map(Math.random(), 0, 1, r1, r2));

  }

  options.ending = 0;

  animate_in = new TWEEN.Tween(options)
    .to(ending, duration * 0.5)
    .easing(TWEEN.Easing.Sinusoidal.Out)
    .onUpdate(onUpdate)
    .onComplete(reset);

  group.visible = false;
  playing = false;

}

function onUpdate({ ending }) {
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    const dest = destinations[i];
    circle.position.lerp(dest, ending);
  }
}

const animation = {
  start: start,
  update: update,
  clear: reset,
  resize: resize,
  get playing() { return playing; },
  hash: '2,5',
  name: 'confetti',
  sounds: []
};

register(animation.hash, animation);
export default animation;
