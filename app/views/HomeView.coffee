{Teas} = require "../collections/Teas"
{TeaListView} = require "../views/TeaListView"

BREWING_CLASS = 'brewing'

class exports.HomeView extends Backbone.View

  el: $('#steepr')

  events: {}
    # 'pageshow #steep' : 'steep'

  initialize: ->
    new MBP.fastButton $('#steepit')[0], @steep
    @teaList_view = new TeaListView collection: @collection
    
  steep: (e, data) =>
    $.mobile.changePage '#steep', transition: 'slide'
    @trigger 'steep'
