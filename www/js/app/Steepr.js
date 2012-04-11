define([
  "jquery",
  "use!backbone",
  "app/Teas",
  "app/TeaListView",
  "lib/swipe",
  "jquery_mobile"
  ], function($, Backbone, Teas, TeaListView) {

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
