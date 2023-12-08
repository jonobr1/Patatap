import { range } from "../underscore.js";
import { register, center } from "./index.js";
import { duration, two } from "../common.js";
import palette from "./palette.js";

const animations = range(3).map((i) => {

  let playing = false;
  let timeout;

  const shape = two.makeRectangle(center.x, center.y, two.width, two.height);
  shape.noStroke();
  shape.visible = false;

  update();
  reset();

  function start(silent) {
    if (typeof timeout !== 'undefined') {
      clearTimeout(timeout);
    }
    playing = true;
    if (!silent && animation.sound) {
      animation.sound.stop().play();
    }
    two.bind('update', onUpdate);
    setTimeout(reset, duration * 0.25);
  }

  function update() {
    const index = palette.keys.length - 1 - (i % palette.keys.length);
    const key = palette.keys[index];
    shape.fill = palette.colors[key];
  }

  function resize() {
    shape.width = two.width;
    shape.height = two.height;
    shape.translation.copy(center);
  }

  function reset() {
    playing = false;
    shape.visible = false;
    two.unbind('update', onUpdate);
  }

  function onUpdate() {
    if (playing) {
      shape.visible = Math.random() > 0.5;
    }
  }

  const animation = {
    start: start,
    update: update,
    clear: reset,
    resize: resize,
    get playing() { return playing; },
    hash: `${i},0`,
    name: `flash-${i + 1}`,
    sounds: []
  };

  register(animation.hash, animation);

});

export default animations;