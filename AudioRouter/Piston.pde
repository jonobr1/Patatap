class Piston {

  private float _w;
  private float _h;
  private float _x;
  private float _y;

  public float w;
  public float h;
  public float x;
  public float y;

  private Easing easing = Ani.CIRC_OUT;
  private Ani in;
  private Ani out;
  private float duration = .15;
  private Router router;
  private boolean playing = false;

  Piston(Router r, int d) {
    duration = d / (float) 1000;
    router = r;
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

  public void initialize(float x, float y, float w, float h) {
    _w = w;
    _h = h;
    _x = x;
    _y = y;
    
    w = 0;
    h = _h;
    x = _x;
    y = _y;
  }

  /**
   * Setters
   */

  public void setEasing(Easing e) {
    easing = e;
  }

  public void render() {
    if (router.isKick() && !playing) {
      play();
    }
    if (!playing) {
      return;
    }
    fill(255);
    rect(x, y, w, h);
  }

  public void play() {
    if (playing) {
      return;
    }
    animate_in();
  }

  private void animate_in() {
    playing = true;
    reset();
    Ani.to(this, duration, "w", _w, Ani.EXPO_IN_OUT, "onEnd:animate_out");
  }

  private void animate_out() {
    Ani.to(this, duration, "w", 0, Ani.EXPO_IN_OUT, "onEnd:animate_end");
    Ani.to(this, duration, "x", _w, Ani.EXPO_IN_OUT);
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

