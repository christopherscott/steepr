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
          tea_type = current_tea.get("name"),
          times_threshold = current_tea.get("times").length - 1,
          times = current_tea.get("times"),
          count = current_tea.get("count") 
          steeping_secs = times[count < times_threshold ? count : times_threshold ]

      console.log(steeping_secs)

      current_tea.incr_count()
      var prefixes = ["-webkit-", "-moz-", "-ms-", ""]
      for (var i = 0, len = prefixes.length; i < len; i++) {
        steep.css(prefixes[i] + "animation-duration", steeping_secs + "s")
      }
      steep.addClass("brewing")


      $("#steep .type").text(tea_type)

      setTimeout(function() {
        steep.removeClass('brewing')
        alert("tea is done " + steeping_secs + "secs")
        // $.mobile.changePage("#home", {
        //   transition: "slide",
        //   reverse: true
        // });
      }, steeping_secs * 1000)
    }

  })

})
