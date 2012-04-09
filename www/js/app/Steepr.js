define(["jquery", "use!backbone", "app/Teas", "lib/swipe", "jquery_mobile"], function($, Backbone, Teas) {
  
  return Backbone.View.extend({

    initialize: function () {
      // initialize type swiper
      new Swipe($("#types").get(0));
      // for basic functionality
      $("#steep").on("pageshow", function(e, data) {
        var steep;
        steep = $("#steep .content");
        steep.addClass("brewing");
        return setTimeout((function() {
          steep.removeClass('brewing');
          return $.mobile.changePage("#home", {
            transition: "slide",
            reverse: true
          });
        }), 9000);
      });
      //
      window.teas = new Teas(DEFAULT_TEAS);
      return console.log(window);
    },

  });


var DEFAULT_TEAS = [
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


});
