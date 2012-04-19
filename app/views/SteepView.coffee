SteepTemplate = require "./templates/steep"

class exports.SteepView extends Backbone.View

  el: $ "#steep"
  
  initialize: (options) ->
    app.home_view.on "steep", @render, this

  render: (active) ->
    @$(".tea").html active.get "name"
