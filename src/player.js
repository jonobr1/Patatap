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

    },

    LineHeight: 37,

    template: '<ul><li class="primary"><button class="repeat">Repeat</button><button class="play">Play</button><button class="pause">Pause</button></li><li class="track-info"><div class="track"><p class="elapsed">0:00</p><div class="bar"><div class="buffered"></div><div class="needle"></div></div><p class="total"><%= duration %></p></div><div class="meta"><p class="author"><a href="<%= author_url %>" target="_blank"><%= author %></a></p><p class="title"><a href="<%= permalink %>" target="_blank"><%= title %></a></p></div><!-- <div class="eq"><canvas width="100%" height="100%"></canvas></div> --></li><li class="audio"><button class="volume">Volume</button></li><li class="view"><button class="fullscreen">Fullscreen</button></li><li class="kick-back"><button><a class="soundcloud-button" href="<%= permalink %>" target="_blank">SoundCloud</a></button></li></ul>'

  });

  _.extend(Player.prototype, Backbone.Events, {

    appendTo: function(elem) {
      elem.appendChild(this.domElement);
      return this;
    },

    stream: function(sound) {

      var _this = this;

      if (this.sound) {
        this.sound.destruct();
      }

      this.sound = sound;

      if (this.interval) {
        clearInterval(this.interval);
        delete this.interval;
      }

      _.each(this.domElement.children, function(child) {
        $(child).remove();
      });

      this.domElement.innerHTML = _.template(Player.template, {
        permalink: sound.response.permalink_url,
        title: sound.response.title,
        author: sound.response.user.username,
        author_url: sound.response.user.permalink_url,
        duration: format_time(sound.response.duration)
      });

      this.$ = { domElement: $(this.domElement) };
      this.$.primary = this.$.domElement.find('.primary');
      this.$.play = this.$.domElement.find('.play')
        .click(_.bind(this.play, this));
      this.$.pause = this.$.domElement.find('.pause')
        .click(_.bind(this.pause, this));
      this.$.repeat = this.$.domElement.find('.repeat')
        .click(_.bind(this.repeat, this));
      this.$.trackInfo = this.$.domElement.find('.track-info');
      this.$.track = this.$.domElement.find('.track');
      this.$.elapsed = this.$.domElement.find('.elapsed');
      this.$.buffered = this.$.domElement.find('.buffered');
      this.$.needle = this.$.domElement.find('.needle');
      this.$.volume = this.$.domElement.find('.volume')
        .click(_.bind(this.toggleMute, this));
      this.$.view = this.$.domElement.find('.view');
      this.$.fullscreen = this.$.domElement.find('.fullscreen')
        .click(_.bind(this.toggleFullscreen, this));

      // If no fullscreen available, remove it!
      if (!BigScreen.enabled) {
        this.$.view.remove();
      }

      var position, duration;

      this.sound.options.whileloading = _.bind(function() {

        pct = (this.sound.bytesLoaded / this.sound.bytesTotal) || 0;
        pct *= 98;
        this.$.buffered.css('width', Math.floor(pct) + '%');

      }, this);

      this.sound.options.whileplaying = _.bind(function() {

        position = this.sound.position;
        duration = this.sound.response.duration;

        this.$.elapsed.html( format_time(this.sound.position) );
        this.$.needle.css('left', 100 * position / duration + '%');

      }, this);

      this.sound.options.onfinish = _.bind(function() {

        this.showRepeatButton();
        this.trigger('finish');

      }, this);

      this.interval = setInterval(_.bind(function() {

        if (this.showingTrack) {
          this.showTrackInfo();
          return;
        }

        this.showTrack();

      }, this), 10000);

      // Animate in
      _.defer(_.bind(function() {
        this.$.domElement.addClass('enabled');
      }, this))

      return this.showPlayButton();

    },

    fetch: function(permalink, callback) {

      var _this = this;

      $.getJSON('http://api.soundcloud.com/resolve.json?url=' + permalink + '&client_id=' + Player.CLIENT, function(resp) {

        var request;

        switch (resp.kind) {

          // Continue to play tracks
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

        SC.stream(request, {
          useHTML5Audio: true,
          preferFlash: false
        }, function(sound){
          sound.response = resp;
          _this.stream(sound);
          if (_.isFunction(callback)) {
            callback.call(_this, sound);
          }
        });

      });

      return this;

    },

    // Flags

    showingTrack: true,

    // UI Actions

    showPlayButton: function() {
      this.$.repeat.css('margin-top', - Player.LineHeight + 'px');
      return this;
    },

    showPauseButton: function() {
      this.$.repeat.css('margin-top', - (Player.LineHeight * 2) + 'px');
      return this;
    },

    showRepeatButton: function() {
      this.$.repeat.css('margin-top', 0);
      return this;
    },

    showTrackInfo: function() {
      this.$.track.css('margin-top', - Player.LineHeight + 'px');
      this.showingTrack = false;
      return this;
    },

    showTrack: function() {
      this.$.track.css('margin-top', 0);
      this.showingTrack = true;
      return this;
    },

    showAudioButton: function() {
      this.$.volume.removeClass('mute');
      return this;
    },

    showMuteButton: function() {
      this.$.volume.addClass('mute');
      return this;
    },

    // UI

    play: function() {
      this.sound.play();
      this.showPauseButton();
      return this.trigger('play');
    },

    pause: function() {
      this.sound.pause();
      this.showPlayButton();
      return this.trigger('pause');
    },

    stop: function() {
      this.sound.stop();
      return this.trigger('stop');
    },

    repeat: function() {
      return this.stop().play();
    },

    seek: function(t) {
      this.sound.setPosition(t);
      return this;
    },

    mute: function() {
      this.sound.mute();
      return this.showMuteButton();
    },

    unmute: function() {
      this.sound.unmute();
      return this.showAudioButton();
    },

    toggleMute: function() {
      if (this.sound.muted) {
        return this.unmute();
      }
      return this.mute();
    },

    toggleFullscreen: function() {
      if (!BigScreen.enabled) {
        return this;
      }
      var parent = this.$.domElement.parent();
      if (parent.length <= 0) {
        return this;
      }
      var enter = _.bind(function() {
        this.$.fullscreen.addClass('partial');
      }, this);
      var exit = _.bind(function() {
        this.$.fullscreen.removeClass('partial');
      }, this);
      BigScreen.toggle(parent[0], enter, exit);
      return this;
    }

  });

  function format_time(v) {
    var seconds = v / 1000;
    var minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - minutes * 60);
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
  }

})();