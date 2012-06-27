class Router {

  public Minim minim;
  public AudioInput in;
  public boolean debug = false;
  public int depth = 128;

  private PApplet app;
  private BeatDetect beat;
  private FFT fft;
  private float damp = 0.125;
  private float[] raw_frequencies;
  private float[] smooth_frequencies;
  private float max_amplitude = 0.0;

  /**
   * Constructor
   */

  Router (PApplet _app) {
    app = _app;
    minim = new Minim(app);
    initialize();
  }

  Router (PApplet _app, int _depth, boolean _debug) {
    app = _app;
    minim = new Minim(app);
    depth = _depth;
    debug = _debug;
    initialize();
  }

  /**
   * Getters
   */

  public float getBand(int index, boolean _smooth) {
    if (_smooth) {
      return smooth_frequencies[index];
    }
    return raw_frequencies[index];
  }

  public int getDepth() {
    return depth;
  }

  public float getDamp() {
    return damp;
  }

  /**
   * Setters
   */

  public void setDebug(boolean d) {
    debug = d;
  }

  public void setDepth(int d) {
    depth = d;
    initialize();
  }

  public void setDamp(int d) {
    damp = d;
  }

  /**
   * Beat detection methods
   */

  public boolean isHat() {
    return beat.isHat();
  }

  public boolean isKick() {
    return beat.isKick();
  }

  public boolean isOnset() {
    return beat.isOnset();
  }

  public boolean isOnset(int i) {
    return beat.isOnset(i);
  }

  public boolean isRange(int low, int high, int threshold) {
    return beat.isRange(low, high, threshold);
  }

  public boolean isSnare() {
    return beat.isSnare();
  }

  public void setSensitivity(int s) {
    beat.setSensitivity(s);
  }

  /**
   * on loop methods
   */

  public void update() {

    AudioBuffer buffer = in.mix;
    beat.detect(buffer);
    fft.forward(buffer);

    for (int i = 0; i < depth; i ++) {
      float f = fft.getBand(i);
      raw_frequencies[i] = sqrt(f);
      smooth_frequencies[i] = ease(smooth_frequencies[i], raw_frequencies[i], damp);
      if (raw_frequencies[i] > max_amplitude) {
        max_amplitude = raw_frequencies[i];
      }
    }
    if (debug) {
      render();
    }
  }

  // Draw an equalizer
  public void render() {

    int w = depth;
    int h = 50;
    int x = width - (w + 5);
    int y = height - (h + 5);
    float bottom = y + h;

    // draw some beats

    float kick = 0;
    float snare = 0;
    float hat = 0;

    if (router.isKick()) {
      kick = 1.0;
    }
    if (router.isSnare()) {
      snare = 1.0;
    }
    if (router.isHat()) {
      hat = 1.0;
    }

    noStroke();

    fill(255, 0, 0, 255 * constrain(kick * 0.95, 0, 1));
    ellipse(width * .75, height / 2, 50, 50);

    fill(0, 255, 0, 255 * constrain(snare * 0.95, 0, 1));
    ellipse(width * .5, height / 2, 50, 50);

    fill(0, 0, 255, 255 * constrain(hat * 0.95, 0, 1));
    ellipse(width * .25, height / 2, 50, 50);

    // Draw the container
    noStroke();
    fill(255);
    rect(x, y, w, h);

    // Draw the EQ
    for (int i = 0; i < depth; i++) {
      // Raw Frequencies
      stroke(150);
      float xpos = x + map(i, 0, depth - 1, 0, w);
      float ypos = bottom - map(raw_frequencies[i], 0, max_amplitude, 0, h);
      line(xpos, bottom, xpos, ypos);
      // Smooth Frequencies
      stroke(100);
      ypos = bottom - map(smooth_frequencies[i], 0, max_amplitude, 0, h);
      line(xpos, bottom, xpos, ypos);
      // Peaks
      stroke(255, 0, 0);
      ypos = bottom - map(raw_frequencies[i], 0, max_amplitude, 0, h);
      point(xpos, ypos);
    }

    stroke(0);
    noFill();
    rect(x, y, w, h);
  }

  public void stop() {
    in.close();
    minim.stop();
  }

  /**
   * Private utils
   */

  private void initialize() {
    in = minim.getLineIn(Minim.STEREO, depth);
    beat = new BeatDetect(depth, in.sampleRate());
    fft = new FFT(depth, in.sampleRate());
    raw_frequencies = new float[depth];
    smooth_frequencies = new float[depth];

    // Initialize some discernable value for each frequency.
    for (int i = 0; i < depth; i++) {
      raw_frequencies[i] = smooth_frequencies[i] = 0;
    }
  }

  private float ease(float current, float target, float increment) {
    float difference = target - current;
    if (abs(difference) <= increment) {
      current = target;
    } 
    else {
      current += difference * increment;
    }
    return current;
  }
}

