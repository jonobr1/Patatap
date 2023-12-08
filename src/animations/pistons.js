import { range } from "../underscore.js";
import Two from "two.js";
import * as TWEEN from "@tweenjs/tween.js";
import { register, center } from "./index.js";
import { duration, two } from "../common.js";
import palette from "./palette.js";

const animations = range(3).map((i) => {

  let playing = false;
  let animate_in, animate_out;

  const amount = i * 4 + 1;
  const w = two.width * 0.75, h = center.y;

  let begin, end;

  const group = two.makeGroup();
  group.translation.copy(center);

  const shapes = range(amount).map((i) => {

    const d = h / amount - h / (amount * 3);
    const x = 0;
    const y = - h / 2 + (i + 1) * (h / (amount + 1));

    const shape = create(x, y, w, d);
    shape.fill = palette.colors.white;
    shape.noStroke();

    group.add(shape);

    return shape;

  });

  const options = { ending: 0, beginning: 0 };
  const ending = { ending: 1 };
  const beginning = { beginning: 1 };

  reset();

  function create(x, y, width, height) {
    const points = [
      new Two.Anchor(- width / 2, - height / 2),
      new Two.Anchor(width / 2, - height / 2),
      new Two.Anchor(width / 2, height / 2),
      new Two.Anchor(- width / 2, height / 2)
    ];
    const path = new Two.Path(points, true);
    path.position.set(x, y);
    return path;
  }

  function show(shape) {
    shape.visible = true;
  }

  function start(silent) {
    playing = true;
    shapes.forEach(show);
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

    const w = two.width * 0.75;

    if (animate_in) {
      animate_in.stop();
    }
    if (animate_out) {
      animate_out.stop();
    }

    options.beginning = options.ending = 0;
    const rotated = Math.random() > 0.5;

    if (rotated) {
      begin = - w / 2;
      end = w / 2;
    } else {
      begin = w / 2;
      end = - w / 2;
    }

    for (let i = 0; i < amount; i++) {
      const shape = shapes[i];
      shape.visible = false;
      for (let j = 0; j < shape.vertices.length; j++) {
        const v = shape.vertices[j];
        v.x = begin;
      }
    }

    animate_in = new TWEEN.Tween(options)
      .to(ending, duration * 0.125)
      .easing(TWEEN.Easing.Sinusoidal.Out)
      .onUpdate(onUpdateIn)
      .onComplete(() => animate_out.start());
    
    animate_out = new TWEEN.Tween(options)
      .to(beginning, duration * 0.125)
      .easing(TWEEN.Easing.Sinusoidal.Out)
      .onUpdate(onUpdateOut)
      .onComplete(reset);

    playing = false;

  }

  function onUpdateIn() {
    for (let i = 0; i < amount; i++) {
      const shape = shapes[i];
      const points = shape.vertices;
      points[0].x = points[3].x = end * options.ending;
    }
  }

  function onUpdateOut() {
    for (let i = 0; i < amount; i++) {
      const shape = shapes[i];
      const points = shape.vertices;
      points[1].x = points[2].x = end * options.beginning;
    }
  }

  const animation = {
    start: start,
    update: update,
    clear: reset,
    resize: resize,
    get playing() { return playing; },
    hash: `${i},3`,
    name: `piston-${i + 1}`,
    sounds: []
  };

  register(animation.hash, animation);
  return animation;

});

export default animations;