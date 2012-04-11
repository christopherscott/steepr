define([
  "jquery",
  "use!backbone",
  "app/Teas",
  "app/TeaListView",
  "lib/swipe",
  "jquery_mobile"
  ], function($, Backbone, Teas, TeaListView) {
  
  var DEFAULT_TEAS = [{
      name: "Green",
      times: [60, 60, 90, 105],
      temperature: "170-180",
      count: 0,
      active: true,
      index: 0
    },{
      name: "White",
      times: [60, 60, 90, 105],
      temperature: "170-180",
      count: 0,
      index: 1
    },{
      name: "Black",
      times: [60, 60, 90, 90],
      temperature: "212",
      count: 0,
      index: 2
    },{
      name: "Oolong",
      times: [30, 30, 45, 45],
      temperature: "190-195",
      count: 0,
      index: 3
    },{
      name: "Pu-erh",
      times: [30, 30, 45, 60],
      temperature: "212",
      count: 0,
      index: 4
    }
  ]

  return Backbone.View.extend({
    el: $("body"),
    events: {
      "pageshow #steep" : "steep"
    },
    initialize: function () {
      var that = this,
          teas = new Teas(),
          teaListView = new TeaListView({collection: teas})

      // DEBUG: globals for debugging
      window.teas = teas
      window.teaListView = teaListView

      teas.fetch({
        add: true,
        success: function (coll, resp) {
          if (!coll.length) teas.loadDefaults()        
          teaListView.activateSwipe()
        },
        error: function (coll, resp) { console.log(arguments) }
      })

    },

    steep: function(e, data) {
      var steep = $("#steep .content"),
          current_tea = teas.getActive(),
          tea_type = current_tea.get("name")

      current_tea.incr_count()

      steep.addClass("brewing")

      $("#steep .type").text(tea_type)

      setTimeout(function() {
        steep.removeClass('brewing')
        $.mobile.changePage("#home", {
          transition: "slide",
          reverse: true
        });
      }, 9000)
    }

  })

})
