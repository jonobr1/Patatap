int mod(int v, int l) {
  while (v < 0) {
    v += l;
  }
  return v % l;
}

float ease(float cur, float dest, float ease) {
  float diff = dest - cur;
  if (diff < ease) {
    cur = dest;
  } else {
    cur += diff * ease;
  }
  return cur;
}
