

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

    # name: "Earl Gray"
    # times: [50, 60, 90, 90]
    # temperature: 120
    # count: 0

DEFAULT_TEAS = [
  {
    name: "White"
    times: [60,60,90,105]
    temperature: "170-180"
    count: 0
  }
  {
    name: "Green"
    times: [60,60,90,105]
    temperature: "170-180"
    count: 0
  }
  {
    name: "Oolong"
    times: [30,30,45,45]
    temperature: "190-195"
    count: 0
  }
  {
    name: "Black"
    times: [60,60,90,90]
    temperature: "212"
    count: 0
  }
  {
    name: "Pu-erh"
    times: [30,30,45,60]
    temperature: "212"
    count: 0
  }
]

Steepr = window.Steepr ||= {
  models: {}
  collections: {}
  views: {}
  init: (debug) ->
    # load initial tea models
    # actually this should change to load from localStorage
    # but for now it's ok to just bootstap via script
    @teas = new @collections.Teas DEFAULT_TEAS
    # start application
    @app = new @views.Application
    console.log "application started" if debug
}


