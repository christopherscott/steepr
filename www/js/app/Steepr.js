define(["jquery", "use!backbone", "app/Teas", "lib/swipe", "jquery_mobile"], function($, Backbone, Teas) {
  
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
      count: 0,
      active: true
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

  return Backbone.View.extend({

    initialize: function () {
      // initialize type swiper
      // for basic functionality
      $("#steep").on("pageshow", function(e, data) {
        var steep = $("#steep .content");
        steep.addClass("brewing");

        setTimeout(function() {
          steep.removeClass('brewing');
          $.mobile.changePage("#home", {
            transition: "slide",
            reverse: true
          });
        }, 9000);
      })

      // make a local reference, so it gets saved in closure
      // for use in Swipe callback
      var teas = this.teas = window.teas = new Teas(DEFAULT_TEAS);

      // make one tea active
      window.swipe = new Swipe($("#types").get(0), {
        callback: function (e, index, element) {
          teas.activate(index);
        }
      });

      // TODO: start swipe on last steeped tea


    } // /initialize

  });

});
