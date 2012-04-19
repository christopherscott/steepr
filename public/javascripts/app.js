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
  "views/HomeView": function(exports, require, module) {
    (function() {
  var BREWING_CLASS, setAnimationDuration,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  BREWING_CLASS = "brewing";

  setAnimationDuration = function(jqObj, seconds) {
    return ["-webkit-", "-moz-", "-ms-", ""].forEach(function(prefix) {
      return jqObj.css("" + prefix + "animation-duration", "" + seconds + "s");
    });
  };

  exports.HomeView = (function(_super) {

    __extends(HomeView, _super);

    function HomeView() {
      HomeView.__super__.constructor.apply(this, arguments);
    }

    HomeView.prototype.el = $("#steepr");

    HomeView.prototype.events = {
      "pageshow #steep": "steep"
    };

    HomeView.prototype.initialize = function() {
      console.log("home view started");
      return this.trigger("something", {
        name: "chris"
      });
    };

    HomeView.prototype.steep = function(e, data) {
      var count, current, last, steep_content, steeping_secs, times;
      steep_content = $("#steep .content");
      current = app.teas.getActive();
      times = current.get("times");
      count = current.get("count");
      last = times.length - 1;
      steeping_secs = times[(count < last ? count : last)];
      this.trigger("steep", current);
      current.incr_count();
      setAnimationDuration(steep_content, steeping_secs);
      steep_content.addClass(BREWING_CLASS);
      return setTimeout((function() {
        return steep_content.removeClass(BREWING_CLASS);
      }), steeping_secs * 1000);
    };

    return HomeView;

  })(Backbone.View);

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
      return _.each(this.where({
        name: type
      }), function(model) {
        return model.set("active", true);
      });
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
      var teas;
      teas = this;
      return _.each(DEFAULT_TEAS, function(tea) {
        return teas.create(tea);
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
  "views/AboutView": function(exports, require, module) {
    (function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  exports.AboutView = (function(_super) {

    __extends(AboutView, _super);

    function AboutView() {
      AboutView.__super__.constructor.apply(this, arguments);
    }

    AboutView.prototype.el = $("#about");

    return AboutView;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "initialize": function(exports, require, module) {
    (function() {
  var AboutView, BrunchApplication, HomeView, PreferencesView, SteepView, TeaListView, Teas,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  BrunchApplication = require('helpers').BrunchApplication;

  Teas = require("./collections/Teas").Teas;

  HomeView = require('./views/HomeView').HomeView;

  TeaListView = require("./views/TeaListView").TeaListView;

  AboutView = require('./views/AboutView').AboutView;

  PreferencesView = require('./views/PreferencesView').PreferencesView;

  SteepView = require('./views/SteepView').SteepView;

  exports.Application = (function(_super) {

    __extends(Application, _super);

    function Application() {
      Application.__super__.constructor.apply(this, arguments);
    }

    Application.prototype.initialize = function() {
      var teaListView, teas;
      this.home_view = new HomeView;
      this.steep_view = new SteepView;
      this.preferences_view = new PreferencesView;
      this.about_view = new AboutView;
      this.teas = teas = new Teas;
      this.teaList_view = teaListView = new TeaListView({
        collection: this.teas
      });
      this.teas.fetch({
        add: true,
        success: function(coll, resp) {
          if (!coll.length) teas.loadDefaults();
          return teaListView.activateSwipe();
        },
        error: function(coll, resp) {
          return console.log("Fetch Error: " + arguments);
        }
      });
      this.fixFouc();
      return console.log("application started");
    };

    Application.prototype.fixFouc = function() {
      var doc;
      doc = document.documentElement;
      return doc.className = doc.className.replace(/\bno-js/, "js");
    };

    return Application;

  })(BrunchApplication);

  window.app = new exports.Application;

}).call(this);

  }
}));
(this.require.define({
  "views/PreferencesView": function(exports, require, module) {
    (function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  exports.PreferencesView = (function(_super) {

    __extends(PreferencesView, _super);

    function PreferencesView() {
      PreferencesView.__super__.constructor.apply(this, arguments);
    }

    PreferencesView.prototype.el = $("#preferences");

    return PreferencesView;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "views/SteepView": function(exports, require, module) {
    (function() {
  var SteepTemplate,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  SteepTemplate = require("./templates/steep");

  exports.SteepView = (function(_super) {

    __extends(SteepView, _super);

    function SteepView() {
      SteepView.__super__.constructor.apply(this, arguments);
    }

    SteepView.prototype.el = $("#steep");

    SteepView.prototype.template = SteepTemplate;

    SteepView.prototype.initialize = function(options) {
      return app.home_view.on("steep", this.render, this);
    };

    SteepView.prototype.render = function(active) {
      console.log(active);
      return $(this.el).html(this.template(active.toJSON()));
    };

    return SteepView;

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
      return this.model.on("change", this.render, this);
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


  buffer += "<div>\n  <h2>";
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
(this.require.define({
  "views/templates/steep": function(exports, require, module) {
    module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<header data-role=\"header\" class=\"ui-header ui-bar-a\">\n  <h1>Brewing ";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</h1>\n</header>\n  <div id=\"timer\">\n    <div class=\"inner\">\n      <p class=\"tea\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</p>\n      <time>1<b>:</b>15</time>\n      <p class=\"steeping\">steeping</p>\n    </div>\n  </div>\n</div>";
  return buffer;});
  }
}));
