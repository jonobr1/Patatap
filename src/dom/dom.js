define([
  'underscore'
], function() {

  return {

    /**
     * Cross browser binding of dom element event.
     */
    bind: function(elem, event, callback, bool) {

      if (elem.addEventListener) {
        elem.addEventListener(event, callback, !!bool);
      } else if (elem.attachEvent) {
        elem.attachEvent('on' + event, callback);
      }
      return this;

    },

    /**
     * Cross browser unbinding of dom element event.
     */
    unbind: function(elem, event, callback) {

      if (elem.removeEventListener) {
        elem.removeEventListener(event, func, !!bool);
      }
      else if (elem.detachEvent) {
        elem.detachEvent('on' + event, func);
      }
      return this;

    },

    /**
     * Dynamically load tags.
     */
    loadScript: function(type, attributes, callback) {

      var elem = document.createElement(type);
      _.each(attributes, function(v, k) {
        this.setAttribute(k, v);
      }, elem);

      if (_.isFunction(callback)) {
        this.bind(elem, 'load', callback);
      }

      document.body.appendChild(elem);

      return elem;

    },

  };

});
