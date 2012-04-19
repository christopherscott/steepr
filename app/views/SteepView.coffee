SteepTemplate = require './templates/steep'

class exports.SteepView extends Backbone.View

  el: $ '#steep'
  
  initialize: (options) ->
    app.home_view.on 'steep', @render
    app.home_view.on 'steep', @startTimer, this

  render: (active) =>
    @$('.tea').html active.get 'name'

  startTimer: =>
    console.log 'timer started'
    @$('#fluid').addClass 'brewing'