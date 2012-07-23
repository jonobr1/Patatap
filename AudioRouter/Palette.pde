class Palette {
  
  public int MEGURO     = 0;
  public int MIRO       = 1;
  public int KANDINSKY  = 2;
  public int FISCHINGER = 3;
  public int SHANGHAI   = 4;
  
  public int BACKGROUND = 0;
  public int MIDDLE     = 1;
  public int FOREGROUND = 2;
  public int ACCENT     = 3;
  public int HIGHLIGHT  = 4;
  public int WHITE      = 5;
  public int BLACK      = 6;
  
  private int amount = 7;
  private Palette.Color absolute_white = new Palette.Color(255);
  private Palette.Color absolute_black = new Palette.Color(0);
  
  private float easing = 0.125;
  private float state = 0.0;
  private float dest = 1.0;
  private int index = 0;
  private boolean assigned = false;

  private Palette.Color[][] colors = {
    {
      new Palette.Color(181),
      new Palette.Color(141, 164, 170),
      new Palette.Color(227, 79, 12),
      new Palette.Color(163, 141, 116),
      new Palette.Color(255, 197, 215),
      absolute_white,
      absolute_black
    },
    {
      new Palette.Color(57, 109, 193),
      new Palette.Color(186, 60, 223),
      new Palette.Color(213, 255, 93),
      new Palette.Color(213, 160, 255),
      new Palette.Color(36, 221, 165),
      new Palette.Color(215, 236, 255),
      absolute_black
    },
    {
      new Palette.Color(217, 82, 31),
      new Palette.Color(143, 74, 45),
      new Palette.Color(255, 108, 87),
      new Palette.Color(255, 126, 138),
      new Palette.Color(227, 190, 141),
      absolute_white,
      absolute_black
    },
    {
      new Palette.Color(255, 244, 211),
      new Palette.Color(207, 145, 79),
      new Palette.Color(38, 83, 122),
      new Palette.Color(178, 87, 53),
      new Palette.Color(235, 192, 92),
      absolute_white,
      absolute_black
    },
    {
      new Palette.Color(191, 178, 138),
      new Palette.Color(115, 44, 3),
      new Palette.Color(89, 81, 57),
      new Palette.Color(217, 210, 176),
      new Palette.Color(242, 239, 220),
      absolute_black,
      absolute_white
    },
    {
      new Palette.Color(80, 255, 242),
      new Palette.Color(115, 178, 177),
      new Palette.Color(84, 64, 68),
      new Palette.Color(110, 219, 202),
      new Palette.Color(115, 113, 127),
      absolute_black,
      absolute_white
    }
  };
  private color[][] inverse = {
  };

  public Palette.Color[] source;
  public Palette.Color[] current;
  public Palette.Color[] destination;

  /**
   * Class has a number of different color palettes 
   * that have the ability to be tweened from one
   * state to another.
   */
  
  Palette() {
    source = colors[0];
    current = new Palette.Color[amount];
    destination = colors[0];
    for (int i = 0; i < amount; i++) {
      current[i] = new Palette.Color();
    }
  }
  
  public void next() {
    if (!assigned) {
      return;
    }
    index = mod(index + 1, colors.length);
    destination = colors[index];
    reset();
  }
  
  public void previous() {
    if (!assigned) {
      return;
    }
    index = mod(index - 1, colors.length);
    destination = colors[index];
    reset();
  }  

  /**
   * Choose a color palette.
   */
  public void choose(int type) {
    destination = colors[type];
    reset();
  }

  public Palette.Color getColor(int type) {
    return current[type];
  }

  /**
   * updates the tweening of the colors
   */
  public void update() {
    if (state >= 1.0) {
      // At a standstill
      assign();
    } else {
      state = ease(state, dest, easing);
      for (int i = 0; i < amount; i++) {
        Palette.Color s = source[i];
        Palette.Color c = current[i];
        Palette.Color d = destination[i];
        c.r = lerp(s.r, d.r, state);
        c.g = lerp(s.g, d.g, state);
        c.b = lerp(s.b, d.b, state);
      } 
    }
  }

  private void assign() {
    
    if (assigned) {
      return;
    }

    source = colors[index];
    assigned = true;
  }
  
  private void reset() {
    state = 0.0;
    assigned = false;
  }

  class Color {

    public float r;
    public float g;
    public float b;
    
    Color() {
      r = 0;
      g = 0;
      b = 0;
    }
    
    Color(float i) {
      r = i;
      g = i;
      b = i;
    }
    
    Color(int i) {
      r = i;
      g = i;
      b = i;
    }
    
    Color(float _r, float _g, float _b) {
      r = _r;
      g = _g;
      b = _b;
    }
    
    Color(int _r, int _g, int _b) {
      r = _r;
      g = _g;
      b = _b;
    }

  }

}
