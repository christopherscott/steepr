{Teas} = require "../collections/Teas"
{TeaListView} = require "../views/TeaListView"

BREWING_CLASS = 'brewing'

class exports.HomeView extends Backbone.View

  el: $('#steepr')

  events: {}
    # 'pageshow #steep' : 'steep'

  initialize: ->

    console.log 'home view started'

    # initialize 'steep tea' fast button
    home_view = this
    new MBP.fastButton $('#steepit')[0], ->
      $.mobile.changePage '#steep', transition: 'slide'
      home_view.steep()
      false

    # initialize tea list on homepage
    teas = @teas = @collection
    @teaList_view = teaListView = new TeaListView collection: teas
    teas.fetch
      add: true
      success: (coll, resp) ->
        teas.loadDefaults() unless coll.length
        teaListView.activateSwipe()
      error: (coll, resp) ->
        console.log "Fetch Error: #{arguments}"
    
  steep: (e, data) ->
    steep_content = $('#steep .content')
    current = @teas.getActive()
    times = current.get 'times'
    count = current.get 'count'
    last = times.length - 1
    steeping_secs = times[(if count < last then count else last)]

    @trigger 'steep', current, steeping_secs

    current.incr_count()
    