require([
  'neurons/Sunrise',
  'neurons/Corona',
  'underscore'
], function(Sunrise, Corona) {

  var sunrise = new Sunrise().repeat().start();
  var corona = new Corona({
    delay: 100,
    amount: 12
  }).repeat().start();

  stage.domElement.style.backgroundColor = '#b5b5b5';

});
