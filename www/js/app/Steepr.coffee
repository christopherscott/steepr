define [ "jquery", "use!backbone", "cs!app/Teas", "lib/swipe", "jquery_mobile"], ($, Backbone, Teas) ->
  class Steepr extends Backbone.View
    initialize: (args) ->
      # initialize swiper widget
      new Swipe $("#types").get(0) 
      # basic functionality for tea steeping demo page
      $("#steep").on "pageshow", (e, data) ->
        steep = $("#steep .content")
        steep.addClass "brewing"
        setTimeout ( ->
          steep.removeClass('brewing')
          $.mobile.changePage "#home",
            transition: "slide"
            reverse: true
        ), 9000
      # load default tea models
      window.teas = new Teas DEFAULT_TEAS
      console.log window

DEFAULT_TEAS = [
  {
    name: "White",
    times: [60, 60, 90, 105],
    temperature: "170-180",
    count: 0
  }
  {
    name: "Green",
    times: [60, 60, 90, 105],
    temperature: "170-180",
    count: 0
  }
  {
    name: "Oolong",
    times: [30, 30, 45, 45],
    temperature: "190-195",
    count: 0
  }
  {
    name: "Black",
    times: [60, 60, 90, 90],
    temperature: "212",
    count: 0
  }
  {
    name: "Pu-erh",
    times: [30, 30, 45, 60],
    temperature: "212",
    count: 0
  }
]