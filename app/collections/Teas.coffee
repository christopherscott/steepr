{Tea} = require "../models/Tea"

class exports.Teas extends Backbone.Collection

  localStorage: new Backbone.LocalStorage("Teas")

  model: Tea
  
  activate: (type) ->
    @each (model) -> model.set "active", false
    _.each @where(name: type), (model) -> model.set "active", true

  getActive: ->
    @where(active: true)[0]

  getActiveTime: =>
    @getActive().getCurrentTime()

  comparator: (model) ->
    model.get "index"

  loadDefaults: ->
    teas = this
    _.each DEFAULT_TEAS, (tea) ->
      teas.create tea

# TODO: move to external config

DEFAULT_TEAS = [
    name: "Green"
    times: [ 5, 10, 15, 20 ]
    temperature: "170-180"
    count: 0
    active: true
    index: 0
  ,
    name: "White"
    times: [ 60, 60, 90, 105 ]
    temperature: "170-180"
    count: 0
    index: 1
  ,
    name: "Black"
    times: [ 60, 60, 90, 90 ]
    temperature: "212"
    count: 0
    index: 2
  ,
    name: "Oolong"
    times: [ 30, 30, 45, 45 ]
    temperature: "190-195"
    count: 0
    index: 3
  ,
    name: "Pu-erh"
    times: [ 30, 30, 45, 60 ]
    temperature: "212"
    count: 0
    index: 4
   ]