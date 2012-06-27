import de.looksgood.ani.*;
import de.looksgood.ani.easing.*;

import ddf.minim.*;
import ddf.minim.signals.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;

Router router;
Piston piston;

void setup() {
  size(512, 200, OPENGL);
  router = new Router(this, 128, true);
  router.setSensitivity(300);
  Ani.init(this);
  piston = new Piston(router, 250);
}

void draw() {

  background(0);

  router.update();
  piston.render();

}

void stop() {
  router.stop();
  super.stop();
}

