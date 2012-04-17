(function(/*! Brunch !*/) {
  if (!this.require) {
    var modules = {}, cache = {}, require = function(name, root) {
      var module = cache[name], path = expand(root, name), fn;
      if (module) {
        return module;
      } else if (fn = modules[path] || modules[path = expand(path, './index')]) {
        module = {id: name, exports: {}};
        try {
          cache[name] = module.exports;
          fn(module.exports, function(name) {
            return require(name, dirname(path));
          }, module);
          return cache[name] = module.exports;
        } catch (err) {
          delete cache[name];
          throw err;
        }
      } else {
        throw 'module \'' + name + '\' not found';
      }
    }, expand = function(root, name) {
      var results = [], parts, part;
      if (/^\.\.?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part == '..') {
          results.pop();
        } else if (part != '.' && part != '') {
          results.push(part);
        }
      }
      return results.join('/');
    }, dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };
    this.require = function(name) {
      return require(name, '');
    };
    this.require.brunch = true;
    this.require.define = function(bundle) {
      for (var key in bundle)
        modules[key] = bundle[key];
    };
  }
}).call(this);(this.require.define({
  "routers/main_router": function(exports, require, module) {
    (function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  exports.MainRouter = (function(_super) {

    __extends(MainRouter, _super);

    function MainRouter() {
      MainRouter.__super__.constructor.apply(this, arguments);
    }

    MainRouter.prototype.routes = {
      '': 'home'
    };

    MainRouter.prototype.home = function() {
      return $('body').html(app.homeView.render().el);
    };

    return MainRouter;

  })(Backbone.Router);

}).call(this);

  }
}));
(this.require.define({
  "helpers": function(exports, require, module) {
    (function() {

  exports.BrunchApplication = (function() {

    function BrunchApplication() {
      var _this = this;
      $(function() {
        return _this.initialize(_this);
      });
    }

    BrunchApplication.prototype.initialize = function() {
      return null;
    };

    return BrunchApplication;

  })();

}).call(this);

  }
}));
(this.require.define({
  "collections/Teas": function(exports, require, module) {
    (function() {
  var DEFAULT_TEAS, Tea,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Tea = require("../models/Tea").Tea;

  exports.Teas = (function(_super) {

    __extends(Teas, _super);

    function Teas() {
      Teas.__super__.constructor.apply(this, arguments);
    }

    Teas.prototype.localStorage = new Backbone.LocalStorage("Teas");

    Teas.prototype.model = Tea;

    Teas.prototype.activate = function(type) {
      this.each(function(model) {
        return model.set("active", false);
      });
      _.each(this.where({
        name: type
      }), function(model) {
        return model.set("active", true);
      });
      return console.log(this.getActive().get("name"));
    };

    Teas.prototype.getActive = function() {
      return this.where({
        active: true
      })[0];
    };

    Teas.prototype.comparator = function(model) {
      return model.get("index");
    };

    Teas.prototype.loadDefaults = function() {
      var that;
      that = this;
      return _.each(DEFAULT_TEAS, function(tea) {
        return that.create(tea);
      });
    };

    return Teas;

  })(Backbone.Collection);

  DEFAULT_TEAS = [
    {
      name: "Green",
      times: [5, 10, 15, 20],
      temperature: "170-180",
      count: 0,
      active: true,
      index: 0
    }, {
      name: "White",
      times: [60, 60, 90, 105],
      temperature: "170-180",
      count: 0,
      index: 1
    }, {
      name: "Black",
      times: [60, 60, 90, 90],
      temperature: "212",
      count: 0,
      index: 2
    }, {
      name: "Oolong",
      times: [30, 30, 45, 45],
      temperature: "190-195",
      count: 0,
      index: 3
    }, {
      name: "Pu-erh",
      times: [30, 30, 45, 60],
      temperature: "212",
      count: 0,
      index: 4
    }
  ];

}).call(this);

  }
}));
(this.require.define({
  "models/Steeping": function(exports, require, module) {
    (function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  exports.Steeping = (function(_super) {

    __extends(Steeping, _super);

    function Steeping() {
      Steeping.__super__.constructor.apply(this, arguments);
    }

    Steeping.prototype.defaults = {
      type: "Earl Gray",
      timestamp: "Fri Apr 06 2012 09:04:03 GMT-0400 (EDT)",
      count: 0
    };

    return Steeping;

  })(Backbone.Model);

}).call(this);

  }
}));
(this.require.define({
  "models/Tea": function(exports, require, module) {
    (function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  exports.Tea = (function(_super) {

    __extends(Tea, _super);

    function Tea() {
      Tea.__super__.constructor.apply(this, arguments);
    }

    Tea.prototype.defaults = {
      name: "Earl Gray",
      times: [50, 60, 90, 90],
      temperature: 120,
      count: 0,
      active: false
    };

    Tea.prototype.incr_count = function() {
      return this.save({
        count: this.get("count") + 1
      });
    };

    return Tea;

  })(Backbone.Model);

}).call(this);

  }
}));
(this.require.define({
  "initialize": function(exports, require, module) {
    (function() {
  var BrunchApplication, MainRouter, Steepr,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  BrunchApplication = require('helpers').BrunchApplication;

  MainRouter = require('routers/main_router').MainRouter;

  Steepr = require('views/Steepr').Steepr;

  exports.Application = (function(_super) {

    __extends(Application, _super);

    function Application() {
      Application.__super__.constructor.apply(this, arguments);
    }

    Application.prototype.initialize = function() {
      window.Steepr = new Steepr;
      console.log("application should've started");
      return (function(H) {
        return H.className = H.className.replace(/\bno-js\b/, "js");
      })(document.documentElement);
    };

    return Application;

  })(BrunchApplication);

  window.app = new exports.Application;

}).call(this);

  }
}));
(this.require.define({
  "views/home_view": function(exports, require, module) {
    (function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  exports.HomeView = (function(_super) {

    __extends(HomeView, _super);

    function HomeView() {
      HomeView.__super__.constructor.apply(this, arguments);
    }

    HomeView.prototype.id = 'home-view';

    HomeView.prototype.render = function() {
      $(this.el).html(require('./templates/home'));
      return this;
    };

    return HomeView;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "views/Steepr": function(exports, require, module) {
    (function() {
  var BREWING_CLASS, TeaListView, Teas, setAnimationDuration,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Teas = require("../collections/Teas").Teas;

  TeaListView = require("./TeaListView").TeaListView;

  BREWING_CLASS = "brewing";

  setAnimationDuration = function(jqObj, seconds) {
    return ["-webkit-", "-moz-", "-ms-", ""].forEach(function(prefix) {
      return jqObj.css("" + prefix + "animation-duration", "" + seconds + "s");
    });
  };

  exports.Steepr = (function(_super) {

    __extends(Steepr, _super);

    function Steepr() {
      Steepr.__super__.constructor.apply(this, arguments);
    }

    Steepr.prototype.el = $("body");

    Steepr.prototype.events = {
      "pageshow #steep": "steep"
    };

    Steepr.prototype.initialize = function() {
      var teaListView, teas;
      teas = new Teas();
      teaListView = new TeaListView({
        collection: teas
      });
      window.teas = teas;
      window.teaListView = teaListView;
      teas.fetch({
        add: true,
        success: function(coll, resp) {
          if (!coll.length) teas.loadDefaults();
          return teaListView.activateSwipe();
        },
        error: function(coll, resp) {
          return console.log("Fetch Error: " + arguments);
        }
      });
      return console.log("steepr view started");
    };

    Steepr.prototype.steep = function(e, data) {
      var count, current, last, steep_content, steeping_secs, times;
      steep_content = $("#steep .content");
      current = teas.getActive();
      times = current.get("times");
      count = current.get("count");
      last = times.length - 1;
      steeping_secs = times[(count < last ? count : last)];
      $("#steep .type").text(current.get("name"));
      current.incr_count();
      setAnimationDuration(steep_content, steeping_secs);
      steep_content.addClass(BREWING_CLASS);
      return setTimeout((function() {
        return steep_content.removeClass(BREWING_CLASS);
      }), steeping_secs * 1000);
    };

    return Steepr;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "views/TeaListView": function(exports, require, module) {
    (function() {
  var TeaView,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  TeaView = require("./TeaView").TeaView;

  exports.TeaListView = (function(_super) {

    __extends(TeaListView, _super);

    function TeaListView() {
      TeaListView.__super__.constructor.apply(this, arguments);
    }

    TeaListView.prototype.el = $("#tea-list");

    TeaListView.prototype.initialize = function() {
      return this.collection.bind("add", this.addTeaView, this);
    };

    TeaListView.prototype.addTeaView = function(model) {
      var el, view;
      view = new TeaView({
        model: model
      });
      el = view.render().el;
      $(el).data("model", model);
      return this.$("ul").append(el);
    };

    TeaListView.prototype.activateSwipe = function() {
      var teas;
      teas = this.collection;
      return window.swipe = new Swipe(this.el, {
        callback: function(e, index, element) {
          return teas.activate($(element).data("model").get("name"));
        }
      });
    };

    return TeaListView;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "views/TeaView": function(exports, require, module) {
    (function() {
  var TeaTemplate,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  TeaTemplate = require("./templates/tea");

  exports.TeaView = (function(_super) {

    __extends(TeaView, _super);

    function TeaView() {
      TeaView.__super__.constructor.apply(this, arguments);
    }

    TeaView.prototype.tagName = "li";

    TeaView.prototype.template = TeaTemplate;

    TeaView.prototype.initialize = function() {
      return this.model.bind("change", this.render, this);
    };

    TeaView.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    };

    return TeaView;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "views/templates/tea": function(exports, require, module) {
    module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<div>\n  <h1>something</h1>\n  <h2>";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</h2>\n  <p>steepings: ";
  foundHelper = helpers.count;
  stack1 = foundHelper || depth0.count;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "count", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</p>\n</div>";
  return buffer;});
  }
}));
