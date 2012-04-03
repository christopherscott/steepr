(function() {
  var Steepr;

  Steepr = (function() {

    function Steepr() {}

    Steepr.prototype.updateType = function(e, index, element) {
      console.log("something");
      console.log("somethingelse");
      return console.log("and something else");
    };

    Steepr.prototype.steep = function(args) {};

    return Steepr;

  })();

}).call(this);
