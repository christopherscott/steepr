define ["use!backbone"], (Backbone) ->
  class Tea extends Backbone.Model
    defaults: 
      name: "Earl Gray"
      times: [50, 60, 90, 90]
      temperature: 120
      count: 0
