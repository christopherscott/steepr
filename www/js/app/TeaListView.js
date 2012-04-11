define(["jquery", "use!backbone", "app/TeaView"], function ($, Backbone, TeaView) {

  return Backbone.View.extend({

    el: $("#tea-list"),
    // subscribe to 'add' event for tea collection
    initialize: function () {
      this.collection.bind("add", this.addTeaView, this)
    },
    // each time a model is added, we add a corresponding view
    // we also put a reference to the underlying model in element data
    // so that in 'activateSwipe' we have access to model's name prop
    addTeaView: function (model) {
      var view = new TeaView({model: model}),
          el   = view.render().el
      // stash reference to model
      $(el).data("model", model)
      this.$("ul").append(el)
    },
    // this init logic could've been put in initialize BUT
    // it requires all the child views to be created and rendered
    // in order to measure for the size of the swiper,
    // so instead it's called on this view explicity by the app
    // after the Teas collection is populated and views have been
    // appended to the DOM
    activateSwipe: function () {
      var teas = this.collection
      // activate swipe widget
      // https://github.com/bradbirdsall/Swipe
      window.swipe = new Swipe(this.el, {
        callback: function (e, index, element) {
          // we delegate activation of teas to the collection
          // that way the collection can handle logic to ensure
          // only one tea is active at once, and to deactivate
          // other if necessary
          teas.activate($(element).data("model").get("name"))
        }
      })
    }

  })

})