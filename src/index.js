import $ from 'jquery';
import { clamp, debounce, each, range } from './underscore.js';
import Two from 'two.js';
import * as TWEEN from '@tweenjs/tween.js';
import { mouse, path, two } from './common.js';
import palette from './animations/palette.js';
import animations from './animations/index.js';

// Background
import './animations/change.js';
import './animations/wipe.js';
import './animations/veil.js';
import './animations/prisms.js';

// Middleground
import './animations/clay.js';
import './animations/pistons.js';
import './animations/flashes.js';
import './animations/spiral.js';
import './animations/suspension.js';
import './animations/confetti.js';
import './animations/timer.js';
import './animations/ufo.js';

// Foreground
import './animations/splits.js';
import './animations/moon.js';
import './animations/strike.js';
import './animations/zigzag.js';
import './animations/squiggle.js';
import './animations/bubbles.js';
import './animations/corona.js';
import './animations/pinwheel.js';
import './animations/glimmer.js';

$(() => {
  const $container = $('#content'),
    $hint = $('#hint'),
    $credits = $('#credits'),
    $embed = $('#embed'),
    $merchandise = $('#merchandise'),
    $window = $(window);

  let ui,
    buttons,
    width,
    height,
    landscape,
    embedding = false,
    playing = false,
    merchandising = false;

  /**
   * Append Sound Generation to Animations
   */

  const showHint = debounce(() => {
    if (embedding) {
      showHint();
      return;
    }
    $hint.fadeIn();
  }, 20000); // Twenty Second timeout

  const hideCredits = debounce(() => {
    if (mouse.y > height - 64) {
      hideCredits();
      return;
    }
    $container.css('top', 0);
  }, 1000);

  const silent = document.createElement('audio');
  silent.addEventListener('canplay', loaded, false);
  silent.src = `${path}silent.mp3`;
  silent.preload = 'auto';
  silent.load();

  function loaded() {
    $container
      .bind('click', enableAudio)
      .bind('visibilitychange', listenToEnableAudio);
    silent.removeEventListener('canplay', loaded, false);
    initialize();
  }

  function enableAudio() {
    playing = true;
    silent.play();
    $container.unbind('click', enableAudio);
  }

  function listenToEnableAudio() {
    if (/hidden/i.test(document.visibilityState) && playing) {
      playing = false;
      $container.unbind('click', enableAudio).bind('click', enableAudio);
    }
  }

  function initialize() {
    two.appendTo($container[0]);
    animations.updateAudio();

    $('#embed-button').click((e) => {
      e.preventDefault();
      $hint.fadeOut();
      $merchandise.fadeOut();
      $embed.fadeIn(selectEmbed);
    });

    let firstRun = true;

    $('#merchandise-button').click((e) => {
      e.preventDefault();
      if (firstRun) {
        $merchandise.css({
          opacity: 1.0,
          display: 'none',
          zIndex: 0,
        });
        firstRun = false;
      }
      $hint.fadeOut();
      $embed.fadeOut();
      $merchandise.fadeIn(() => {
        embedding = true;
        merchandising = true;
      });
    });

    $('#close-merchandise').click((e) => {
      e.preventDefault();
      embedding = false;
      merchandising = false;
      $merchandise.fadeOut();
    });

    $window
      .bind('resize', () => {
        width = $window.width();
        height = $window.height();
        orientUserInterface();
      })
      .bind('mousemove', (e) => {
        if (embedding || url.boolean('kiosk')) {
          return;
        }

        mouse.set(e.clientX, e.clientY);
        showCredits();
      })
      .bind('keydown', (e, data) => {
        if (e.metaKey || e.ctrlKey) {
          return;
        }

        e.preventDefault();
        const code = e.which || data;
        let index;

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
        }

        trigger(index);
        triggered();
      })
      .bind('keyup', (e) => {
        const code = e.which;
        switch (code) {
          // SPACE
          case 32:
            index = '2,7';
            trigger(index);
            triggered();
            break;
          case 27:
            if (merchandising) {
              $('#close-merchandise').click();
            }
            break;
        }
      });

    createMobileUI();

    if (navigator.maxTouchPoints > 0) {
      $hint
        .find('.message')
        .html('Press anywhere on the screen and turn up speakers');
    } else {
      if (!url.boolean('kiosk')) {
        $credits.css('display', 'block');
      }
      $hint
        .find('.message')
        .html('Press any key, A to Z or spacebar, and turn up speakers');
    }

    two
      .bind('update', () => {
        TWEEN.update();
        palette.update();

        if (!ui) {
          return;
        }

        for (let k in buttons.needsUpdate) {
          const button = buttons.needsUpdate[k];
          if (button) {
            updateButton(button);
          }
        }
      })
      .play();

    $window.trigger('resize');

    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
    }

    setTimeout(() => {
      $('#lobby').fadeOut(triggerLogo);
      if (url.boolean('kiosk')) {
        $(document.body).addClass('kiosk');
        triggered();
        $hint.fadeIn();
        return;
      } else if (/merchandise/gi.test(window.location.pathname)) {
        $('#merchandise-button').trigger('click');
        return;
      }
      $hint.fadeIn();
    }, 1000);
  }

  function hideEmbed(e) {
    if (!!$embed.has(e.target).length) {
      return;
    }
    $embed.fadeOut(() => {
      embedding = false;
    });
    $window.unbind('click', hideEmbed);
  }

  function selectEmbed() {
    embedding = true;
    $embed.find('textarea').select();
    $window.bind('click', hideEmbed);
  }

  function orientUserInterface() {
    if (!ui) {
      return;
    }

    width = $window.width();
    height = $window.height();
    landscape = width >= height;
    const size = buttons.length;

    buttons.forEach((group, i) => {
      const length = group.length;
      let w, h, x, y;

      if (landscape) {
        w = width / length;
        h = height / size;
      } else {
        w = width / size;
        h = height / length;
      }

      group.width = w;
      group.height = h;

      group.forEach((button, j) => {
        if (landscape) {
          x = (width * (j + 0.5)) / length;
          y = (height * (i + 0.5)) / size;
        } else {
          x = (width * (i + 0.5)) / size;
          y = (height * (j + 0.5)) / length;
        }

        button.width = w;
        button.height = h;

        button.translation.set(x, y);
        button.visible = true;
      });
    });
  }

  function updateButton(button) {
    button.opacity += -button.opacity * 0.2;

    if (button.opacity <= 0.1) {
      button.opacity = 0;
      delete buttons.needsUpdate[button.id];
    }
  }

  function triggerLogo() {
    if (window.localStorage && window.localStorage.getItem('visited')) {
      return;
    }

    trigger('0,9');
    trigger('2,6');
    trigger('1,7');
    trigger('2,1');

    if (window.localStorage) {
      window.localStorage.setItem('visited', true);
    }
  }

  function onMIDISuccess(midi) {
    const inputs = [];
    const outputs = [];
    const names = [];
    const $midi = $('.midi-connections');

    const show = () => {
      $hint.find('.message').animate({ opacity: 0 }, () => {
        $hint.css({
          display: 'block',
          opacity: 1,
        });
        $midi.fadeIn();
      });
      hide();
    };
    const hide = debounce(() => {
      $midi.fadeOut(() => {
        $hint.fadeOut(() => {
          $hint.find('.message').css({ opacity: 1 });
        });
        showHint();
      });
    }, 5000);

    const notesToIndices = {
      21: '2,0',
      23: '2,1',
      24: '2,2',
      26: '2,3',
      28: '2,4',
      29: '2,5',
      31: '2,6',
      33: '1,0',
      35: '1,1',
      36: '1,2',
      38: '1,3',
      40: '1,4',
      41: '1,5',
      43: '1,6',
      45: '1,7',
      47: '1,8',
      48: '0,0',
      50: '0,1',
      52: '0,2',
      53: '0,3',
      55: '0,4',
      57: '0,5',
      59: '0,6',
      60: '0,7',
      62: '0,8',
      64: '0,9',
      65: '2,0',
      67: '2,1',
      69: '2,2',
      71: '2,3',
      72: '2,4',
      74: '2,5',
      76: '2,6',
      77: '1,0',
      79: '1,1',
      81: '1,2',
      83: '1,3',
      84: '1,4',
      86: '1,5',
      88: '1,6',
      89: '1,7',
      91: '1,8',
      93: '0,0',
      95: '0,1',
      96: '0,2',
      98: '0,3',
      100: '0,4',
      101: '0,5',
      103: '0,6',
      105: '0,7',
      107: '0,8',
      108: '0,9',
      // SPACE
      22: '3,0',
      106: '3,0',
    };

    const indicesToNotes = {};

    for (let k in notesToIndices) {
      const v = notesToIndices[k];
      indicesToNotes[v] = k;
    }

    // Expose callbacks for WKUserScript access in iOS applications
    window.onmidistatechange = init;
    window.onmidimessage = messageReceived;

    midi.addEventListener('statechange', init);
    init({ target: midi });

    onMIDISuccess.dispatch = (index) => {
      const duration = 100;
      const note = indicesToNotes[index];
      const velocity = 100;

      if (!note) {
        return;
      }

      const on = [144, note, velocity];
      const off = [128, note, 0];

      for (let i = 0; i < outputs.length; i++) {
        const output = outputs[i];
        output.send(on);
        output.send(off, Date.now() + duration);
      }

      if (window.webkit) {
        // Dispatch to WKWebView
        window.webkit.messageHandlers.midi.postMessage(on);
        setTimeout(() => {
          window.webkit.messageHandlers.midi.postMessage(off);
        }, duration);
      }
    };

    function init(e) {
      const midi = e.target;
      let deviceString;

      inputs.length = names.length = 0;

      for (let input of midi.inputs.values()) {
        if (!containsById(inputs, input)) {
          inputs.push(input);
          names.push(input.name);
        }
        input.onmidimessage = messageReceived;
      }

      for (let output of midi.outputs.values()) {
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
        const lastName = names.pop();
        deviceString = `${names.join(', ')}, and ${lastName}`;
        names.push(lastName);
      }

      $midi.html(`Connected to these MIDI devices:, ${deviceString}`);

      show();
    }

    function messageReceived(message) {
      const command = message.data[0];
      const note = message.data[1];
      const velocity = message.data.length > 2 ? message.data[2] : 0;

      switch (command) {
        case 144:
          if (velocity > 0) {
            noteOn(note, velocity);
          }
          break;
      }
    }

    function noteOn(note) {
      const index = notesToIndices[note];
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
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (item.id === elem.id) {
        return true;
      }
    }
    return false;
  }

  function createMobileUI() {
    ui = two.makeGroup();

    buttons = new Array(3);
    buttons.width = buttons.height = 32;
    buttons.needsUpdate = {};
    buttons.map = {};

    buttons[0] = range(10).map(createButton);
    buttons[1] = range(9).map(createButton);
    buttons[2] = range(8).map(createButton);

    const touches = [];
    let e, x, y, l, row, col, index;

    $container
      .bind('touchstart', (event) => {
        e = event.originalEvent;
        each(e.touches, startTouchEnter);
      })
      .bind('mousedown', (event) => {
        startTouchEnter(event.originalEvent);
        $(window).bind('mousemove', mousemove).bind('mouseup', mouseup);
      })
      .bind('touchmove', (event) => {
        e = event.originalEvent;
        each(e.touches, updateTouchEnter);
      })
      // Disable scrolling on mobile
      .bind('touchstart touchmove touchend touchcancel', (event) => {
        if (
          playing &&
          !(merchandising || $container.hasClass('ios-app-store'))
        ) {
          event.preventDefault();
          return false;
        }
      });

    buttons.forEach((group, i) => {
      group.forEach((button, j) => {
        const index = `${i},${j}`;
        buttons.map[index] = button;
      });
    });

    function createButton() {
      const shape = new Two.Rectangle(0, 0, buttons.width, buttons.height);
      shape.noFill().noStroke();
      shape.opacity = 0;
      shape.visible = false;
      ui.add(shape);
      return shape;
    }

    function getIndex(x, y) {
      l = buttons.length;

      if (landscape) {
        row = clamp(Math.floor((l * y) / height), 0, l - 1);
        l = buttons[row].length;
        col = clamp(Math.floor((l * x) / width), 0, l - 1);
      } else {
        row = clamp(Math.floor((l * x) / width), 0, l - 1);
        l = buttons[row].length;
        col = clamp(Math.floor((l * y) / height), 0, l - 1);
      }

      return `${row},${col}`;
    }

    function startTouchEnter(touch) {
      x = touch.clientX;
      y = touch.clientY;
      index = getIndex(x, y, x, y);
      touches[touch.identifier] = {
        id: index,
        x: x,
        y: y,
      };
      triggerButton(index, buttons.map[index]);
    }

    function updateTouchEnter(touch) {
      x = touch.clientX;
      y = touch.clientY;
      index = getIndex(
        x,
        y,
        touches[touch.identifier].x,
        touches[touch.identifier].y
      );
      if (touches[touch.identifier] && touches[touch.identifier].id !== index) {
        triggerButton(index, buttons.map[index]);
        touches[touch.identifier].id = index;
      }
      touches[touch.identifier].x = x;
      touches[touch.identifier].y = y;
    }

    function triggerButton(index, button) {
      trigger(index);
      triggered();

      if (palette.get().isDark) {
        button.fill = 'rgba(255, 255, 255, 0.3)';
      } else {
        button.fill = 'rgba(0, 0, 0, 0.3)';
      }

      button.opacity = 1.0;
      buttons.needsUpdate[button.id] = button;
    }

    function mousemove(e) {
      updateTouchEnter(e.originalEvent);
    }

    function mouseup(e) {
      $(window).unbind('mousemove', mousemove).unbind('mouseup', mouseup);
    }
  }

  function trigger(hash, silent) {
    const animation = animations.map[hash];

    if (animation) {
      if (animation.playing) {
        animation.clear();
      }
      animation.start(silent);
      if (window.gtag) {
        window.gtag('event', 'animation', {
          trigger: hash,
        });
      }
    }

    if (!onMIDISuccess.receiving && onMIDISuccess.dispatch) {
      onMIDISuccess.dispatch(hash);
    }
  }

  function triggered() {
    $hint.fadeOut();
    showHint();
  }

  function showCredits() {
    $container.css('top', `${-64}px`);
    hideCredits();
  }
});

if (window.console && window.console.log) {
  window.console.log('Check out the code at http://github.com/jonobr1/Patatap');
}
