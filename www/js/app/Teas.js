define(["use!backbone", "app/Tea"], function(Backbone, Tea) {
  
  return Backbone.Collection.extend({
    model: Tea,
    activate: function (index) {

      // TODO: cache 'active' model on collection for faster updating

      // deactivate all
      this.each(function (model) {
        model.set("active", false)
      })

      // activate target
      this.at(index).set("active", true)

      // DEBUG: ok to remove
      // console.log(this.pluck("active"))

    }
  })

});
