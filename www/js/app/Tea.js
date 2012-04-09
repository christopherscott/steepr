define(["use!backbone"], function(Backbone) {
  
  return Backbone.Model.extend({
    defaults: {
      name: "Earl Gray",
      times: [50, 60, 90, 90],
      temperature: 120,
      count: 0
    }
  });

});

