import $ from "jquery";
import Two from "two.js";
import { after, once } from "../underscore.js";
import {
  path,
  two
} from "../common.js";
import palette from "./palette.js";
import { Sound } from "../sound.js";

let ctx;
const map = {};
const list = [];
const types = [
  'start', 'update', 'clear',
  'resize', 'playing', 'hash',
  'name'
];

export const center = new Two.Vector(two.width / 2, two.height / 2);
const domElement = two.renderer.domElement;

let min_dimension = Math.min(two.width, two.height);

domElement.style.background = palette.colors.background;

two.bind('resize', () => {

  center.x = two.width / 2;
  center.y = two.height / 2;

  min_dimension = Math.min(two.width, two.height);

  list.forEach((animation) => animation.resize());

});

palette.onStart(updateAudio);
palette.onUpdate(() => {
  list.forEach(({ update }) => update());
  domElement.style.background = palette.colors.background;
});

//

export function register(hash, animation) {
  const name = animation.name || hash;
  if (hash in map) {
    const message = `Animation ${name} already exists.`;
    throw new Error(message);
  }
  types.forEach((prop) => {
    if (!(prop in animation)) {
      const message = `Animation ${name}, does not have "${prop}"`;
      throw new Error(message);
    }
  });
  map[hash] = animation;
  list.push(animation);
}

function updateAudio() {

  const current = palette.current;
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const filetype = '.mp3';
  const sounds = list.filter(({ sounds }) => Array.isArray(sounds));

  const type = letters[current];
  const $lobby = $('#lobby');
  const $loaded = $lobby.find('#loaded').html(0);
  const $totalAssets = $lobby.find('#total-assets');

  const show = once(() => {
    $loaded.index = 0;
    $loaded.html($loaded.index);
    $totalAssets.html(sounds.length);
    $lobby.fadeIn();
  });

  return new Promise((resolve) => {

    const onLoad = () => {
      update();
      buffered();
    };

    const buffered = after(sounds.length, () => {
      resolve();
      $lobby.fadeOut();
    });

    sounds.forEach((animation) => {
      if (!ctx) {
        ctx = new AudioContext();
      }
      let sound = animation.sounds[current];
      if (!sound) {
        show();
        const uri = `${path}${type}/${animation.name}${filetype}`;
        sound = new Sound(ctx, uri, onLoad);
        animation.sounds.push(sound);
      }
      animation.sound = sound;
    });

  });

  function update() {
    $loaded.index++;
    $loaded.html($loaded.index);
  }

}

export default {
  updateAudio,
  map,
  get min_dimension() {
    return min_dimension;
  },
  list
};