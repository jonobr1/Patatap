require([
  'dom/dom',
  'neurons/Sunrise',
  'neurons/Corona',
  'underscore'
], function(dom, Sunrise, Corona) {

  var playing = false;

  var sunrise = new Sunrise();
  var corona = new Corona({
      delay: 100,
      amount: 12
    });

  dom.bind(window, 'click', toggle);

  stage.domElement.style.backgroundColor = '#b5b5b5';

  function toggle() {

    if (playing) {
      sunrise.unrepeat();
      corona.unrepeat();
    } else {
      sunrise.repeat().start();
      corona.repeat().start();
    }

    playing = !playing;

  }

});
