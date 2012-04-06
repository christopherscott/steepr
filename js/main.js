(function() {
  var DEFAULT_TEAS, Steepr;

  DEFAULT_TEAS = [
    {
      name: "White",
      times: [60, 60, 90, 105],
      temperature: "170-180",
      count: 0
    }, {
      name: "Green",
      times: [60, 60, 90, 105],
      temperature: "170-180",
      count: 0
    }, {
      name: "Oolong",
      times: [30, 30, 45, 45],
      temperature: "190-195",
      count: 0
    }, {
      name: "Black",
      times: [60, 60, 90, 90],
      temperature: "212",
      count: 0
    }, {
      name: "Pu-erh",
      times: [30, 30, 45, 60],
      temperature: "212",
      count: 0
    }
  ];

  Steepr = window.Steepr || (window.Steepr = {
    models: {},
    collections: {},
    views: {},
    init: function(debug) {
      this.teas = new this.collections.Teas(DEFAULT_TEAS);
      this.app = new this.views.Application;
      if (debug) return console.log("application started");
    }
  });

}).call(this);
