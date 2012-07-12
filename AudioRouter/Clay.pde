class Clay extends Neuron {

  private int amount;
  private PVector[] verts;
  private PVector[] dests;
  private float slave = 0;
  
  public PVector origin;
  public PVector impact;
  public float rotation;
  public float distance;
  public boolean smoothness = true;
  public color pigment = color(141, 164, 170);
  
  Clay(int d) {
    duration = d / (float) 1000;
    origin = new PVector(width / 2, height / 2);
    impact = new PVector(random(width), random(height));
    distance = height;
    rotation = HALF_PI;
    amount = floor(random(8, 16));
    initialize();
  }
  
  /**
   * Getters
   */
  
  /**
   * Setters
   */
  
  public void setAmount(int i) {
    amount = i;
    // requires reinit
  }
  
  public void setOrigin(float x, float y) {
    origin.x = x;
    origin.y = y;
    // requires reinit
  }
  
  public void setSmoothing(boolean b) {
    smoothness = b;
  }
  
  public void setImpact(float x, float y) {
    impact.x = x;
    impact.y = y;
    // requires reinit
  }
  
  public void initialize() {
    verts = new PVector[amount];
    dests = new PVector[amount];
    reset();
    setupDestinations();
  }
  
  public void setupDestinations() {
    for (int i = 0; i < amount; i++) {
      PVector v = verts[i];
      float ptheta = (i / (float) amount) * TWO_PI + rotation;
      float theta = PVector.angleBetween(v, impact) - ptheta;
      float d = PVector.dist(v, impact);
      float a = 5 * distance / (float) sqrt(d);
      float x = a * cos(theta) + v.x;
      float y = a * sin(theta) + v.y;
      dests[i] = new PVector(x, y);
    }
  }
  
  public void reset() {
    for (int i = 0; i < amount; i++) {
      float pct = i / (float) amount;
      float theta = pct * TWO_PI + rotation;
      float x = distance * cos(theta) + origin.x;
      float y = distance * sin(theta) + origin.y;
      verts[i] = new PVector(x, y);
    }
  }
  
  public void play() {
    if (playing) {
      return;
    }
    animate_in();
  }
  
  public void animate_in() {
    playing = true;
    AniSequence s = new AniSequence(app);
    s.beginSequence();
    s.beginStep();
    for (int i = 0; i < amount; i++) {
      PVector v = verts[i];
      PVector d = dests[i];
      s.add(Ani.to(v, duration, delay, "x", d.x, easing));
      s.add(Ani.to(v, duration, delay, "y", d.y, easing));
    }
    s.add(Ani.to(this, duration, delay, "slave", 0, easing, "onEnd:animate_out"));
    s.endStep();
    s.endSequence();
    s.start();
  }
  
  public void animate_out() {
    playing = false;
    reset();
  }
  
  public void render() {
    if (!playing) {
      return;
    }
    
    noStroke();
    fill(pigment);
    beginShape();
    if (smoothness) {
      int last = verts.length - 1;
      curveVertex(verts[last].x, verts[last].y);
    }
    for (int i = 0; i < amount; i++) {
      PVector v = verts[i];
      if (smoothness) {
        curveVertex(v.x, v.y);
      } else {
        vertex(v.x, v.y);
      }
    }
    if (smoothness) {
      curveVertex(verts[0].x, verts[0].y);
      endShape();  // TODO: JANKY
    } else {
      endShape(CLOSE);
    }
  }
  
}
