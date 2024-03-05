import { range } from "../underscore.js";
import Two from "two.js";
import * as TWEEN from "@tweenjs/tween.js";
import { register, center } from "./index.js";
import { duration, two, TWO_PI } from "../common.js";
import palette from "./palette.js";

const animations = range(3).map((i) => {

  const amount = Math.floor(i * 1.5) + 3;
  const scale = 10;

  let animation_in;
  let r1 = 100;
  let r2 = 2;
  let playing = false;

  const circles = [];
  const points = range(amount).map((i) => {
    const pct = i / amount;
    const theta = TWO_PI * pct;
    const x = r1 * Math.cos(theta);
    const y = r1 * Math.sin(theta);
    const circle = two.makeCircle(x, y, r2);
    circle.fill = palette.colors.black;
    circle.noStroke();
    circles.push(circle);
    return new Two.Anchor(x, y);
  });

  const prism = two.makePath(points);
  prism.closed = true;
  prism.stroke = palette.colors.black;
  prism.noFill();
  prism.linewidth = 0.5;

  const group = two.makeGroup(prism).add(circles);
  group.translation.copy(center);

  const options = { ending: 0 };

  reset();

  function start(silent) {
    playing = true;
    group.visible = true;
    animation_in.start();
    if (!silent && animation.sound) {
      animation.sound.stop().play();
    }
  }

  function update() {
    prism.stroke = palette.colors.black;
    for (let i = 0; i < circles.length; i++) {
      const circle = circles[i];
      circle.fill = palette.colors.black;
    }
  }

  function resize() {
    group.translation.copy(center);
  }

  function reset() {
    if (animation_in) {
      animation_in.stop();
    }
    group.visible = false;
    group.rotation = Math.floor(Math.random() * 4) * TWO_PI / 4;
    options.ending = group.scale = 0;
    playing = false;

    animation_in = new TWEEN.Tween(group)
      .to({ scale }, duration * 0.75)
      .easing(TWEEN.Easing.Circular.In)
      .onComplete(reset);

  }

  const animation = {
    start: start,
    update: update,
    clear: reset,
    resize: resize,
    get playing() { return playing; },
    hash: `${i},6`,
    name: `prism-${i + 1}`,
    sounds: []
  };

  register(animation.hash, animation);
  return animation;

});

export default animations;