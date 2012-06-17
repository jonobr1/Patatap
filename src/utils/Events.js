/**
 * @fileinfo this code was extracted from backbone.js
 * http://documentcloud.github.com/backbone/
 */

// A module that can be mixed in to *any object* in order to provide it with
// custom events. You may `bind` or `unbind` a callback function to an event;
// `trigger`-ing an event fires all callbacks in succession.
//
//     var object = {};
//     _.extend(object, Backbone.Events);
//     object.bind('expand', function(){ alert('expanded'); });
//     object.trigger('expand');
//

define({

    // Bind an event, specified by a string name, `ev`, to a `callback` function.
    // Passing `"all"` will bind the callback to all events fired.
    bind: function(ev, callback) {
      var evs = ev.split(' ');
      for (var i = 0, l = evs.length; i < l; i++) {
        ev = evs[i];
        var calls = this._callbacks || (this._callbacks = {});
        var list = this._callbacks[ev] || (this._callbacks[ev] = []);
        list.push(callback);
      }
      return this;
    },

    // Remove one or many callbacks. If `callback` is null, removes all
    // callbacks for the event. If `ev` is null, removes all bound callbacks
    // for all events.
    unbind: function(ev, callback) {
      var calls;
      if (!ev) {
        this._callbacks = {};
      } else if (calls = this._callbacks) {
        if (!callback) {
          calls[ev] = [];
        } else {
          var list = calls[ev];
          if (!list) return this;
          for (var i = 0, l = list.length; i < l; i++) {
            if (callback === list[i]) {
              list.splice(i, 1);
              break;
            }
          }
        }
      }
      return this;
    },

    // Trigger an event, firing all bound callbacks. Callbacks are passed the
    // same arguments as `trigger` is, apart from the event name.
    // Listening for `"all"` passes the true event name as the first argument.
    trigger: function(ev) {
      var list, calls, i, l;
      if (!(calls = this._callbacks)) return this;
      if (list = calls[ev]) {
        for (i = 0, l = list.length; i < l; i++) {
          list[i].apply(this, Array.prototype.slice.call(arguments, 1));
        }
      }
      if (list = calls['all']) {
        for (i = 0, l = list.length; i < l; i++) {
          list[i].apply(this, arguments);
        }
      }
      return this;
    }
});
