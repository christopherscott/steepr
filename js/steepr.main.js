(function() {
  var Steepr,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Steepr = window.Steepr || (window.Steepr = {
    models: {},
    collections: {},
    views: {},
    init: function(debug) {
      this.app = new this.views.Application;
      if (debug) return console.log("application started");
    }
  });

  Steepr.views.Application = (function(_super) {

    __extends(Application, _super);

    function Application() {
      Application.__super__.constructor.apply(this, arguments);
    }

    Application.prototype.initialize = function() {
      new Swipe($("#types").get(0));
      return $("#steep").on("pageshow", function(e, data) {
        var steep;
        console.log(e, data);
        steep = $("#steep .content");
        steep.addClass("brewing");
        return setTimeout((function() {
          steep.removeCass('brewing');
          console.log('about to transition');
          return $.mobile.changePage("#home", {
            transition: "slide",
            reverse: true
          });
        }), 9000);
      });
    };

    Application.prototype.events = {
      "click #steepit": "logit",
      "pageshow #steep": "steep"
    };

    Application.prototype.render = function() {};

    Application.prototype.logit = function() {
      return console.log(arguments);
    };

    Application.prototype.steep = function() {
      return console.log("steeping");
    };

    return Application;

  })(Backbone.View);

}).call(this);
