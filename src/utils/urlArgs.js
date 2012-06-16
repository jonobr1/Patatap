define([
    'underscore'
], function() {

  var result = {},
      og = {},
      base = window.location.href.substr(0, window.location.href.indexOf('?'));

  window.location.search.replace(
    new RegExp('([^?=&]+)(=([^&]*))?', 'g'),
    function($0, $1, $2, $3) {
      result[$1] = $3;
      og[$1] = $3;
    }
  );

  result.getBoolean = function(name, defaultValue) {
    if (!result.hasOwnProperty(name)) {
      return defaultValue;
    }

    var shorthand = result.hasOwnProperty(name) && result[name] !== 'false' && result[name] !== '0';

    return shorthand || result[name] === '1' || result[name] === 'true' || false;
  };


  result.getFloat = function(name, defaultValue) {
    var r = parseFloat(result[name]);
    if (_.isNaN(r)) {
      return defaultValue || 0;
    } else {
      return r;
    }

  };

  result.getInt = function(name, defaultValue) {
    var r = parseInt(result[name]);
    if (_.isNaN(r)) {
      return defaultValue || 0;
    } else {
      return r;
    }
  };

  result.getHash = function() {
    return !!location.hash ? location.hash.substr(1) : location.hash;
  };

  result.refresh = function(map, _base) {
    var str = [];
    _.extend(og, map);
    _.each(og, function(value, key) {
      str.push(key + '=' + value);
    });
    window.location = (_base || base) + '?' + str.join('&');
  };

  return result;

});
