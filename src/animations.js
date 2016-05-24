
var animationRatio = url.int('resolution', 100) / 100;
var two = new Two({
  type: (url.boolean('canvas') || (has.mobile && has.iOS) || (!has.mobile && has.Firefox)) ? Two.Types.canvas : Two.Types.svg
  // fullscreen: true
}).appendTo(document.querySelector('#content'));

two.renderer.domElement.id = 'stage';

/**
 * Collection of animations and such for Neuronal Synchrony.
 */

var PI = Math.PI;
var TWO_PI = PI * 2;
var HALF_PI = PI / 2;

window.animations = (function() {

  var container = document.querySelector('#content');
  var domElement = two.renderer.domElement;
  var width = $(window).width(), height = $(window).height();
  var center = { x: width / 2, y: height / 2 };
  var min_dimension = width > height ? height : width;
  var duration = 1000;
  var drag = 0.125;
  var monome = window.monome = {};
  var pistonAmount = 3;
  var prismAmount = 3;
  var flashAmount = 3;

  two.renderer.setSize(width, height, animationRatio);

  var Easing = TWEEN.Easing;
  var PROPERTIES = ['background', 'middleground', 'foreground', 'highlight', 'accent', 'white', 'black'];
  var PALETTE = [
    {
      // Grey
      background: { r: 181, g: 181, b: 181 },
      middleground: { r: 141, g: 164, b: 170 },
      foreground: { r: 227, g: 79, b: 12 },
      highlight: { r: 163, g: 141, b: 116 },
      accent: { r: 255, g: 197, b: 215 },
      white: { r: 255, g: 255, b: 255 },
      black: { r: 0, g: 0, b: 0 },
      isDark: false
    },
    {
      // White
      background: { r: 255, g: 230, b: 255 },
      middleground: { r: 151, g: 41, b: 164 },
      foreground: { r: 1, g: 120, b: 186 },
      highlight: { r: 255, g: 255, b: 0 },
      accent: { r: 255, g: 51, b: 148 },
      white: { r: 255, g: 255, b: 255 },
      black: { r: 255, g: 255, b: 255 },
      isDark: false
    },
    {
      // Orange
      background: { r: 217, g: 82, b: 31 },
      middleground: { r: 143, g: 74, b: 45 },
      foreground: { r: 255, g: 108, b: 87 },
      highlight: { r: 255, g: 126, b: 138 },
      accent: { r: 227, g: 190, b: 141 },
      white: { r: 255, g: 255, b: 255 },
      black: { r: 0, g: 0, b: 0 },
      isDark: false
    },
    {
      // Blue
      background: { r: 57, g: 109, b: 193 },
      middleground: { r: 186, g: 60, b: 223 },
      foreground: { r: 213, g: 255, b: 93 },
      highlight: { r: 213, g: 160, b: 255 },
      accent: { r: 36, g: 221, b: 165 },
      white: { r: 215, g: 236, b: 255 },
      black: { r: 0, g: 0, b: 0 },
      isDark: true
    },
    {
      // Cream
      background: { r: 255, g: 244, b: 211 },
      middleground: { r: 207, g: 145, b: 79 },
      foreground: { r: 38, g: 83, b: 122 },
      highlight: { r: 178, g: 87, b: 53 },
      accent: { r: 235, g: 192, b: 92 },
      white: { r: 226, g: 82, b: 87 },
      black: { r: 0, g: 0, b: 0 },
      isDark: false
    },
    {
      // Purple
      background: { r: 39, g: 6, b: 54 },
      middleground: { r: 69, g: 26, b: 87 },
      foreground: { r: 252, g: 25, b: 246 },
      highlight: { r: 52, g: 255, b: 253 },
      accent: { r: 133, g: 102, b: 193 },
      white: { r: 253, g: 228, b: 252 },
      black: { r: 255, g: 255, b: 255 },
      isDark: true
    }
  ];

  var current = url.int('palette', 0);
  var _colors = {};
  var colors = {};

  _.each(PALETTE[current], function(v, k) {
    _colors[k] = _.clone(v);
    colors[k] = toRGB(v);
  });

  colors.getRandomKey = function() {
    return PROPERTIES[Math.floor(Math.random() * PROPERTIES.length)];
  };

  domElement.style.background = colors.background;

  /**
  var template = (function() {

    var callback = _.identity;
    var playing = false;

    var start = function() {

    };
    var update = function() {

    };
    var resize = function() {

    };

    reset();

    function reset() {
      playing = false;
    }

    var exports = {
      start: start,
      update: update,
      resize: resize,
      clear: reset,
      playing: function() { return playing; },
      hash: '1,0',
      filename: 'wipe'
    };

    monome[exports.hash] = exports;

    return exports;

  })();
  **/

  var blob = (function() {

    var callback = _.identity;
    var playing = false;

    var a = two.makeCircle(center.x, center.y, 1);
    a.fill = colors.middleground;
    a.noStroke();
    var b = two.makeCircle(center.x, center.y, 1);
    b.fill = colors.background;
    b.noStroke();

    // a.curved = b.curved = false;

    var start = function(onComplete, silent) {
      playing = true;
      a.opacity = 1;
      a.visible = true;
      b.opacity = 1;
      b.visible = true;
      _.each(a.vertices, function(v, i) {
        v.clear();
        v.tweens[0].start();
        b.vertices[i].clear().tweens[0].start();
      });
      if (!silent && exports.sound) {
        exports.sound.stop().play();
      }
      if (_.isFunction(onComplete)) {
        callback = onComplete;
      }
    };
    var update = function() {
      a.fill = colors.middleground;
      b.fill = colors.background;
    };
    var resize = function() {
      a.translation.copy(center);
      b.translation.copy(center);
    };

    start.onComplete = reset;

    var amount = 4;
    _.each(_.range(amount), function(i) {

      var pct = i / (amount - 1);
      var radius = Math.max(width, height) * pct;

      _.each(a.vertices, function(v, j) {

        var u = b.vertices[j];

        if (!v.tweens) {
          v.tweens = [];
        }
        if (!u.tweens) {
          u.tweens = [];
        }

        var theta = Math.PI * 2 * j / a.vertices.length;
        // theta += Math.random() * HALF_PI - HALF_PI / 2;
        var r = (1 - pct) * radius * Math.random() + pct * radius;
        var x = r * Math.cos(theta);
        var y = r * Math.sin(theta);

        var t = new TWEEN.Tween(v)
          .to({ x: x, y: y }, 0.5 * duration / amount)
          .delay(i * 0.5 * duration / amount)
          .easing(TWEEN.Easing.Exponential.In)

        var s = new TWEEN.Tween(u)
          .to({ x: x, y: y }, 0.5 * duration / amount)
          .delay((i + 1) * 0.5 * duration / amount)
          .easing(TWEEN.Easing.Exponential.Out);

        if (i < amount - 1) {
          t.onComplete(function() {
            v.tweens[i + 1].start();
          });
          s.onComplete(function() {
            u.tweens[i + 1].start();
          })
        } else if (j >= a.vertices.length - 1) {
          s.onComplete(function() {
            start.onComplete();
            callback();
          });
        }

        v.tweens.push(t);
        u.tweens.push(s);

      });

    });

    reset();

    function reset() {
      playing = false;
      a.visible = false;
    }

    var exports = {
      start: start,
      update: update,
      resize: resize,
      clear: reset,
      playing: function() { return playing; },
      hash: '1,0',
      filename: 'wipe'
    };

    monome[exports.hash] = exports;

    return exports;

  })();

  var offf = (function() {

    var callback = _.identity;
    var playing = false;

    var amount = 4;
    var radius = Math.min(width, height) / 8;
    var drift = 0.85;
    var extension = 1.33;
    var o = two.makeCircle(center.x, center.y, radius);
    o.linewidth = radius / 2;
    o.noFill();
    o.stroke = colors.white;

    fs = two.makeGroup();
    fs.translation.copy(center);

    _.each(_.range(amount), function(i) {

      var pct = i / (amount - 1);
      var ipct = 1 - i / amount;
      var r = Math.max(radius * (1 - pct), 0.01);

      r *= 1.25 * extension * ipct;

      var a = new Two.Anchor(r * Math.cos(HALF_PI / 2), r * Math.sin(HALF_PI / 2));
      var b = new Two.Anchor(0, 0);
      var c = new Two.Anchor(r * Math.cos(TWO_PI - HALF_PI / 2), r * Math.sin(TWO_PI - HALF_PI / 2));

      var f = two.makePath([a, b, c], true);
      f.linewidth = ipct * radius * 0.4;
      if (i > 0) {
        var e = fs.children[i - 1];
        f.translation.x = e.translation.x + e.linewidth * extension;
      }
      f.noFill();
      f.stroke = colors.white;

      f.dest_in = { x: center.x, y: center.y };
      f.dest_out = { x: center.x, y: center.y };

      f.animate_in = new TWEEN.Tween(f.translation)
        .to(f.dest_in, duration * 0.5)
        .delay(i * duration * 0.1)
        .onUpdate(function(t) {
          f.opacity = t;

        })
        .easing(Easing.Exponential.Out)
        .onComplete(function() {
          f.animate_out.start();
        });

      f.animate_out = new TWEEN.Tween(f.translation)
        .to(f.dest_out, duration * 0.5)
        .onUpdate(function(t) {
          f.opacity = 1 - t;
        })
        .easing(Easing.Exponential.In);

      if (i >= amount - 1) {
        f.animate_out.onComplete(function() {
          start.onComplete();
          callback();
        });
      }

      fs.add(f);

    });

    var start = function(onComplete, silent) {
      playing = true;
      o.visible = true;
      o.translation.x = dest_in.x - radius * drift;
      o.translation.y = dest_in.y;
      o.opacity = 0;
      _.each(fs.children, function(f) {
        f.opacity = 0;
        f.translation.copy(f.dest_in);
        f.translation.x += radius * drift;
        f.visible = true;
        f.animate_in.start();
      });
      animate_in.start();
      if (!silent && exports.sound) {
        exports.sound.stop().play();
      }
      if (_.isFunction(onComplete)) {
        callback = onComplete;
      }
    };

    start.onComplete = reset;

    var update = function() {
      o.stroke = colors.white;
      _.each(fs.children, function(f) {
        f.stroke = colors.white;
      });
    };
    var resize = function() {

      radius = Math.min(width, height) / 8;

      o.linewidth = radius / 2;
      fs.translation.set(center.x + radius / 2, center.y);

      _.each(fs.children, function(f, i) {

        var pct = i / (amount - 1);
        var ipct = 1 - i / amount;
        var r = Math.max(radius * (1 - pct), 0.01);

        r *= 1.125 * extension * ipct;

        f.vertices[0].set(r * Math.cos(HALF_PI / 2), r * Math.sin(HALF_PI / 2));
        f.vertices[1].set(0, 0);
        f.vertices[2].set(r * Math.cos(TWO_PI - HALF_PI / 2), r * Math.sin(TWO_PI - HALF_PI / 2));

        f.linewidth = ipct * radius * 0.4;
        f.translation.clear();

        if (i > 0) {
          var e = fs.children[i - 1];
          f.translation.x = e.translation.x + e.linewidth * extension * 1.33;
        }

        f.dest_in.x = f.translation.x;
        f.dest_in.y = f.translation.y;

        f.dest_out.x = f.dest_in.x - radius * drift;
        f.dest_out.y = f.dest_in.y;

      });

      dest_in.x = center.x - radius * 1.5;
      dest_in.y = center.y;
      dest_out.x = dest_in.x + radius * drift;
      dest_out.y = center.y;

    };

    var dest_in = { x: center.x, y: center.y };
    var dest_out = { x: center.x, y: center.y };

    var animate_in = new TWEEN.Tween(o.translation)
      .to(dest_in, duration * 0.5)
      .onUpdate(function(t) {
        o.opacity = t;
      })
      .easing(Easing.Exponential.Out)
      .onComplete(function() {
        animate_out.start();
      });

    var animate_out = new TWEEN.Tween(o.translation)
      .to(dest_out, duration * 0.5)
      .easing(Easing.Exponential.In)
      .onUpdate(function(t) {
        o.opacity = 1 - t;
      });

    reset();

    function reset() {
      playing = false;
      o.visible = false;
      _.each(fs.children, function(f) {
        f.visible = false;
      });
      animate_in.stop();
      animate_out.stop();
    }

    var exports = {
      start: start,
      update: update,
      resize: resize,
      clear: reset,
      playing: function() { return playing; },
      hash: '0,0',
      filename: 'wipe'
    };

    monome[exports.hash] = exports;

    return exports;

  })();

  var iterateResize = function(o) {
    if (o.resize) {
      o.resize();
    }
  };

  // two.bind('resize', function() {
  $(window).bind('resize', function() {

    var rect = container.getBoundingClientRect();
    two.renderer.setSize(rect.width, rect.height, animationRatio);

    two.width = rect.width;
    two.height = rect.height;

    width = two.width;
    height = two.height;

    center.x = width / 2;
    center.y = height / 2;

    min_dimension = width > height ? height : width;

    _.each(animations.map, iterateResize);

  });

  var changedColors = true;
  var changeColors = {};

  changeColors.start = function(onComplete) {
    current = (current + 1) % PALETTE.length;
    _.each(exports.list, iterateSoundUpdate);
    changedColors = false;
    if (_.isFunction(onComplete)) {
      changeColors.callback = onComplete;
    }
  };

  changeColors.hash = '3,';

  changeColors.callback = _.identity;

  changeColors.playing = function() {
    return !changedColors;
  };

  changeColors.onComplete = function() {
    changeColors.callback();
  };

  changeColors.clear = _.identity;

  // _.each(_.range(8), function(i) {
  //   monome[changeColors.hash + i] = changeColors;
  // });
  // monome['2,7'] = changeColors;  // Export for mobile

  var iterateSoundUpdate = function(o) {
    if (!_.isArray(o.sounds)) {
      return;
    }
    o.sound = o.sounds[current % o.sounds.length];
  };

  var iterateUpdate = function(o) {
    if (_.isFunction(o.update)) {
      o.update();
    }
  };

  var setColors = function(palette) {

    amount = 0;

    for (k in _colors) {

      v = _colors[k];
      c = palette[k];

      v.r = c.r;
      v.g = c.g;
      v.b = c.b;

      amount++;

      colors[k] = toRGB(v);

    }

    return amount;

  };

  var tweenColors = function(palette) {

    amount = 0;

    for (k in _colors) {

      v = _colors[k];

      c = palette[k];
      r = v.r, g = v.g, b = v.b;

      if (colorsEqual(c, v)) {
        amount++;
      }

      v.r = ease(r, c.r, drag);
      v.g = ease(g, c.g, drag);
      v.b = ease(b, c.b, drag);

      colors[k] = toRGB(v);

    }

    return amount;

  };

  var palette, amount, c, r, g, b, k, v;
  var exports = {

    initializeSound: function() {

      _.each(exports.list, iterateSoundUpdate);
      return exports;

    },

    // An update loop

    update: function() {

      if (changedColors) {
        return exports;
      }

      palette = PALETTE[current];

      if (has.mobile) {
        amount = setColors(palette);
      } else {
        amount = tweenColors(palette);
      }

      _.each(exports.list, iterateUpdate);
      domElement.style.background = colors.background;

      if (amount >= PALETTE.length) {

        if (!changedColors) {
          changedColors = true;
          changeColors.onComplete();
        }

        // return exports;

      }

      return exports;

    },

    map: monome,

    list: _.toArray(monome),

    getColorPalette: function() {
      return PALETTE[current];
    }

  };

  return exports;

})();

