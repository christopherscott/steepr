define(["jquery", "use!backbone", "app/TeaView"], function ($, Backbone, TeaView) {
  return Backbone.View.extend({
    el: $("#tea-list"),
    initialize: function (options) { 
      console.log("init tea list view")
    },
    initialize: function () {
      this.collection.bind("add", this.addTeaView, this)
    },
    addTeaView: function (model) {
      console.log("adding Tea view")
      var view = new TeaView({model: model}),
          el   = view.render().el
      // stash reference to model as $.data, for use later
      $(el).data("model", model)
      this.$("ul").append(el)
    },
    activateSwipe: function () {
      var teas = this.collection
      // activate swiper
      window.swipe = new Swipe(this.el, {
        callback: function (e, index, element) {
          teas.activate($(element).data("model").get("name"))
        }
      })
    }

  })
})