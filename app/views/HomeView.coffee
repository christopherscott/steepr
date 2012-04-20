BREWING_CLASS = 'brewing'

class exports.HomeView extends Backbone.View

  el: $('#steepr')

  events: {}
    # 'pageshow #steep' : 'steep'

  initialize: ->
    console.log 'home view started'
    home_view = this
    new MBP.fastButton $('#steepit')[0], ->
      $.mobile.changePage '#steep', transition: 'slide'
      home_view.steep()
      false


  steep: (e, data) ->
    steep_content = $('#steep .content')
    current = app.teas.getActive()
    times = current.get 'times'
    count = current.get 'count'
    last = times.length - 1
    steeping_secs = times[(if count < last then count else last)]

    @trigger 'steep', current, steeping_secs

    current.incr_count()
    