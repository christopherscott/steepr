(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Steepr.models.Tea = (function(_super) {

    __extends(Tea, _super);

    function Tea() {
      Tea.__super__.constructor.apply(this, arguments);
    }

    Tea.prototype.defaults = {
      name: "Earl Gray",
      times: [50, 60, 90, 90],
      temperature: 120
    };

    return Tea;

  })(Backbone.Model);

  Steepr.models.Steeping = (function(_super) {

    __extends(Steeping, _super);

    function Steeping() {
      Steeping.__super__.constructor.apply(this, arguments);
    }

    Steeping.prototype.defaults = {
      timestamp: "Fri Apr 06 2012 09:04:03 GMT-0400 (EDT)",
      type: "Earl Gray",
      iteration: 0
    };

    return Steeping;

  })(Backbone.Model);

  Steepr.models.RunningCount = (function(_super) {

    __extends(RunningCount, _super);

    function RunningCount() {
      RunningCount.__super__.constructor.apply(this, arguments);
    }

    RunningCount.prototype.defaults = {
      count: 0,
      type: "Earl Gray"
    };

    return RunningCount;

  })(Backbone.Model);

}).call(this);
