define([
  'utils/Events',
  'underscore'
], function(Events) {

  var tweens = [];

  /**
   * A requirified and modified version of TWEEN.js under the same license
   * http://github.com/sole/tween.js/
   */
  var Tween = function(object) {

    this.object = object;

    this.startValues = {};
    this.endValues = {};

    this.duration = 1000;
    this.delay = 0;

    this.__startTime = null;
    this.easing = Tween.Easing.Linear.None;
    this.interpolation = Tween.Interpolation.Linear;

  };

  _.extend(Tween, {

    Easing: {

      Linear: {

        None: function ( k ) {
          return k;
        }

      },

      Quadratic: {

        In: function ( k ) {
          return k * k;
        },

        Out: function ( k ) {
          return k * ( 2 - k );
        },

        InOut: function ( k ) {
          if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
          return - 0.5 * ( --k * ( k - 2 ) - 1 );
        }

      },

      Cubic: {

        In: function ( k ) {
          return k * k * k;
        },

        Out: function ( k ) {
          return --k * k * k + 1;
        },

        InOut: function ( k ) {
          if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
          return 0.5 * ( ( k -= 2 ) * k * k + 2 );
        }

      },

      Quartic: {

        In: function ( k ) {
          return k * k * k * k;
        },

        Out: function ( k ) {
          return 1 - --k * k * k * k;
        },

        InOut: function ( k ) {
          if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
          return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );
        }

      },

      Quintic: {

        In: function ( k ) {
          return k * k * k * k * k;
        },

        Out: function ( k ) {
          return --k * k * k * k * k + 1;
        },

        InOut: function ( k ) {
          if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
          return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );
        }

      },

      Sinusoidal: {

        In: function ( k ) {
          return 1 - Math.cos( k * Math.PI / 2 );
        },

        Out: function ( k ) {
          return Math.sin( k * Math.PI / 2 );
        },

        InOut: function ( k ) {
          return 0.5 * ( 1 - Math.cos( Math.PI * k ) );
        }

      },

      Exponential: {

        In: function ( k ) {
          return k === 0 ? 0 : Math.pow( 1024, k - 1 );
        },

        Out: function ( k ) {
          return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );
        },

        InOut: function ( k ) {
          if ( k === 0 ) return 0;
          if ( k === 1 ) return 1;
          if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
          return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );
        }

      },

      Circular: {

        In: function ( k ) {
          return 1 - Math.sqrt( 1 - k * k );
        },

        Out: function ( k ) {
          return Math.sqrt( 1 - --k * k );
        },

        InOut: function ( k ) {
          if ( ( k *= 2 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
          return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);
        }

      },

      Elastic: {

        In: function ( k ) {
          var s, a = 0.1, p = 0.4;
          if ( k === 0 ) return 0;
          if ( k === 1 ) return 1;
          if ( !a || a < 1 ) { a = 1; s = p / 4; }
          else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
          return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
        },

        Out: function ( k ) {
          var s, a = 0.1, p = 0.4;
          if ( k === 0 ) return 0;
          if ( k === 1 ) return 1;
          if ( !a || a < 1 ) { a = 1; s = p / 4; }
          else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
          return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );
        },

        InOut: function ( k ) {
          var s, a = 0.1, p = 0.4;
          if ( k === 0 ) return 0;
          if ( k === 1 ) return 1;
          if ( !a || a < 1 ) { a = 1; s = p / 4; }
          else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
          if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
          return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;
        }

      },

      Back: {

        In: function ( k ) {
          var s = 1.70158;
          return k * k * ( ( s + 1 ) * k - s );
        },

        Out: function ( k ) {
          var s = 1.70158;
          return --k * k * ( ( s + 1 ) * k + s ) + 1;
        },

        InOut: function ( k ) {
          var s = 1.70158 * 1.525;
          if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
          return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );
        }

      },

      Bounce: {

        In: function ( k ) {
          return 1 - TWEEN.Easing.Bounce.Out( 1 - k );
        },

        Out: function ( k ) {
          if ( k < ( 1 / 2.75 ) ) {
            return 7.5625 * k * k;
          } else if ( k < ( 2 / 2.75 ) ) {
            return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
          } else if ( k < ( 2.5 / 2.75 ) ) {
            return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
          } else {
            return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
          }
        },

        InOut: function ( k ) {
          if ( k < 0.5 ) return TWEEN.Easing.Bounce.In( k * 2 ) * 0.5;
          return TWEEN.Easing.Bounce.Out( k * 2 - 1 ) * 0.5 + 0.5;
        }

      }

    },

    Interpolation: {

      Linear: function ( v, k ) {

        var m = v.length - 1, f = m * k, i = Math.floor( f ), fn = TWEEN.Interpolation.Utils.Linear;

        if ( k < 0 ) return fn( v[ 0 ], v[ 1 ], f );
        if ( k > 1 ) return fn( v[ m ], v[ m - 1 ], m - f );

        return fn( v[ i ], v[ i + 1 > m ? m : i + 1 ], f - i );

      },

      Bezier: function ( v, k ) {

        var b = 0, n = v.length - 1, pw = Math.pow, bn = TWEEN.Interpolation.Utils.Bernstein, i;

        for ( i = 0; i <= n; i++ ) {
          b += pw( 1 - k, n - i ) * pw( k, i ) * v[ i ] * bn( n, i );
        }

        return b;

      },

      CatmullRom: function ( v, k ) {

        var m = v.length - 1, f = m * k, i = Math.floor( f ), fn = TWEEN.Interpolation.Utils.CatmullRom;

        if ( v[ 0 ] === v[ m ] ) {

          if ( k < 0 ) i = Math.floor( f = m * ( 1 + k ) );

          return fn( v[ ( i - 1 + m ) % m ], v[ i ], v[ ( i + 1 ) % m ], v[ ( i + 2 ) % m ], f - i );

        } else {

          if ( k < 0 ) return v[ 0 ] - ( fn( v[ 0 ], v[ 0 ], v[ 1 ], v[ 1 ], -f ) - v[ 0 ] );
          if ( k > 1 ) return v[ m ] - ( fn( v[ m ], v[ m ], v[ m - 1 ], v[ m - 1 ], f - m ) - v[ m ] );

          return fn( v[ i ? i - 1 : 0 ], v[ i ], v[ m < i + 1 ? m : i + 1 ], v[ m < i + 2 ? m : i + 2 ], f - i );

        }

      },

      Utils: {

        Linear: function ( p0, p1, t ) {

          return ( p1 - p0 ) * t + p0;

        },

        Bernstein: function ( n , i ) {

          var fc = TWEEN.Interpolation.Utils.Factorial;
          return fc( n ) / fc( i ) / fc( n - i );

        },

        Factorial: ( function () {

          var a = [ 1 ];

          return function ( n ) {

            var s = 1, i;
            if ( a[ n ] ) return a[ n ];
            for ( i = n; i > 1; i-- ) s *= i;
            return a[ n ] = s;

          }

        } )(),

        CatmullRom: function ( p0, p1, p2, p3, t ) {

          var v0 = ( p2 - p0 ) * 0.5, v1 = ( p3 - p1 ) * 0.5, t2 = t * t, t3 = t * t2;
          return ( 2 * p1 - 2 * p2 + v0 + v1 ) * t3 + ( - 3 * p1 + 3 * p2 - 2 * v0 - v1 ) * t2 + v0 * t + p1;

        }

      }

    },

    clamp: function(v, min, max) {
      return Math.min(Math.max(v, min), max);
    },

    getAll: function() {
      return tweens;
    },

    removeAll: function() {
      tweens.length = 0;
    },

    add: function(tween) {
      tweens.push(tween);
    },

    remove: function(tween) {
      var index = _.indexOf(tweens, tween);
      if (index < 0) {
        return;
      }
      return tweens.splice(index, 1);
    },

    tick: function(time) {

      var time = _.isUndefined(time) ? Date.now() : time;

      _.each(tweens, function(tween, i) {
        if (!tween.update(time)) {
          tweens.splice(i, 1);
        }
      }, this);

    }

  });

  _.extend(Tween.prototype, Events, {

    setEasing: function(curve) {
      this.easing = curve;
      return this;
    },

    setInterpolation: function(curve) {
      this.interpolation = curve;
      return this;
    },

    to: function(properties, duration) {

      if (!_.isUndefined(duration)) {
        this.duration = duration;
      }

      this.endValues = properties;

      return this;

    },

    start: function(time) {

      Tween.add(this);

      this.startTime = _.isUndefined(time) ? Date.now() : time;
      this.startTime += this.delay;

      _.each(this.endValues, function(value, property) {

        if (_.isArray(value)) {

          if (value.length > 0) {

            this.endValues[property] = [this.object[property]].concat(this.endValues);
            this.startvalues[property] = this.object[property];

          }

        } else if (!_.isNull(value)) {

          this.startValues[property] = this.object[property];

        }

      }, this);

      this.trigger('start');

      return this;

    },

    stop: function() {

      Tween.remove(this);
      this.startValues = {};

      return this;

    },

    update: function(time) {

      if (time < this.startTime) {
        return true;
      }

      var elapsed = Tween.clamp((time - this.startTime) / this.duration, 0, 1);
      var value = this.easing(elapsed);

      _.each(this.startValues, function(start, property) {

        var end = this.endValues[property];

        if (_.isArray(end)) {
          _object[property] = this.interpolation(end, value);
        } else {
          this.object[property] = start + (end - start) * value;
        }

      }, this);

      this.trigger('update');

      if (elapsed === 1) {

        this.trigger('end');
        return false;

      }

      return true;

    }

  });

  return Tween;

});
