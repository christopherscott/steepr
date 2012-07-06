{TeaView} = require './TeaView'

class exports.TeaListView extends Backbone.View

  el: $('#tea-list')

  # subscribe to 'add' event for tea collection
  initialize: ->
    @collection.bind 'add', @addTeaView, this

    # populate initial models, contrary to the 
    # recommended backbone practice of bootstrapping
    # into place, mostly since we're using localStorage
    # and making a offline web app
    @collection.fetch
      add: true
      success: @fetchSuccess
      error: @fetchError

  fetchSuccess: (coll, resp) =>
    @collection.loadDefaults() unless coll.length
    @activateSwipe()

  fetchError: (coll, resp) ->
    console.log "Fetch Error: #{arguments}"

  # this init logic could've been put in initialize BUT
  # it requires all the child views to be created and rendered
  # in order to measure for the size of the swiper,
  # so instead it's called on this view explicity by the app
  # after the Teas collection is populated and views have been
  # appended to the DOM
  activateSwipe: ->
    console.log 'activating swipe'
    window.swipe = new Swipe @el,
      callback: @activateTea
      startSlide: @collection.getActive().get 'index'
    console.log($("#swipe-tester")[0])
    window.swipe2 = new Swipe $("#swipe-tester")[0]

  # each time a model is added, we add a corresponding view
  # we also put a reference to the underlying model in element data
  # so that in 'activateSwipe' we have access to model's name prop
  addTeaView: (model) ->
    view = new TeaView(model: model)
    el = view.render().el
    @$('ul').append el

    $(el).data 'model', model
    $(el).data 'view', view

  activateTea: (e, index, element) =>
    console.log 'activating', element 
    @collection.activate($(element).data('model'))
