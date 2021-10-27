$(function() {

  var container = $('#content'), $window, ui, buttons, width, height,
    landscape, $hint = $('#hint'), $credits = $('#credits'),
    mouse = new Two.Vector(), $embed = $('#embed'), embedding = false,
    interacting = false, $merchandise = $('#merchandise'),
    merchandising = false, $window = $(window);

  /**
   * Append Sound Generation to Animations
   */

  var letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  var path = window.location.href.match(/localhost/i) ? '/assets/' : '//storage.googleapis.com/cdn.patatap.com/';
  var filetype = '.mp3';
  var asset_count = 0, $loaded = $('#loaded');

  var soundsBuffered = _.after(1, function() {
    if (url.loop && url.loop.match(/(clap|groove)/ig)) {
      new Sound(path + url.loop.replace(/\//ig, '') + '-loop' + filetype, function() {
        this.play({
          loop: true
        });
      });
      initialize();
      return;
    }
    initialize();
  });

  Sound.ready(function() {

    _.each(animations.list, function(a, i) {
      if (a.filename) {
        a.sounds = [];
      }
    });

    var silent = document.createElement('audio');
    silent.addEventListener('canplay', loaded, false);
    silent.src = path + 'silent.mp3';
    silent.preload = 'auto';
    silent.load();

    function loaded(e) {
      $window
        .bind('click', enableAudio)
        .bind('visibilitychange', listenToEnableAudio);
      soundsBuffered();
      silent.removeEventListener('canplay', loaded, false);
    }

    function enableAudio(e) {
      Sound.enabled = true;
      silent.play();
      $window.unbind('click', enableAudio);
    }

    function listenToEnableAudio() {
      if (/hidden/i.test(document.visibilityState) && Sound.enabled) {
        Sound.enabled = false;
        $window
          .unbind('click', enableAudio)
          .bind('click', enableAudio);
      }
    }

  });

  function initialize() {

    animations.initializeSound();

    var hideEmbed = function(e) {
      if (!!$embed.has(e.target).length) {
        return;
      }
      $embed.fadeOut(function() {
        embedding = false;
      });
      $window.unbind('click', hideEmbed);
    };

    $('#embed-button').click(function(e) {
      e.preventDefault();
      $hint.fadeOut();
      $merchandise.fadeOut();
      $embed.fadeIn(function() {
        embedding = true;
        $embed.find('textarea').select();
        $window.bind('click', hideEmbed);
      });
    });

    var firstRun = true;

    $('#merchandise-button').click(function(e) {
      e.preventDefault();
      if (firstRun) {
        $merchandise.css({
          opacity: 1.0,
          display: 'none',
          zIndex: 0
        });
        firstRun = false;
      }
      $hint.fadeOut();
      $embed.fadeOut();
      $merchandise.fadeIn(function() {
        embedding = true;
        merchandising = true;
      });
    });

    $('#close-merchandise').click(function(e) {
      e.preventDefault();
      embedding = false;
      merchandising = false;
      $merchandise.fadeOut();
    });

    $window
      .bind('resize', function(e) {

        width = $window.width();
        height = $window.height();

        orientUserInterface(e);

      })
      .bind('mousemove', function(e) {

        if (embedding || url.boolean('kiosk')) {
          return;
        }

        mouse.set(e.clientX, e.clientY);

        // if (mouse.y > height - 64) {
        showCredits();
        // }

      })
      .bind('keydown', function(e, data) {

        if (e.metaKey || e.ctrlKey) {
          return;
        }

        e.preventDefault();
        var code = e.which || data;
        var index;

        switch (code) {

          // Q - P
          case 81:
            index = '0,0';
            break;
          case 87:
            index = '0,1';
            break;
          case 69:
            index = '0,2';
            break;
          case 82:
            index = '0,3';
            break;
          case 84:
            index = '0,4';
            break;
          case 89:
            index = '0,5';
            break;
          case 85:
            index = '0,6';
            break;
          case 73:
            index = '0,7';
            break;
          case 79:
            index = '0,8';
            break;
          case 80:
            index = '0,9';
            break;

          // A - L
          case 65:
            index = '1,0';
            break;
          case 83:
            index = '1,1';
            break;
          case 68:
            index = '1,2';
            break;
          case 70:
            index = '1,3';
            break;
          case 71:
            index = '1,4';
            break;
          case 72:
            index = '1,5';
            break;
          case 74:
            index = '1,6';
            break;
          case 75:
            index = '1,7';
            break;
          case 76:
            index = '1,8';
            break;

          // Z - M
          case 90:
            index = '2,0';
            break;
          case 88:
            index = '2,1';
            break;
          case 67:
            index = '2,2';
            break;
          case 86:
            index = '2,3';
            break;
          case 66:
            index = '2,4';
            break;
          case 78:
            index = '2,5';
            break;
          case 77:
            index = '2,6';
            break;
          // case 188:
          //   index = '2,7';
          //   break;

          // SPACE
          case 32:
            index = '3,0';
            break;

        }

        trigger(index);
        triggered();

      });

    if (has.touch) {
      $hint.find('.message').html('Press anywhere on the screen and turn up speakers');
      createMobileUI();
    } else {
      $credits.css('display', 'block');
      $hint.find('.message').html('Press any key, A to Z or spacebar, and turn up speakers');
    }

    two
      .bind('update', function(frameCount, deltaTime) {

        TWEEN.update();
        animations.update();

        if (midi.playing) {
          midi.update(deltaTime);
        }

        if (!ui) {
          return;
        }

        _.each(buttons.needsUpdate, updateButtons);

        ui.update();

      }).play();

    $window.trigger('resize');

    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
    }

    _.delay(function() {
      $('#lobby').fadeOut(triggerLogo);
      if (url.boolean('kiosk') /*|| (window.localStorage && window.localStorage.visited)*/) {
        $(document.body).addClass('kiosk');
        triggered();
        return;
      } else if (/merchandise/ig.test(url.hash)) {
        $('#merchandise-button').trigger('click');
        return;
      }
      $hint.fadeIn();
      if (window.localStorage) {
        window.localStorage.visited = true;
      }
    }, 1000);

  }

  function onMIDISuccess(midi) {

    var inputs = [];
    var outputs = [];
    var names = [];
    var $midi = $('.midi-connections');

    var show = function() {
      $hint.find('.message').animate({ opacity: 0 }, function() {
        $hint.css({
          display: 'block',
          opacity: 1
        });
        $midi.fadeIn();
      });
      hide();
    };
    var hide = _.debounce(function() {
      $midi.fadeOut(function() {
        $hint.fadeOut(function() {
          $hint.find('.message').css({ opacity: 1 });
        });
        showHint();
      });
    }, 5000);

    indicesToNotes = {};

    for (var k in midi.notesToIndices) {
      var v = midi.notesToIndices[k];
      indicesToNotes[v] = k;
    }

    // Expose callbacks for WKUserScript access in iOS applications
    window.onmidistatechange = init;
    window.onmidimessage = messageReceived;

    midi.addEventListener('statechange', init);
    init({ target: midi });

    onMIDISuccess.dispatch = function(index) {
      var duration = 100;
      var note = indicesToNotes[index];
      var velocity = 100;

      if (!note) {
        return;
      }

      var on = [144, note, velocity];
      var off = [128, note, 0];

      for (var i = 0; i < outputs.length; i++) {
        var output = outputs[i];
        output.send(on);
        output.send(off, Date.now() + duration);
      }

      if (window.webkit) {
        // Dispatch to WKWebView
        window.webkit.messageHandlers.midi.postMessage(on);
        setTimeout(function() {
          window.webkit.messageHandlers.midi.postMessage(off);
        }, duration);
      }

    };

    function init(e) {

      var midi = e.target;
      var deviceString;

      inputs.length = names.length = 0;

      for (var input of midi.inputs.values()) {
        if (!containsById(inputs, input)) {
          inputs.push(input);
          names.push(input.name);
        }
        input.onmidimessage = messageReceived;
      }

      for (var output of midi.outputs.values()) {
        if (!containsById(outputs, output)) {
          outputs.push(output);
        }
      }

      if (names.length <= 0) {
        $midi.html('Disconnected from all MIDI devices');
        return;
      } else if (names.length <= 1) {
        deviceString = names[0];
      } else if (names.length <= 2) {
        deviceString = names[0] + ' and ' + names[1];
      } else {
        var lastName = names.pop();
        deviceString = names.join(', ') + ', and ' + lastName;
        names.push(lastName);
      }

      $midi.html('Connected to these MIDI devices: ' + deviceString)

      show();

    }

    function messageReceived(message) {

      var command = message.data[0];
      var note = message.data[1];
      var velocity = (message.data.length > 2) ? message.data[2] : 0;

      switch (command) {
        case 144:
          if (velocity > 0) {
            noteOn(note, velocity);
          }
          break;
      }

    }

    function noteOn(note) {
      var index = midi.notesToIndices[note];
      if (index) {
        onMIDISuccess.receiving = true;
        trigger(index);
        triggered();
        onMIDISuccess.receiving = false;
      }
    }

  }

  function onMIDIFailure() {
    if (window.console && window.console.log) {
      window.console.log('Unable to connect to MIDI');
    }
  }

  function containsById(list, elem) {
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      if (item.id === elem.id) {
        return true;
      }
    }
    return false;
  }

  function createMobileUI() {

    ui = new Two({
      fullscreen: true
    }).appendTo(container[0]);

    ui.renderer.domElement.id = 'ui';

    buttons = [];
    buttons.width = buttons.height = 32;
    buttons.needsUpdate = {};
    buttons.map = {};

    buttons[0] = _.map(_.range(10), createButton, ui);
    buttons[1] = _.map(_.range(9), createButton, ui);
    buttons[2] = _.map(_.range(8), createButton, ui);

    var rows = 3;

    ui.update();

    var touches = [], e, x, y, l, row, col, index;

    var getIndex = function(x, y, px, py) {

      l = buttons.length;

      if (landscape) {
        row = Math.min(Math.max(Math.floor(l * y / height), 0), l - 1);
        l = buttons[row].length;
        col = Math.min(Math.max(Math.floor(l * x / width), 0), l - 1);
      } else {
        row = Math.min(Math.max(Math.floor(l * x / width), 0), l - 1);
        l = buttons[row].length;
        col = Math.min(Math.max(Math.floor(l * y / height), 0), l - 1);
      }

      return row + ',' + col;

    };

    var startTouchEnter = function(touch) {
      x = touch.clientX;
      y = touch.clientY;
      touches[touch.identifier] = {
        id: getIndex(x, y, x, y),
        x: x,
        y: y
      };
    };

    var updateTouchEnter = function(touch) {
      x = touch.clientX;
      y = touch.clientY;
      index = getIndex(x, y, touches[touch.identifier].x, touches[touch.identifier].y);
      if (touches[touch.identifier] && touches[touch.identifier].id !== index) {
        triggerButton(index, buttons.map[index]);
        touches[touch.identifier].id = index;
      }
      touches[touch.identifier].x = x;
      touches[touch.identifier].y = y;
    };

    var triggerButton = function(index, button) {

      trigger(index);
      triggered();

      if (animations.getColorPalette().isDark) {
        button.fill = 'rgba(255, 255, 255, 0.3)';
      } else {
        button.fill = 'rgba(0, 0, 0, 0.3)';
      }

      button.opacity = 1.0;
      buttons.needsUpdate[button.id] = button;

    };

    container
      .bind('touchstart', function(event) {

        e = event.originalEvent;
        _.each(e.touches, startTouchEnter);

      })
      .bind('touchmove', function(event) {

        e = event.originalEvent;
        _.each(e.touches, updateTouchEnter);

      })
      // Disable scrolling on mobile
      .bind('touchstart touchmove touchend touchcancel', function(e) {
        if (Sound.enabled && !(merchandising || $(e.target).hasClass('ios-app-store'))) {
          e.preventDefault();
          return false;
        }
      });

    _.each(buttons, function(group, i) {

      _.each(group, function(button, j) {

        var elem = button._renderer.elem;
        var index = i + ',' + j;

        buttons.map[index] = button;

        $(elem)
          .css({
            cursor: 'pointer'
          })
          .bind('mousedown touchstart', function(event) {

            e = event.originalEvent;
            triggerButton(index, button);

          });

      });

    });

  }

  function createButton() {

    var shape = this.makeRectangle(0, 0, buttons.width, buttons.height);
    shape.noFill().noStroke();
    shape.opacity = 0;
    shape.visible = false;
    return shape;

  }

  function orientUserInterface() {

    if (!ui) {
      return;
    }

    width = $window.width();
    height = $window.height();
    landscape = width >= height;
    var size = buttons.length;

    _.each(buttons, function(group, i) {

      var length = group.length;
      var w, h, w2, h2, x, y;

      if (landscape) {
        w = width / length;
        h = height / size;
      } else {
        w = width / size;
        h = height / length;
      }

      group.width = w;
      group.height = h;

      w /= 2;
      h /= 2;

      _.each(group, function(button, j) {

        var vertices = button.vertices;

        if (landscape) {
          x = width * (j + 0.5) / length;
          y = height * (i + 0.5) / size;
        } else {
          x = width * (i + 0.5) / size;
          y = height * (j + 0.5) / length;
        }

        vertices[0].set(- w, - h);
        vertices[1].set(w, - h);
        vertices[2].set(w, h);
        vertices[3].set(- w, h);

        button.translation.set(x, y);
        button.visible = true;

      });

    });

  }

  function updateButtons(button, i) {

    button.opacity += (- button.opacity) * 0.2;

    if (button.opacity <= 0.1) {
      button.opacity = 0;
      delete buttons.needsUpdate[button.id];
    }

  }

  function triggerLogo() {

    if (window.localStorage && window.localStorage.visited) {
      return;
    }

    trigger('0,9');
    trigger('2,6');
    trigger('1,7');
    trigger('2,1');

    if (window.localStorage) {
      window.localStorage.visited = true;
    }

  }

  function trigger(hash, silent) {

    var animation = animations.map[hash];

    if (animation) {
      if (animation.playing()) {
        animation.clear();
      }
      animation.start(undefined, silent);
      if (window.ga) {
        window.ga('send', 'event', 'animation', 'trigger', hash);
      }
    }

    if (!onMIDISuccess.receiving && onMIDISuccess.dispatch) {
      onMIDISuccess.dispatch(hash);
    }

  }

  if (window.midi) {
    midi.onTrigger(trigger);
  }

  var timeout;
  var startDemonstration = _.debounce(function() {
    interacting = false;
    triggerOccasionally();
  }, 20000);
  var reloadOnIdle = _.debounce(function() {
    window.location.reload();
  }, 30 * 60 * 1000);

  function triggerOccasionally() {

    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }

    if (interacting) {
      return;
    }

    var index = Math.floor(Math.random() * animations.list.length);

    // trigger(Math.random() > 0.5 ? '2,1' : '1,1', true);
    trigger(animations.list[index].hash, true);

    timeout = setTimeout(function() {

      requestAnimationFrame(triggerOccasionally);

    }, 2000);

  }

  var showHint = _.debounce(function() {
    if (embedding) {
      showHint();
      return;
    }
    $hint.fadeIn();
  }, 20000);  // Twenty Second timeout

  function triggered() {
    // if (url.boolean('kiosk')) {
    //   startDemonstration();
    //   reloadOnIdle();
    //   interacting = true;
    //   return;
    // }
    $hint.fadeOut();
    showHint();
  }

  var hideCredits = _.debounce(function() {
    if ($credits.hasClass('active') || mouse.y > height - 64) {
      hideCredits();
      return;
    }
    container.css('top', 0);
  }, 1000);

  function showCredits() {
    container.css('top', - 64 + 'px');
    hideCredits();
  }

});

if (window.console && window.console.log) {
  window.console.log('Check out the code at http://github.com/jonobr1/Neuronal-Synchrony');
}
