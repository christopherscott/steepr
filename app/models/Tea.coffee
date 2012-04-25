class exports.Tea extends Backbone.Model
  
  defaults:
    name: "Earl Gray"
    times: [ 50, 60, 90, 90 ]
    temperature: 120
    total: 235
    round: 1
    active: false

  # models are responsible for updating their own count
  incr_count: ->
    @save count: @get("count") + 1
