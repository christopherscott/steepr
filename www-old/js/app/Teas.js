define(["use!backbone", "app/Tea", "use!backbone_localStorage"], function(Backbone, Tea) {
  
  var DEFAULT_TEAS = [{
      name: "Green",
      times: [5, 10, 15, 20],
      temperature: "170-180",
      count: 0,
      active: true,
      index: 0
    },{
      name: "White",
      times: [60, 60, 90, 105],
      temperature: "170-180",
      count: 0,
      index: 1
    },{
      name: "Black",
      times: [60, 60, 90, 90],
      temperature: "212",
      count: 0,
      index: 2
    },{
      name: "Oolong",
      times: [30, 30, 45, 45],
      temperature: "190-195",
      count: 0,
      index: 3
    },{
      name: "Pu-erh",
      times: [30, 30, 45, 60],
      temperature: "212",
      count: 0,
      index: 4
    }
  ]

  return Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage("Teas"),
    model: Tea,
    activate: function (type) {
      // TODO: cache 'active' model on collection for faster updating
      // deactivate all
      this.each(function (model) {
        model.set("active", false)
      })
      // activate target
      _.each(this.where({name: type}), function(model) { model.set("active", true) });
      // DEBUG: ok to remove
      console.log(this.getActive().get("name"))
    },
    getActive: function () {
      return this.where({active: true})[0];
    }, 
    comparator: function (model) {
      return model.get("index")
    },
    loadDefaults: function () {
      var that = this
      _.each(DEFAULT_TEAS, function (tea) {
        that.create(tea)
      })
    }
  })

});
