(function() {

  var root = this;
  var previousPlayer = root.Player || {};

  /**
   * A custom SoundCloud player.
   */
  var Player = root.Player = function(client_id) {

    this.domElement = document.createElement('div');
    this.domElement.classList.add('sc-player');

    if (_.isString(client_id)) {
      Player.initialize(client_id);
    }

  };

  _.extend(Player, {

    noConflict: function() {
      root.Player = previousPlayer;
      return this;
    },

    initialize: function(id) {

      Player.CLIENT = id;

      SC.initialize({
        client_id: id
      });

    }

  });

  _.extend(Player.prototype, Backbone.Events, {

    appendTo: function(elem) {
      elem.appendChild(this.domElement);
      return this;
    },

    stream: function(sound, autoplay) {

      // Do all the data-binding here.

    },

    fetch: function(permalink, callback) {

      $.getJSON('http://api.soundcloud.com/resolve.json?url=' + permalink + '&client_id=' + Player.CLIENT, function(resp) {

        console.log(resp.kind, resp);

        var request;

        switch (resp.kind) {

          case 'playlist':
            request = '/tracks/' + resp.tracks[0].id;
            break;
          case 'user':
            break;
          case 'track':
            request = '/tracks/' + resp.id;
            break;

        }

        if (_.isUndefined(request)) {
          throw new Error('Player.js: Bad request');
          return this;
        }

        SC.stream(request, _.bind(function(sound){
          console.log(sound);
          this.stream(sound);
          if (_.isFunction(callback)) {
            callback.call(this, sound);
          }
        }, this));

      });

      return this;

    },

    // UI

    play: function() {

    },

    pause: function() {

    },

    stop: function() {

    },

    replay: function() {
      return this.stop().play();
    },

    seek: function() {

    },

    mute: function() {

    },

    unmute: function() {

    },

    setVolume: function() {

    }

  });

})();