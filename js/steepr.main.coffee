

# class Steepr
  # constructor: ->
    # initialization tasks
    # check for:
      # steepings localStorage
      # custom times
    # register events
    # @steepit = $("#steepit")
    # @steepit.on "tap", (e) ->
    #   console.log e
    
    

  
  # updateType: (e, index, element) ->
    # update tea type based on index, class name, or maybe data-attrib
    # update in-memory state

  #steep: (args) ->
    # switch to steeping page
    # start the (visually) updating timer
    # start the (actual) timer ^ should they be the same
    # start the background animation
    # save the current steeping in localStorage:
      # if current steeping > preferred:
        # trigger alert, asking if to procede
        # if yes, continue
        # if restart, update localStorage 'steeping', continue
        # if just no, cancel action
      # if otherwise continuing:
        # save the current steeping in tea type record in localStorage:
          # steepr-green: "2"
    # once done steeping, return to homepage


  # not sure what method/function to put these yet:
    # upon rendering of homepage, check for local storage steepings, update graphics
    # restart button: for each tea type, maybe top-left, furthest from right-handed thumbs or underneath
    # upon rendering of homepage, check for presence of custom times localStorage, load if present
    # cutomize: editable table of tea times for user to update: on update, save to localStorage:
      # steepr-custom-times: { "green" : "93,60,45,30", "white": "120, 110, etc..."}
    # built-by page, with giant/circle picture of my avatar
    # steep! button to trigger steeping
    # maybe double-click on tea will reset times
    # confirm dialog for resetting tea times 

# interesting signature on application startup

# tea (model): name/type (string), durations: [integers]
# steeping (model): name/type (string), iteration (integer)
# teas (collection): [teas]
#   - view: time schedule, customizer
# steepingHistory (collection): [steepings]
#   - history? 
#   - entirity saved to localStorage? (history?)
#   - localStorage limit?
# lastSteeping: 

# main data structures:
# - tea: name(string), brew-times: [time]
# - time: 
# - tea: name(string), times[integer]
# - steeping: type(string), iteration(integer)

# class Steepr
#   constructor: ->
#     @models = {}
#     @collections = {}
#     @views = {}
#   start: (debug) ->
#     new @views.Application()

Steepr = window.Steepr ||= {
  models: {}
  collections: {}
  views: {}
  init: (debug) ->
    @app = new @views.Application
    console.log "application started" if debug
}
  
# main steepr application instance
class Steepr.views.Application extends Backbone.View
  initialize: ->
    new Swipe($("#types").get(0))
    
    $("#steep").on "pageshow", (e, data) ->
      console.log e, data
      steep = $("#steep .content")
      steep.addClass "brewing"
      setTimeout (->
        steep.removeCass('brewing')
        console.log 'about to transition'
        $.mobile.changePage "#home",
          transition: "slide"
          reverse: true
      ), 9000
  
  events:
    "click #steepit" : "logit"
    "pageshow #steep" : "steep"
  render: () ->
    # noop
  logit: () ->
    console.log arguments 
  steep: () ->
    console.log "steeping"

