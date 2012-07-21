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
Clay clay;
Pinwheel pinwheel;
Squiggle squiggle;

Palette palette;
Palette.Color bg;

PApplet app;

void setup() {

  size(800, 600);

  app = this;
  router = new Router(this, 128, false);
  Ani.init(this);

  palette = new Palette();

  bg = palette.getColor(palette.BACKGROUND);

  suspension = new Suspension(500);
  suspension.setColor(palette.getColor(palette.WHITE));

  engine = new Engine(router, width / 2, height / 2, width * .75, height / 2);
  engine.setColor(palette.getColor(palette.WHITE));
  engine.initialize();

  moon = new Moon(250);
  moon.setColor(palette.getColor(palette.FOREGROUND));

  prism = new Prism(500);
  prism.setColor(palette.getColor(palette.BLACK));

  clay = new Clay(500);
  clay.setColor(palette.getColor(palette.MIDDLE));

  pinwheel = new Pinwheel(1000);
  pinwheel.setColor(palette.getColor(palette.ACCENT));

  squiggle = new Squiggle(500);
  squiggle.setColor(palette.getColor(palette.HIGHLIGHT));

  noCursor();
  smooth();
}

void draw() {

  background(bg.r, bg.g, bg.b);
  //    max(200 - 255 * router.getBand(router.depth / 10, true), 0),
  //    max(200 - 255 * router.getBand(router.depth / 12, true), 0),
  //    max(200 - 255 * router.getBand(router.depth / 14, true), 0));

  router.update();
  palette.update();

  clay.render();
  prism.render();
  moon.render();
  pinwheel.render();
  engine.render();
  squiggle.render();
  suspension.render();
}

void keyReleased() {
  if (key == 'e' || key == 'E') {
    float amp = router.getBand(router.depth / 4, false);
    engine.setAmount((int) map(amp, 0, 1, 1, 12));
    engine.initialize();
    engine.play();
  } 
  else if (key == 'm' || key == 'M') {
    moon.play();
  } 
  else if (key == 'p' || key == 'P') {
    float amp = router.getBand(router.depth - router.depth / 4, false);
    prism.setAmount(floor(map(amp, 0, 1, 3, 12)));
    prism.play();
  } 
  else if (key == 's' || key == 'S') {
    suspension.setTheta(random(TWO_PI));
    suspension.initialize();
    suspension.play();
  } 
  else if (key =='c' || key == 'C') {
    clay.setAmount((int) random(8, 16));
    float x, y, pos = random(8);
    if (pos > 7) {
      // north
      x = width / 2;
      y = 0;
    } 
    else if (pos > 6) {
      // north-west
      x = 0;
      y = 0;
    } 
    else if (pos > 5) {
      // west
      x = 0;
      y = height / 2;
    } 
    else if (pos > 4) {
      // south-west
      x = 0;
      y = height;
    } 
    else if (pos > 3) {
      // south
      x = width / 2;
      y = height;
    }  
    else if (pos > 2) {
      // south-east
      x = width;
      y = height;
    } 
    else if (pos > 1) {
      // east
      x = width;
      y = height / 2;
    } 
    else {
      x = width;
      y = 0;
    }
    clay.setOrigin(x, y);
    clay.setImpact(random(width), random(height));
    clay.initialize();
    clay.play();
  } 
  else if (key == 'o' || key == 'O') {
    float amp = router.getBand(router.depth / 2, false);
    pinwheel.setAmount((int) map(amp, 0, 1, 4, 10));
    if (random(1.0) > 0.75) {
      float startAngle = random(TWO_PI);
      float endAngle = random(startAngle, TWO_PI);
      pinwheel.setAngles(startAngle, endAngle);
    } 
    else {
      pinwheel.setAngles(0, TWO_PI);
    }
    pinwheel.setDrift(random(TWO_PI));
    pinwheel.initialize();
    pinwheel.play();
  } 
  else if (key == 'w' || key == 'W') {
    squiggle.setRevolutions((int) random(0.25, 6));
    squiggle.setAmplitude(random(height / 8, height / 3));
    squiggle.setDistance(random(width / 8, width / 2));
    squiggle.initialize();
    squiggle.play();
  } 
  else if (
    key == '1' || key == '2' || key == '3' || key == '4'
    || key == '5' || key == '6' || key == '7' || key == '8'
    || key == '9' || key == '0') {
      palette.next();
  }
}

void stop() {
  router.stop();
  super.stop();
}

