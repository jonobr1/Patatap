class Router {

  public Minim minim;
  public AudioInput in;
  public boolean debug = false;

  private float damp = 0.125;
  private int depth = 128;
  private float[] raw_frequencies;
  private float[] smooth_frequencies;

  /**
   * Constructor
   */

  Router (PApplet app, int _depth, boolean _debug) {
    minim = new Minim(app);
    initialize();
    depth = _depth;
    debug = _debug;
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
   * on loop methods
   */

  public void update() {
    for (int i = 0; i < depth; i ++) {
      raw_frequencies[i] = (in.left.get(i) + in.right.get(i)) / 2;
      smooth_frequencies[i] = ease(smooth_frequencies[i], raw_frequencies[i], damp);
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
    float bottom = y + (h + 5) / 2;

    // Draw the container
    stroke(0);
    fill(255);
    rect(x, y, w, h);
    
    // Draw the EQ
    for (int i = 0; i < depth; i++) {
      // Raw Frequencies
      stroke(200);
      float xpos = x + map(i, 0, depth - 1, 0, w);
      float ypos = bottom - map(raw_frequencies[i], 0, 1, 0, h);
      line(xpos, bottom, xpos, ypos);
      // Smooth Frequencies
      stroke(100);
      ypos = bottom - map(smooth_frequencies[i], 0, 1, 0, h);
      line(xpos, bottom, xpos, ypos);
      // Peaks
      stroke(255, 0, 0);
      ypos = bottom - map(raw_frequencies[i], 0, 1, 0, h);
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

