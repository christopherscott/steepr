(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Steepr.collections.Teas = (function(_super) {

    __extends(Teas, _super);

    function Teas() {
      Teas.__super__.constructor.apply(this, arguments);
    }

    Teas.prototype.model = Steepr.models.Tea;

    return Teas;

  })(Backbone.Collection);

}).call(this);
