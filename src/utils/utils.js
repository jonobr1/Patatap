define([
], function() {

  return {

    map: function(v, i1, i2, o1, o2) {
      return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
    },

    lerp: function(a, b, t) {
      return (b - a) * t + a;
    }

  }

});