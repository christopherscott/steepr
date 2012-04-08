define ["use!backbone", "cs!app/Tea"], (Backbone, Tea) ->
  class Teas extends Backbone.Collection
    model: Tea