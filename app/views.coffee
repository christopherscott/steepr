
# main steepr application instance
class Steepr.views.Application extends Backbone.View
  initialize: ->
    # initialize swiper widget
    new Swipe($("#types").get(0))
    # basic functionality for tea steeping demo page
    $("#steep").on "pageshow", (e, data) ->
      steep = $("#steep .content")
      steep.addClass "brewing"
      setTimeout (->
        steep.removeClass('brewing')
        $.mobile.changePage "#home",
          transition: "slide"
          reverse: true
      ), 9000
    # load default tea models?
    # or should it go in the 'main' module?
  events:
    "click #steepit" : "logit"
    "pageshow #steep" : "steep"
  render: () ->
    # noop
  logit: () ->
    console.log arguments 
  steep: () ->
    console.log "steeping"
