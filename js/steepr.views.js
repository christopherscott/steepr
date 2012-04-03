(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Steepr.views.SomeView = (function(_super) {

    __extends(SomeView, _super);

    function SomeView() {
      SomeView.__super__.constructor.apply(this, arguments);
    }

    return SomeView;

  })(Backbone.View);

}).call(this);
