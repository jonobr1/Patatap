/**
 * Neuronal Synchrony
 * 
 * A collection of two dimensional animations
 * that are triggered by sound.
 * 
 * It is dependent on minim and Ani Processing
 * libraries, which can be found on the
 * Processing website.
 *
 * This application is meant to be used for live
 * performances and subtly takes in the microphone
 * or current line-in's frequencies. Currently,
 * the main interaction is through keyboard input,
 * although I'd like to change this to Monome.
 *
 * @jonobr1
 */

import de.looksgood.ani.*;
import de.looksgood.ani.easing.*;

import ddf.minim.*;
import ddf.minim.signals.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;

Record record;
Router router;
Engine engine;
Engine engineReverse;
Moon moon;
Prism prism;
Suspension suspension;
Clay clay;
Pinwheel pinwheel;
Squiggle squiggle;

Palette palette;
Palette.Color bg;

PApplet app;

boolean randomize = false;

void setup() {

  size(1024, 768);

  app = this;
  record = new Record();
  router = new Router(this, 128, false);
  Ani.init(this);

  palette = new Palette();

  bg = palette.getColor(palette.BACKGROUND);

  suspension = new Suspension(500);
  suspension.setColor(palette.getColor(palette.WHITE));

  engine = new Engine(router, width / 2, height / 2, width * .75, height / 2);
  engine.setColor(palette.getColor(palette.WHITE));
  engine.initialize();

  engineReverse = new Engine(router, width / 2, height / 2, -width * .75, height / 2);
  engineReverse.setColor(palette.getColor(palette.WHITE));
  engineReverse.initialize();

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

  engineReverse.render();
  moon.render();
  pinwheel.render();

  engine.render();
  squiggle.render();
  suspension.render();
  
}

void keyReleased() {
  
  if (!engineReverse.isPlaying() && key == 'e' || key == 'E') {
    float amp = router.getBand(router.depth / 4, false);
    engine.setAmount((int) map(amp, 0, 1, 1, 12));
    if (randomize) {
      engine.setDimensions(random(width / 4, width), map(amp, 0, 1, height / 8, height));
    }
    engine.initialize();
    engine.play();
  }
  else if (!engine.isPlaying() && key == 'r' || key == 'R') {
    float amp = router.getBand(router.depth / 4, false);
    engineReverse.setAmount((int) map(amp, 0, 1, 1, 12));
    if (randomize) {
      engineReverse.setDimensions(-random(width / 4, width), map(amp, 0, 1, height / 8, height));
    }
    engineReverse.initialize();
    engineReverse.play();
  }
  else if (key == 'm' || key == 'M') {
    if (randomize) {
      moon.setAngle(random(TWO_PI));
      moon.initialize();
    } else {
      moon.setAngle(0);
      moon.initialize();
    }
    moon.play();
  } 
  else if (key == 'p' || key == 'P') {
    float amp = router.getBand(router.depth - router.depth / 4, false);
    prism.setAmount(floor(map(amp, 0, 1, 3, 12)));
    prism.play();
  } 
  else if (key == 's' || key == 'S') {
    float amp = router.getBand(router.depth - router.depth / 10, false);
    if (randomize) {
      suspension.setAmount((int) map(amp, 0, 1, 8, 32));
    }
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
    if (randomize) {
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
    if (randomize) {
      squiggle.setAngle(random(TWO_PI));
    }
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
//      palette.choose((int) key);
    palette.next();
  }
  else if (key == 'y' || key == 'Y') {
    randomize = !randomize;
  }

  record.add(key);

}

void exit() {
  record.finalize();
  super.exit();
}

void stop() {
  router.stop();
  super.stop();
}

