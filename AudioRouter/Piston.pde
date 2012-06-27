class Piston extends Neuron {

  private float _w;
  private float _h;
  private float _x;
  private float _y;

  public float w;
  public float h;
  public float x;
  public float y;

  private Ani in;
  private Ani out;
  private boolean playing = false;

  Piston(int d) {
    duration = d / (float) 1000;
    initialize();
  }
  
  Piston(float d) {
    duration = d;
    initialize();
  }

  public void initialize() {
    
    _w = width / 2;
    _h = height / 6;
    _x = (width - _w) / 2;
    _y = (height - _h) / 2;

    w = 0;
    h = _h;
    x = _x;
    y = _y;
    
  }

  public void initialize(float __x, float __y, float __w, float __h) {
    
    _w = __w;
    _h = __h;
    _x = __x;
    _y = __y;
    
    w = 0;
    h = _h;
    x = _x;
    y = _y;

  }

  public void render() {
    if (!playing) {
      return;
    }
    noStroke();
    fill(pigment);
    rect(x, y, w, h);
  }

  public void play() {
    if (playing) {
      return;
    }
    animate_in();
  }

  private void animate_in() {
    println("duration: " + duration);
    playing = true;
    reset();
    Ani.to(this, duration, delay, "w", _w, easing, "onEnd:animate_out");
  }

  private void animate_out() {
    AniSequence s = new AniSequence(app);
    s.beginSequence();
    s.beginStep();
    s.add(Ani.to(this, duration, "x", _w + _x, easing));
    s.add(Ani.to(this, duration, "w", 0, easing, "onEnd:animate_end"));
    s.endStep();
    s.endSequence();
    s.start();
  }

  private void animate_end() {
    reset();
    playing = false;
  }
  
  private void reset() {
    w = 0;
    x = _x;
  }
}

