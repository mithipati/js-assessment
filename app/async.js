if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      then:
        setTimeout(function(){
          value
        })
    },

    manipulateRemoteData : function(url) {

    }
  };
});
