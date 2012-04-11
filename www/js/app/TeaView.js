define(["jquery", "use!backbone"], function ($, Backbone) {
  return Backbone.View.extend({
    tagName: "li",
    template: _.template($("#tea-type").html()),
    initialize: function () {
      this.model.bind("change", this.render, this)
    },
    render: function () {
      $(this.el).html(this.template(this.model.toJSON()))
      return this
    }
  })
})