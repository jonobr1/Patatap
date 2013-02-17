(function() {

  var TRIGGERS = 0;
  var root = this;

  var Trigger = root.Trigger = function() {

    this.triggers = {};

  };

  _.extend(Trigger.prototype, {

    add: function(t1, t2, index, amplitude) {

      var _this = this, id = getId();

      var callback = t2.getOnComplete();
      t2.onComplete(function() {
        // delete _this.triggers[index];
        _this.triggers[id].started = false;
        callback();
      });

      this.triggers[id] = {
        tween: t1,
        index: index,
        threshold: amplitude,
        started: false
      };

      return this;

    },

    check: function(values) {

      _.each(this.triggers, function(t) {

        var amplitude = values[t.index];
        if (!t.started && amplitude > t.threshold) {
          t.tween.start();
          t.started = true;
        }

      });

      return this;

    }

  });

  function getId() {
    TRIGGERS++;
    return TRIGGERS;
  }

})();