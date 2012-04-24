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
  var BREWING_CLASS, TeaListView, Teas,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Teas = require("../collections/Teas").Teas;

  TeaListView = require("../views/TeaListView").TeaListView;

  BREWING_CLASS = 'brewing';

  exports.HomeView = (function(_super) {

    __extends(HomeView, _super);

    function HomeView() {
      HomeView.__super__.constructor.apply(this, arguments);
    }

    HomeView.prototype.el = $('#steepr');

    HomeView.prototype.events = {};

    HomeView.prototype.initialize = function() {
      var home_view, teaListView, teas;
      console.log('home view started');
      home_view = this;
      new MBP.fastButton($('#steepit')[0], function() {
        $.mobile.changePage('#steep', {
          transition: 'slide'
        });
        home_view.steep();
        return false;
      });
      teas = this.teas = this.collection;
      this.teaList_view = teaListView = new TeaListView({
        collection: teas
      });
      return teas.fetch({
        add: true,
        success: function(coll, resp) {
          if (!coll.length) teas.loadDefaults();
          return teaListView.activateSwipe();
        },
        error: function(coll, resp) {
          return console.log("Fetch Error: " + arguments);
        }
      });
    };

    HomeView.prototype.steep = function(e, data) {
      var count, current, last, steep_content, steeping_secs, times;
      steep_content = $('#steep .content');
      current = this.teas.getActive();
      times = current.get('times');
      count = current.get('count');
      last = times.length - 1;
      steeping_secs = times[(count < last ? count : last)];
      this.trigger('steep', current, steeping_secs);
      return current.incr_count();
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
  var AboutView, BrunchApplication, HomeView, PreferencesView, SteepView, Teas,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  BrunchApplication = require('helpers').BrunchApplication;

  Teas = require('./collections/Teas').Teas;

  HomeView = require('./views/HomeView').HomeView;

  AboutView = require('./views/AboutView').AboutView;

  PreferencesView = require('./views/PreferencesView').PreferencesView;

  SteepView = require('./views/SteepView').SteepView;

  exports.Steepr = (function(_super) {

    __extends(Steepr, _super);

    function Steepr() {
      Steepr.__super__.constructor.apply(this, arguments);
    }

    Steepr.prototype.initialize = function() {
      this.teas = new Teas;
      this.home_view = new HomeView({
        collection: this.teas
      });
      this.steep_view = new SteepView({
        collection: this.teas
      });
      this.preferences_view = new PreferencesView;
      this.about_view = new AboutView;
      this.fixFouc();
      return console.log("application started");
    };

    Steepr.prototype.fixFouc = function() {
      var doc;
      doc = document.documentElement;
      return doc.className = doc.className.replace(/\bno-js/, "js");
    };

    return Steepr;

  })(BrunchApplication);

  window.steepr = new exports.Steepr;

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
  var SteepTemplate, setAnimationDuration,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  SteepTemplate = require('./templates/steep');

  setAnimationDuration = function(jqObj, seconds) {
    return ['-webkit-', '-moz-', '-ms-', ''].forEach(function(prefix) {
      jqObj.css("" + prefix + "animation-duration", "" + seconds + "s");
      return jqObj.css("" + prefix + "transition-duration", "" + seconds + "s");
    });
  };

  exports.SteepView = (function(_super) {

    __extends(SteepView, _super);

    function SteepView() {
      this.startTimer = __bind(this.startTimer, this);
      this.render = __bind(this.render, this);
      SteepView.__super__.constructor.apply(this, arguments);
    }

    SteepView.prototype.el = $('#steep');

    SteepView.prototype.events = {
      "click a[data-rel=back]": "waitAndClear"
    };

    SteepView.prototype.initialize = function(options) {
      steepr.home_view.on('steep', this.render);
      return steepr.home_view.on('steep', this.startTimer, this);
    };

    SteepView.prototype.render = function(active) {
      return this.$('.tea').html(active.get('name'));
    };

    SteepView.prototype.waitAndClear = function() {
      var interval, that;
      interval = this.interval;
      that = this;
      console.log(interval);
      return $(document).on('pagechange', function() {
        console.log("clearing interval : " + interval);
        clearInterval(interval);
        that.$('#leaves').removeClass('brewing').find('#time').html('');
        return $(document).off('pagechange');
      });
    };

    SteepView.prototype.startTimer = function(active, secs) {
      var interval, minutes, seconds, time, _ref;
      console.log('timer started');
      _ref = this.parseTime(secs), seconds = _ref.seconds, minutes = _ref.minutes;
      time = this.$('#time');
      setAnimationDuration($('#tea'), secs);
      setAnimationDuration($('#mug'), secs);
      seconds--;
      this.interval = interval = setInterval(function() {
        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes) {
            minutes--;
            seconds = 59;
          } else {
            time.html('');
            time.html('done');
            return clearInterval(interval);
          }
        }
        time.html('');
        return time.html("" + minutes + ":" + seconds);
      }, 1000);
      this.$('#leaves').addClass('brewing');
      return time.html("" + minutes + ":" + seconds);
    };

    SteepView.prototype.parseTime = function(secs) {
      var minutes, seconds;
      seconds = secs % 60;
      minutes = (secs - seconds) / 60;
      return {
        seconds: seconds,
        minutes: minutes
      };
    };

    return SteepView;

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
  buffer += escapeExpression(stack1) + "</p>\n  <b class=\"left\"></b>\n  <b class=\"right\"></b>\n</div>";
  return buffer;});
  }
}));