function makeTriangle(x, y, radius) {
  var t1 = TWO_PI * .33;
  var t2 = TWO_PI * .66;
  var t3 = TWO_PI;
  var points = [
    new Two.Anchor(radius * Math.cos(t1) + x, radius * Math.sin(t1) + y),
    new Two.Anchor(radius * Math.cos(t2) + x, radius * Math.sin(t2) + y),
    new Two.Anchor(radius * Math.cos(t3) + x, radius * Math.sin(t3) + y)
  ];
  var shape = two.makePath(points);
  return shape;
}

function colorsEqual(c1, c2, t) {
  var threshold = t || 0.25;
  return Math.abs(c1.r - c2.r) < threshold
    && Math.abs(c1.g - c2.g) < threshold
    && Math.abs(c1.b - c2.b) < threshold;
}

function ease(cur, dest, t) {
  var d = dest - cur;
  if (Math.abs(d) <= 0.0001) {
    return dest;
  } else {
    return cur + d * t;
  }
}

function toRGB(o) {
  return 'rgb(' + Math.round(o.r) + ',' + Math.round(o.g) + ',' + Math.round(o.b) + ')';
}

function angleBetween(v1, v2) {
  var dx = v2.x - v1.x;
  var dy = v2.y - v2.y;
  return Math.atan2(dy, dx);
}

function negate(v) {
  return v * -1;
}

function lerp(a, b, t) {
  return (b - a) * t + a;
}

function map(v, i1, i2, o1, o2) {
  return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
}

function sigmoid(a, b, t, k) {
  var k = k || 0.2;
  return lerp(a, b, (k * t) / ((1 + k) * t));
}
