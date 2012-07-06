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
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Teas = require("../collections/Teas").Teas;

  TeaListView = require("../views/TeaListView").TeaListView;

  BREWING_CLASS = 'brewing';

  exports.HomeView = (function(_super) {

    __extends(HomeView, _super);

    function HomeView() {
      this.steep = __bind(this.steep, this);
      HomeView.__super__.constructor.apply(this, arguments);
    }

    HomeView.prototype.el = $('#steepr');

    HomeView.prototype.events = {};

    HomeView.prototype.initialize = function() {
      new MBP.fastButton($('#steepit')[0], this.steep);
      return this.teaList_view = new TeaListView({
        collection: this.collection
      });
    };

    HomeView.prototype.steep = function(e, data) {
      $.mobile.changePage('#steep', {
        transition: 'slide'
      });
      return this.trigger('steep');
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
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Tea = require("../models/Tea").Tea;

  exports.Teas = (function(_super) {

    __extends(Teas, _super);

    function Teas() {
      this.incrementActive = __bind(this.incrementActive, this);
      this.getActiveTime = __bind(this.getActiveTime, this);
      this.getActive = __bind(this.getActive, this);
      Teas.__super__.constructor.apply(this, arguments);
    }

    Teas.prototype.localStorage = new Backbone.LocalStorage("Teas");

    Teas.prototype.model = Tea;

    Teas.prototype.activate = function(tea) {
      this.each(function(tea) {
        return tea.save({
          active: false
        });
      });
      return tea.save({
        active: true
      });
    };

    Teas.prototype.getActive = function() {
      return this.where({
        active: true
      })[0];
    };

    Teas.prototype.getActiveTime = function() {
      return this.getActive().getCurrentTime();
    };

    Teas.prototype.incrementActive = function() {
      return this.getActive().increment();
    };

    Teas.prototype.comparator = function(model) {
      return model.get("index");
    };

    Teas.prototype.loadDefaults = function() {
      var self;
      self = this;
      return _.each(DEFAULT_TEAS, function(tea) {
        var new_tea;
        return new_tea = self.create(tea);
      });
    };

    return Teas;

  })(Backbone.Collection);

  DEFAULT_TEAS = [
    {
      name: "Green",
      times: [5, 10, 15, 20],
      temperature: "170-180",
      total: 0,
      round: 0,
      active: true,
      index: 0
    }, {
      name: "White",
      times: [60, 60, 90, 105],
      temperature: "170-180",
      total: 0,
      round: 0,
      index: 1
    }, {
      name: "Black",
      times: [60, 60, 90, 90],
      temperature: "212",
      total: 0,
      round: 0,
      index: 2
    }, {
      name: "Oolong",
      times: [30, 30, 45, 45],
      temperature: "190-195",
      total: 0,
      round: 0,
      index: 3
    }, {
      name: "Pu-erh",
      times: [30, 30, 45, 60],
      temperature: "212",
      total: 0,
      round: 0,
      index: 4
    }
  ];

}).call(this);

  }
}));
(this.require.define({
  "models/Tea": function(exports, require, module) {
    (function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  exports.Tea = (function(_super) {

    __extends(Tea, _super);

    function Tea() {
      this.getCurrentTime = __bind(this.getCurrentTime, this);
      Tea.__super__.constructor.apply(this, arguments);
    }

    Tea.prototype.defaults = {
      name: "Earl Gray",
      temperature: 120,
      times: [50, 60, 90, 90],
      total: 0,
      round: 0,
      batch: 4,
      active: false
    };

    Tea.prototype.increment = function() {
      return this.save({
        round: this.get('round') + 1,
        total: this.get('total') + 1
      });
    };

    Tea.prototype.atLimit = function() {
      return this.get('round') === this.get('batch');
    };

    Tea.prototype.overLimit = function() {
      return this.get('round') > this.get('batch');
    };

    Tea.prototype.getCurrentTime = function() {
      var last, round, times;
      times = this.get('times');
      round = this.get('round');
      last = times.length - 1;
      return times[(round < last ? round : last)];
    };

    Tea.prototype.toggleActive = function() {
      return this.set({
        active: !this.get('active')
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
        collection: this.teas,
        home_view: this.home_view
      });
      this.fixFouc();
      console.log("application started");
      return MBP.hideUrlBarOnLoad();
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
      this.clearTimer = __bind(this.clearTimer, this);
      this.render = __bind(this.render, this);
      SteepView.__super__.constructor.apply(this, arguments);
    }

    SteepView.prototype.el = $('#steep');

    SteepView.prototype.events = {
      "click a[data-rel=back]": "waitAndClear"
    };

    SteepView.prototype.initialize = function(options) {
      var home;
      home = options.home_view;
      home.on('steep', this.render);
      return home.on('steep', this.startTimer, this);
    };

    SteepView.prototype.render = function() {
      var _ref;
      return this.$('.tea').html((_ref = this.collection.active) != null ? _ref.get('name') : void 0);
    };

    SteepView.prototype.waitAndClear = function() {
      return $(document).on('pagechange', this.clearTimer);
    };

    SteepView.prototype.clearTimer = function() {
      clearInterval(this.interval);
      this.$('#leaves').removeClass('brewing').find('#time').html('');
      return $(document).off('pagechange');
    };

    SteepView.prototype.startTimer = function() {
      var interval, minutes, seconds, secs, time, _ref;
      secs = this.collection.getActiveTime();
      time = this.$('#time');
      _ref = this.parseTime(secs), seconds = _ref.seconds, minutes = _ref.minutes;
      this.collection.incrementActive();
      setAnimationDuration($('#tea'), secs);
      setAnimationDuration($('#mug'), secs);
      this.interval = interval = setInterval(function() {
        if (seconds > 1) {
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
  "views/TeaListView": function(exports, require, module) {
    (function() {
  var TeaView,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  TeaView = require('./TeaView').TeaView;

  exports.TeaListView = (function(_super) {

    __extends(TeaListView, _super);

    function TeaListView() {
      this.activateTea = __bind(this.activateTea, this);
      this.fetchSuccess = __bind(this.fetchSuccess, this);
      TeaListView.__super__.constructor.apply(this, arguments);
    }

    TeaListView.prototype.el = $('#tea-list');

    TeaListView.prototype.initialize = function() {
      this.collection.bind('add', this.addTeaView, this);
      return this.collection.fetch({
        add: true,
        success: this.fetchSuccess,
        error: this.fetchError
      });
    };

    TeaListView.prototype.fetchSuccess = function(coll, resp) {
      if (!coll.length) this.collection.loadDefaults();
      return this.activateSwipe();
    };

    TeaListView.prototype.fetchError = function(coll, resp) {
      return console.log("Fetch Error: " + arguments);
    };

    TeaListView.prototype.activateSwipe = function() {
      console.log('activating swipe');
      return window.swipe = new Swipe(this.el, {
        callback: this.activateTea,
        startSlide: this.collection.getActive().get('index')
      });
    };

    TeaListView.prototype.addTeaView = function(model) {
      var el, view;
      view = new TeaView({
        model: model
      });
      el = view.render().el;
      this.$('ul').append(el);
      $(el).data('model', model);
      return $(el).data('view', view);
    };

    TeaListView.prototype.activateTea = function(e, index, element) {
      console.log('activating', element);
      return this.collection.activate($(element).data('model'));
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


  buffer += "<div class=\"tea-slide\">\n  <h2>";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</h2>\n  <p class=\"round-";
  foundHelper = helpers.round;
  stack1 = foundHelper || depth0.round;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "round", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Steepings this round: ";
  foundHelper = helpers.round;
  stack1 = foundHelper || depth0.round;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "round", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</p>\n  <p>Total steepings: <span class=\"count\">";
  foundHelper = helpers.total;
  stack1 = foundHelper || depth0.total;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "total", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span></p>\n</div>\n";
  return buffer;});
  }
}));
