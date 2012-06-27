import de.looksgood.ani.*;
import de.looksgood.ani.easing.*;

import ddf.minim.*;
import ddf.minim.signals.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;

Router router;
Engine engine;
PApplet app;

void setup() {
  size(800, 600, OPENGL);
  app = this;
  router = new Router(this, 128, false);
  router.setSensitivity(300);
  Ani.init(this);
  engine = new Engine(router, width / 2, height / 2, width / 2, height / 2);
}

void draw() {

  background(
    255 - 255 * router.getBand(router.depth / 10, true),
    255 - 255 * router.getBand(router.depth / 12, true),
    255 - 255 * router.getBand(router.depth / 14, true));

  router.update();
  engine.render();
}

void keyReleased() {
  if (key == 'e' || key == 'E') {
    float amp = router.getBand(router.depth / 4, false);
    engine.setAmount((int) map(amp, 0, 1, 2, 12));
    engine.play();
  }
}

void stop() {
  router.stop();
  super.stop();
}

