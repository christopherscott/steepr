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
  "views/About_view": function(exports, require, module) {
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
  "initialize": function(exports, require, module) {
    (function() {
  var BrunchApplication, Home_view, TeaList_view, Teas,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  BrunchApplication = require('helpers').BrunchApplication;

  Home_view = require('./views/Home_view').Home_view;

  Teas = require("./collections/Teas").Teas;

  TeaList_view = require("./views/TeaList_view").TeaList_view;

  exports.Application = (function(_super) {

    __extends(Application, _super);

    function Application() {
      Application.__super__.constructor.apply(this, arguments);
    }

    Application.prototype.initialize = function() {
      var doc, teaListView, teas;
      this.home_view = new Home_view;
      this.teas = teas = new Teas;
      this.teaList_view = teaListView = new TeaList_view({
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
      doc = document.documentElement;
      doc.className = doc.className.replace(/\bno-js/, "js");
      return console.log("application started");
    };

    return Application;

  })(BrunchApplication);

  window.app = new exports.Application;

}).call(this);

  }
}));
(this.require.define({
  "views/Home_view": function(exports, require, module) {
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

  exports.Home_view = (function(_super) {

    __extends(Home_view, _super);

    function Home_view() {
      Home_view.__super__.constructor.apply(this, arguments);
    }

    Home_view.prototype.el = $("#steepr");

    Home_view.prototype.events = {
      "pageshow #steep": "steep"
    };

    Home_view.prototype.initialize = function() {
      return console.log("steepr view started");
    };

    Home_view.prototype.steep = function(e, data) {
      var count, current, last, steep_content, steeping_secs, times;
      steep_content = $("#steep .content");
      current = app.teas.getActive();
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

    return Home_view;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "views/Preferences_view": function(exports, require, module) {
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
  "views/Steep_view": function(exports, require, module) {
    (function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  exports.SteepView = (function(_super) {

    __extends(SteepView, _super);

    function SteepView() {
      SteepView.__super__.constructor.apply(this, arguments);
    }

    return SteepView;

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
  "views/TeaList_view": function(exports, require, module) {
    (function() {
  var Tea_view,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Tea_view = require("./Tea_view").Tea_view;

  exports.TeaList_view = (function(_super) {

    __extends(TeaList_view, _super);

    function TeaList_view() {
      TeaList_view.__super__.constructor.apply(this, arguments);
    }

    TeaList_view.prototype.el = $("#tea-list");

    TeaList_view.prototype.initialize = function() {
      return this.collection.bind("add", this.addTeaView, this);
    };

    TeaList_view.prototype.addTeaView = function(model) {
      var el, view;
      view = new Tea_view({
        model: model
      });
      el = view.render().el;
      $(el).data("model", model);
      return this.$("ul").append(el);
    };

    TeaList_view.prototype.activateSwipe = function() {
      var teas;
      teas = this.collection;
      return window.swipe = new Swipe(this.el, {
        callback: function(e, index, element) {
          return teas.activate($(element).data("model").get("name"));
        }
      });
    };

    return TeaList_view;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "views/Tea_view": function(exports, require, module) {
    (function() {
  var TeaTemplate,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  TeaTemplate = require("./templates/tea");

  exports.Tea_view = (function(_super) {

    __extends(Tea_view, _super);

    function Tea_view() {
      Tea_view.__super__.constructor.apply(this, arguments);
    }

    Tea_view.prototype.tagName = "li";

    Tea_view.prototype.template = TeaTemplate;

    Tea_view.prototype.initialize = function() {
      return this.model.bind("change", this.render, this);
    };

    Tea_view.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    };

    return Tea_view;

  })(Backbone.View);

}).call(this);

  }
}));
