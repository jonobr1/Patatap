import de.looksgood.ani.*;
import de.looksgood.ani.easing.*;

import ddf.minim.*;
import ddf.minim.signals.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;

Router router;
Engine engine;
Moon moon;
Prism prism;
Suspension suspension;
PApplet app;

void setup() {

  size(800, 600);

  app = this;
  router = new Router(this, 128, false);
  Ani.init(this);

  suspension = new Suspension(500);
  engine = new Engine(router, width / 2, height / 2, width * .75, height / 2);
  moon = new Moon(250);
  prism = new Prism(500);

  noCursor();
  smooth();

}

void draw() {

  background(181);
//    max(200 - 255 * router.getBand(router.depth / 10, true), 0),
//    max(200 - 255 * router.getBand(router.depth / 12, true), 0),
//    max(200 - 255 * router.getBand(router.depth / 14, true), 0));

  router.update();

  prism.render();
  moon.render();
  engine.render();
  suspension.render();

}

void keyReleased() {
  if (key == 'e' || key == 'E') {
    float amp = router.getBand(router.depth / 4, false);
    engine.setColor(color(255 * amp));
    engine.setAmount((int) map(amp, 0, 1, 1, 12));
    engine.play();
  } else if (key == 'm' || key == 'M') {
    moon.play();
  } else if (key == 'p' || key == 'P') {
    float amp = router.getBand(router.depth - router.depth / 4, false);
    
    prism.setAmount(floor(map(amp, 0, 1, 3, 12)));
    prism.play();
  } else if (key == 's' || key == 'S') {
    suspension.setTheta(random(TWO_PI));
    suspension.initialize();
    suspension.play();
  }
  
}

void stop() {
  router.stop();
  super.stop();
}

