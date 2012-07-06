{Tea} = require "../models/Tea"

class exports.Teas extends Backbone.Collection

  localStorage: new Backbone.LocalStorage("Teas")

  model: Tea

  activate: (tea) ->
    @each (tea) -> tea.save active: false
    tea.save active: true
    
  getActive: =>
    @where({active: true})[0]

  getActiveTime: =>
    @getActive().getCurrentTime()

  incrementActive: =>
    @getActive().increment()

  comparator: (model) ->
    model.get "index"

  loadDefaults: ->
    self = this
    _.each DEFAULT_TEAS, (tea) ->
      new_tea = self.create tea

# TODO: move to external config

DEFAULT_TEAS = [
    name: "Green"
    times: [ 5, 10, 15, 20 ]
    temperature: "170-180"
    total: 0
    round: 0
    active: true
    index: 0
  ,
    name: "White"
    times: [ 60, 60, 90, 105 ]
    temperature: "170-180"
    total: 0
    round: 0
    index: 1
  ,
    name: "Black"
    times: [ 60, 60, 90, 90 ]
    temperature: "212"
    total: 0
    round: 0
    index: 2
  ,
    name: "Oolong"
    times: [ 30, 30, 45, 45 ]
    temperature: "190-195"
    total: 0
    round: 0
    index: 3
  ,
    name: "Pu-erh"
    times: [ 30, 30, 45, 60 ]
    temperature: "212"
    total: 0
    round: 0
    index: 4
   ]