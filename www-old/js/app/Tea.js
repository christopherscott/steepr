define(["use!backbone"], function(Backbone) {
  
  return Backbone.Model.extend({
    defaults: {
      name: "Earl Gray",
      times: [50, 60, 90, 90],
      temperature: 120,
      count: 0,
      active: false
    },
    // models are responsible for updating their own count
    incr_count: function () {
      this.save({count: this.get("count") + 1 })
    }
  });

});
