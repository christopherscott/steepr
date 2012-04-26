class exports.Tea extends Backbone.Model
  
  defaults:
    name: "Earl Gray"
    temperature: 120
    times: [ 50, 60, 90, 90 ]
    total: 0
    round: 0
    batch: 4
    active: false

  increment: ->
    @save
      round: @get('round') + 1
      total: @get('total') + 1

  atLimit: ->
    @get 'round' == @get 'batch'

  overLimit: ->
    @get 'round' > @get 'batch'

  getCurrentTime: =>
    times = @get 'times'
    count = @get 'count'
    last = times.length - 1

    times[(if count < last then count else last)]