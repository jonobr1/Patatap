
var animationRatio = url.int('resolution', 100) / 100;
var two = new Two({
  type: Two.Types.canvas,///(url.boolean('canvas') || (has.mobile && has.iOS) || (!has.mobile && has.Firefox)) ? Two.Types.canvas : Two.Types.svg
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
      playing = true;
    };
    var update = function() {

    };
    var resize = function() {

    };

    start.onComplete = reset;
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
      filename: ''
    };

    monome[exports.hash] = exports;

    return exports;

  })();
  **/

  var beach = (function() {

    var callback = _.identity;
    var playing = false;

    var radius = Math.max(center.x, center.y);
    var amount = 6;
    var group = two.makeGroup();
    group.translation.copy(center);
    group.visible = false;

    var triangles = _.map(_.range(amount), function(i) {

      var triangle = two.makePolygon(0, 0, radius, 3);
      _.each(triangle.vertices, function(v) {
        v.y += radius;
      });
      triangle.rotation = Math.PI * 2 * i / amount
      var color = PROPERTIES[i % PROPERTIES.length];
      triangle.fill = colors[color];
      triangle.noStroke();
      group.add(triangle);

    });

    var circle = two.makeCircle(0, 0, center.y / 3);
    circle.fill = '#ffff99';
    circle.noStroke();
    circle.visible = false;

    group.add(circle);

    var animate_in = new TWEEN.Tween(group)
      .to({ rotation: group.rotation + Math.PI * 2 * 2 }, duration)
      .easing(TWEEN.Easing.Circular.InOut)
      .onComplete(function() {
        animate_out.start();
      });

    var animate_out = new TWEEN.Tween(circle)
      .to({ scale: 10 }, duration)
      .easing(TWEEN.Easing.Circular.InOut)
      .onComplete(function() {
        callback();
        reset();
      });

    var start = function(silent) {
      playing = true;
      animate_in.to({ rotation: group.rotation + Math.PI * 2 * 2 }, duration);
      circle.scale = 1;
      group.visible = true;
      group.opacity = 1;
      circle.visible = true;
      animate_in.start();
      if (!silent && exports.sound) {
        exports.sound.stop().play();
      }
    };
    var update = function() {

    };
    var resize = function() {

    };

    start.onComplete = reset;
    reset();

    function reset() {
      playing = false;
      group.visible = false;
      circle.visible = false;
    }

    var exports = {
      start: start,
      update: update,
      resize: resize,
      clear: reset,
      playing: function() { return playing; },
      hash: '2,4',
      filename: 'K'
    };

    monome[exports.hash] = exports;

    return exports;

  })();

  var spaghetti_os = (function() {

    var names = ['achos!', 'adobe', 'andoni', 'atelier', 'bienal', 'carl', 'carla', 'cordova', 'can', 'daniel', 'danny', 'david', 'claudio', 'digitalkitchen', 'gavin', 'merlin', 'goldenwolf', 'hey', 'hiro', 'ideo', 'javier', 'johnny', 'joshua', 'kiran', 'lettersaremyfriends', 'linda', 'machineast', 'matt', 'morphika', 'monika', 'mrbingo', 'musketon', 'non-format', 'outrostudio', 'pablo', 'paula', 'randomstudio', 'sid', 'signalnoise', 'somerset', 'mills', 'themill', 'spin', 'tony', 'foundry', 'thesixandfive', 'timothy', 'unit9', 'ustwo', 'vasava', 'audi', 'stooorm', 'wix', 'lullatone', 'jonobr1'];

    var amount = 0;
    var gravity = new Two.Vector(0, 0.66);
    var callback = _.identity;
    var playing = false;

    _.each(names, function(name) {
      amount = Math.max(name.length, amount);
    });

    var letters = _.map(_.range(amount), function(i) {

      var text = new Two.Text('A', center.x, center.y);
      text.noStroke();

      text.fill = colors.middleground;
      text.weight = 700;
      text.family = '"Proxima Nova", proxima-nova, arial, sans-serif';
      text.alignment = 'center';
      text.baseline = 'middle';
      text.size = 150;
      text.visible = false;

      text.velocity = new Two.Vector();
      text.velocity.x = 10 * (Math.random() - 0.5);
      text.velocity.y = - (20 * Math.random() + 13);
      text.velocity.r = Math.random() * Math.PI / 8;

      return text;

    });

    two.add(letters);

    var start = function() {

      playing = true;
      var name = names[Math.floor(Math.random() * names.length)];

      for (var i = 0; i < name.length; i++) {

        var text = letters[i];

        text.value = name[i].toUpperCase();
        text.velocity.y = - (20 * Math.random() + 13);
        text.translation.x = Math.random() * width / 2 + width / 4;
        text.translation.y = height * 1.25;
        text.visible = true;

      }

    };
    var update = function() {

      _.each(letters, function(letter) {
        letter.fill = colors.middleground;
      });

    };
    var resize = function() {

    };

    two.bind('update', function() {

      for (var i = 0; i < letters.length; i++) {

        var text = letters[i];

        if (text.visible) {

          text.rotation += text.velocity.r;
          text.translation.addSelf(text.velocity);
          text.velocity.addSelf(gravity);

          if (text.velocity.y > 0 && text.translation.y > height)  {
            text.visible = false;
          }

        }

      }
    });

    start.onComplete = reset;
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
      hash: '2,0',
      filename: ''
    };

    monome[exports.hash] = exports;

    return exports;

  })();

  var toilet = (function() {

    var callback = _.identity;
    var playing = false;

    var amount = 32;
    var group = two.makeGroup();
    var radius = 12;
    var last_duration = 0;
    var ao;

    var particles = _.map(_.range(amount), function(i) {

      var o = makeObject(radius);

      if (o.getDuration() > last_duration) {
        if (ao) {
          ao.onComplete(_.identity);
        }
        last_duration = o.getDuration();
        ao = o.animate_out;
        o.animate_out.onComplete(function() {
          start.onComplete();
          callback();
        });
      }

      return o;

    });

    group.add(particles);

    var start = function() {
      playing = true;
      group.visible = true;
      _.each(particles, function(p) {

        p.scale = 1;
        p.theta = Math.random() * TWO_PI;
        p.revolutions = Math.random() * TWO_PI * 5 + TWO_PI;
        p.amplitude = Math.random() * p.revolutions / (TWO_PI * 6)
          * Math.max(width, height) * 0.66;

        p.rotation = - p.revolutions;

        p.translation.set(
          p.amplitude * Math.cos(p.theta),
          p.amplitude * Math.sin(p.theta)
        );

        p.animate_out.stop();
        p.animate_in.stop();

        p.animate_in.start();

      });
    };
    var update = function() {
      _.each(particles, function(p) {
        if (p.fillStyle) {
          p.fill = colors[p.fillStyle];
        }
        if (p.strokeStyle) {
          p.stroke = colors[p.strokeStyle];
        }
      });
    };
    var resize = function() {
      group.translation.copy(center);
    };

    start.onComplete = reset;
    reset();

    function reset() {
      playing = false;
      group.visible = false;
    }

    function makeObject(r) {

      var path;
      var color = PROPERTIES[Math.floor((PROPERTIES.length - 1) * Math.random()) + 1];

      if (Math.random() > 0.5) {

        // Plus Sign
        path = new Two.Path([
          new Two.Anchor(-r, 0, 0, 0, 0, 0, Two.Commands.move),
          new Two.Anchor(r, 0, 0, 0, 0, 0, Two.Commands.line),
          new Two.Anchor(0, -r, 0, 0, 0, 0, Two.Commands.move),
          new Two.Anchor(0, r, 0, 0, 0, 0, Two.Commands.line)
        ], false, false, true);
        path.strokeStyle = color
        path.stroke = colors[path.strokeStyle];
        path.noFill();
        path.linewidth = radius / 2;

      } else {

        // Star Symbol
        path = new Two.Star(0, 0, r / 2, r, Math.floor(5 * Math.random()) + 4);
        path.fillStyle = color;
        path.fill = colors[path.fillStyle];
        path.noStroke();

      }

      path.theta = Math.random() * TWO_PI;
      path.revolutions = Math.random() * TWO_PI * 9 + TWO_PI;
      path.amplitude = Math.random() * path.revolutions / (TWO_PI * 10)
        * Math.min(width, height) / 2;

      path.destination = new Two.Vector();
      path.animate_in = new TWEEN.Tween(path)
        .to({ scale: 3 * Math.random() + 1 }, Math.random() * duration * 0.5 + duration * 0.5)
        .easing(TWEEN.Easing.Elastic.Out)
        .onComplete(function() {
          path.animate_out.start();
        });

      path.animate_out = new TWEEN.Tween(path)
        .to({ scale: 0 }, duration * Math.random() + duration * 0.33)
        .easing(TWEEN.Easing.Sinusoidal.In)
        .onUpdate(function(t) {

          var a = path.amplitude * (1 - t);
          var x = a * Math.cos(path.revolutions * t + path.theta);
          var y = a * Math.sin(path.revolutions * t + path.theta);

          path.translation.set(x, y);
          path.rotation = - (1 - t) * path.revolutions;

        });

      path.getDuration = function() {
        return this.animate_in.getDuration() + this.animate_out.getDuration();
      };

      return path;

    }

    var exports = {
      start: start,
      update: update,
      resize: resize,
      clear: reset,
      playing: function() { return playing; },
      hash: '1,0',
      filename: ''
    };

    monome[exports.hash] = exports;

    return exports;

  })();

  var bubbles = (function() {

    var callback = _.identity;
    var playing = false;

    var cols = 8;
    var rows = 8;
    var elements = [];
    var group = two.makeGroup();

    var animate_out = function(circle) {
      return function() {
        circle.animate_out.start();
      };
    };
    var complete = function() {
      reset();
      callback();
    };

    var i = 0;
    for (var c = 0; c < cols; c++) {
      for (var r = 0; r < rows; r++) {

        var xpct = (c + 0.5) / cols;
        var ypct = (r + 0.5) / rows;

        var x = xpct * width - width / 2;
        var y = ypct * height - height / 2;

        var circle = two.makeCircle(x, y, 10);
        circle.fill = colors.accent;
        circle.noStroke();
        circle.animate_in = new TWEEN.Tween(circle)
          .to({ scale: 1 }, duration * 0.35)
          .delay(c * 100)
          .easing(TWEEN.Easing.Circular.Out)
          .onComplete(animate_out(circle));

        circle.animate_out = new TWEEN.Tween(circle)
          .to({ scale: 0 }, duration * 0.35)
          .easing(TWEEN.Easing.Circular.In);
        circle.scale = 0;

        elements.push(circle);
        group.add(circle);

        if (i >= cols * rows - 1) {
          circle.animate_out.onComplete(complete);
        }

        i++;

      }
    }

    var start = function() {
      playing = true;
      group.visible = true;
      group.rotation = Math.random() > 0.5 ? 0 : Math.PI;
      _.each(elements, function(circle) {

        circle.animate_out.stop();
        circle.animate_in.stop();
        circle.scale = 0;

        circle.animate_in.start();

      });
    };
    var update = function() {
      _.each(elements, function(e) {
        e.fill.colors = colors.accent;
      });
    };
    var resize = function() {

      group.translation.copy(center);
      _.each(elements, function(circle, i) {

        var c = i % cols;
        var r = Math.floor(i / cols);

        var xpct = (c + 0.5) / cols;
        var ypct = (r + 0.5) / rows;

        var x = xpct * width - width / 2;
        var y = ypct * height - height / 2;

        circle.translation.set(x, y);

      });

    };

    start.onComplete = reset;
    reset();

    function reset() {
      playing = false;
      group.visible = false;
    }

    var exports = {
      start: start,
      update: update,
      resize: resize,
      clear: reset,
      playing: function() { return playing; },
      hash: '0,1',
      filename: ''
    };

    monome[exports.hash] = exports;

    return exports;

  })();

  var strike = (function() {

    var callback = _.identity;
    var playing = false;

    var line = two.makeLine(-0.5, 0.5, 0.5, -0.5);
    line.noFill().stroke = colors.black;
    // line.opacity = 0;
    line.cap = 'round';

    var animate_in = new TWEEN.Tween(line)
      .easing(TWEEN.Easing.Circular.Out)
      .onComplete(function() {
        animate_out.start();
      });

    var animate_out = new TWEEN.Tween(line)
      .easing(TWEEN.Easing.Circular.In)
      .onComplete(function() {
        reset();
        callback();
      })

    var start = function() {
      playing = true;
      // line.opacity = 0;
      line.visible = true;
      var rotation = Math.random() * Math.PI * 10 + Math.PI * 2;
      if (Math.random() > 0.5) {
        rotation *= -1;
      }
      animate_in.to({ rotation: rotation }, duration * 0.5)
      animate_out.to({ rotation: rotation * 2 }, duration * 0.5)
      animate_in.start();
    };
    var update = function() {
      line.stroke = colors.black;
    };
    var resize = function() {
      line.translation.copy(center);
      line.scale = Math.min(width, height) * 0.6;
      line.linewidth = 12 / line.scale;
    };

    start.onComplete = reset;
    reset();

    function reset() {
      playing = false;
      line.visible = false;
    }

    var exports = {
      start: start,
      update: update,
      resize: resize,
      clear: reset,
      playing: function() { return playing; },
      hash: '1,1',
      filename: ''
    };

    monome[exports.hash] = exports;

    return exports;

  })();

  var zigzag = (function() {

    var playing = false;
    var callback = _.identity;

    var amount = 120, w = width / 16, phi = 6, h = height * 0.66;
    var offset = Math.PI * 0.5;

    var points = _.map(_.range(amount), function(i) {
      var pct = i / amount;
      var theta = TWO_PI * phi * pct + offset;
      var x = w * Math.sin(theta);
      var y = map(pct, 0, 1, - h / 2, h / 2);
      return new Two.Anchor(x, y);
    });

    var zigzag = two.makePath(points, true);
    zigzag.stroke = colors.black;
    zigzag.linewidth = min_dimension / 30;
    zigzag.noFill();
    zigzag.join = 'miter';
    zigzag.miter = 4;
    zigzag.cap = 'butt';

    var start = function(onComplete, silent) {
      zigzag.visible = true;
      _in.start();
      if (!silent && exports.sound) {
        exports.sound.stop().play();
      }
      if (_.isFunction(onComplete)) {
        callback = onComplete;
      }
    };

    start.onComplete = reset;

    var update = function() {
      zigzag.stroke = colors.black;
    };
    var resize = function() {
      w = width / 16;
      h = height * 0.66;
    };

    var _in = new TWEEN.Tween(zigzag)
      .to({ ending: 1.0 }, duration * 0.25)
      .easing(Easing.Sinusoidal.Out)
      .onStart(function() {
        playing = true;
      })
      .onComplete(function() {
        _out.start();
      });

    var _out = new TWEEN.Tween(zigzag)
      .to({ beginning: 1.0 }, duration * 0.25)
      .easing(Easing.Sinusoidal.Out)
      .onComplete(function() {
        start.onComplete();
        callback();
      });

    var i, v, pct, theta, x, y, index;
    function reset() {

      if (Math.random() > 0.5) {
        zigzag.translation.set(width * 0.85, center.y);
      } else {
        zigzag.translation.set(width * 0.15, center.y);
      }

      zigzag.visible = false;
      index = Math.random() * 4;
      if (index > 3) {
        phi = 5;
      } else if (index > 2) {
        phi = 4;
      } else if (index > 1) {
        phi = 2
      } else {
        phi = 1;
      }

      offset = Math.PI / 2;
      zigzag.rotation = Math.random() > 0.5 ? Math.PI : 0;
      x = 0;
      zigzag.beginning = zigzag.ending = 0;

      for (i = 0; i < amount; i++) {
        v = points[i];
        pct = i / amount;
        theta = Math.abs((((2 * (pct * TWO_PI * phi + offset) / Math.PI) - 1) % 4) - 2) - 1;
        x = theta * w / 2;
        y = map(pct, 0, 1, - h / 2, h / 2);
        v.set(x, y);
      }
      playing = false;

      _in.stop();
      _out.stop();

    }

    reset();

    var exports = {
      start: start,
      update: update,
      clear: reset,
      resize: resize,
      playing: function() { return playing; },
      hash: '1,8',
      filename: 'zig-zag'
    };

    monome[exports.hash] = exports;

    return exports;

  })();

  var moon = (function() {

    var playing = false;
    var callback = _.identity;
    var amount = 42, half = amount / 2;
    var radius = min_dimension * 0.4;

    var destinations = [];
    var points = [];
    _.each(_.range(amount), function(i) {
      var pct = i / (amount - 1);
      var theta = pct * TWO_PI;
      var x = radius * Math.cos(theta);
      var y = radius * Math.sin(theta);
      destinations.push({ x: x, y: y });
      points.push(new Two.Anchor(x, y));
    });

    var moon = two.makePath(points);
    moon.translation.set(center.x, center.y);
    moon.fill = colors.foreground;
    moon.noStroke();

    var options = { ending: 0, beginning: 0 };

    var start = function(onComplete, silent) {
      moon.visible = true;
      _in.start();
      if (!silent && exports.sound) {
        exports.sound.stop().play();
      }
      if (_.isFunction(onComplete)) {
        callback = onComplete;
      }
    };

    start.onComplete = reset;

    var update = function() {
      moon.fill = colors.foreground;
    };
    var resize = function() {
      radius = min_dimension * 0.4;
      moon.translation.set(center.x, center.y);
    };

    var i, t, v, d, x, y, pct, theta;
    var _in = new TWEEN.Tween(options)
      .to({ ending: 1.0 }, duration / 2)
      .easing(Easing.Sinusoidal.Out)
      .onUpdate(function(t) {
        for (i = half; i < amount; i++) {
          points[i].y = lerp(points[i].y, destinations[i].y, t);
        }
      })
      .onStart(function() {
        playing = true;
      })
      .onComplete(function() {
        _out.start();
      });

    var _out = new TWEEN.Tween(options)
      .to({ beginning: 1.0 }, duration / 2)
      .easing(Easing.Sinusoidal.Out)
      .onUpdate(function(t) {
        for (i = 0; i < half; i++) {
          points[i].y = lerp(points[i].y, negate(destinations[i].y), t);
        }
      })
      .onComplete(function() {
        start.onComplete();
        callback();
      });

    function reset() {
      moon.visible = false;
      moon.rotation = Math.random() * TWO_PI;
      options.beginning = options.ending = 0;
      for (i = 0; i < amount; i++) {
        v = points[i];
        pct = i / (amount - 1);
        theta = pct * TWO_PI;
        x = radius * Math.cos(theta);
        y = radius * Math.sin(theta);
        destinations[i].x = x;
        destinations[i].y = y;
        v.set(x, Math.abs(y));
      }
      playing = false;
      _in.stop();
      _out.stop();
    }

    reset();

    var exports = {
      start: start,
      update: update,
      clear: reset,
      resize: resize,
      playing: function() { return playing; },
      hash: '0,2',
      filename: 'moon'
    };

    monome[exports.hash] = exports;

    return exports;

  })();

  var offf = (function() {

    var callback = _.identity;
    var playing = false;
    var group = two.makeGroup();
    group.translation.copy(center);

    var amount = 4;
    var radius = Math.min(width, height) / 8;
    var drift = 0.85;
    var extension = 1.33;
    var o = two.makeCircle(0, 0, radius);
    o.linewidth = radius / 2;
    o.noFill();
    o.stroke = colors.white;

    fs = two.makeGroup();
    group.add(fs, o);

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

        f.animate_in.stop();
        f.animate_out.stop();

        f.animate_in.start();

      });

      animate_out.stop();
      animate_in.stop();

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
      group.translation.copy(center);
      group.translation.x += radius / 4;

      o.linewidth = radius / 2;
      fs.translation.set(radius / 2, 0);

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

      dest_in.x = - radius * 1.5;
      dest_in.y = 0;
      dest_out.x = dest_in.x + radius * drift;
      dest_out.y = 0;

    };

    var dest_in = { x: 0, y: 0 };
    var dest_out = { x: 0, y: 0 };

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
      filename: ''
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
