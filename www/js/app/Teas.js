define(["use!backbone", "app/Tea"], function(Backbone, Tea) {
  
  return Backbone.Collection.extend({
    model: Tea
  })

});
