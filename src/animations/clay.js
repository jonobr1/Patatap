import { range } from "../underscore.js";
import Two from "two.js";
import * as TWEEN from "@tweenjs/tween.js";
import { register, center } from "./index.js";
import { duration, two, TWO_PI } from "../common.js";
import palette from "./palette.js";

let animate_in;
let playing = false;

const amount = Math.floor(Math.random()) * 8 + 8;
const impact = new Two.Vector();

let distance = two.height

const destinations = [];
const points = range(amount).map((i) => {
  destinations.push(new Two.Vector());
  return new Two.Anchor();
});

const clay = two.makeCurve(points);
clay.fill = palette.colors.middleground;
clay.closed = true;
clay.noStroke();

const options = { ending: 0 };
const ending = { ending: 1 };

reset();

function start(silent) {
  clay.visible = true;
  playing = true;
  animate_in.start();
  if (!silent && animation.sound) {
    animation.sound.stop().play();
  }
}

function update() {
  clay.fill = palette.colors.middleground;
}

function resize() {}

function reset() {

  if (animate_in) {
    animate_in.stop();
  }

  const pos = Math.floor(Math.random() * 8);
  let x, y;

  clay.visible = false;
  impact.set(Math.random() * two.width, Math.random() * two.height);

  switch (pos) {
    case 7:
      // north
      x = center.x;
      y = 0;
      break;
    case 6:
      // north-west
      x = 0;
      y = 0;
      break;
    case 5:
      // west
      x = 0;
      y = center.y;
      break;
    case 4:
      // south-west
      x = 0;
      y = two.height;
      break;
    case 3:
      // south
      x = center.x;
      y = two.height;
      break;
    case 2:
      // south-east
      x = two.width;
      y = two.height;
      break;
    case 1:
      // east
      x = two.width;
      y = center.y;
      break;
    default:
      // north-east
      x = two.width;
      y = 0;
  }

  clay.position.set(x, y);
  options.ending = 0;
  distance = two.height;

  for (let i = 0; i < amount; i++) {

    const v = points[i];
    const pct = i / amount;
    const ptheta = pct * TWO_PI;

    v.set(
      distance * Math.cos(ptheta),
      distance * Math.sin(ptheta)
    );

    const theta = Two.Vector.angleBetween(v, impact) - ptheta;
    const d = v.distanceTo(impact);
    const a = 10 * distance / Math.sqrt(d);
    const x = a * Math.cos(theta) + v.x;
    const y = a * Math.sin(theta) + v.y;

    destinations[i].set(x, y);

  }

  playing = false;

  animate_in = new TWEEN.Tween(options)
    .to(ending, duration * 0.75)
    .easing(TWEEN.Easing.Circular.In)
    .onUpdate(onUpdate)
    .onComplete(reset);

}

function onUpdate({ ending }) {
  for (let i = 0; i < amount; i++) {
    const v = points[i];
    const d = destinations[i];
    v.lerp(d, ending);
  }
}

const animation = {
  start: start,
  update: update,
  clear: reset,
  resize: resize,
  get playing() { return playing; },
  hash: '0,1',
  name: 'clay',
  sounds: []
};

register(animation.hash, animation);
export default animation;