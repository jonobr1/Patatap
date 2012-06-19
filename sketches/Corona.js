require([
  'dom/dom',
  'neurons/Corona'
], function(dom, Corona) {

  var playing = false;
  var corona = new Corona(getProperties());

  stage.domElement.style.backgroundColor = '#b5b5b5';

  dom.bind(window, 'click', toggle);

  function toggle() {

    if (playing) {
      corona.unrepeat();
    } else {
      corona.initialize(getProperties()).repeat().start();
    }

    playing = !playing;

  }

  function getProperties() {
    return {
      amount: Math.floor(Math.random() * 20),
      delay: Math.floor(Math.random() * 100),
      duration: Math.floor(Math.random() * 1000),
      distance: Math.floor(Math.random() * stage.width),
      radius: Math.floor(Math.random() * 50),
      startAngle: Math.random() * Math.PI,
      endAngle: Math.random() * Math.PI + Math.PI,
      lineWidth: Math.floor(Math.random() * 10) + 1,
      palette: [getRandomColor(), getRandomColor(), getRandomColor()]
    };
  }

  function getRandomColor() {

    return 'rgb('
      + Math.floor(Math.random() * 255) +','
      + Math.floor(Math.random() * 255) +','
      + Math.floor(Math.random() * 255) +')';

  }

});
