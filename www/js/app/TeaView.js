define([
  "jquery",
  "use!backbone",
  "hogan",
  "text!app/templates/TeaTemplate.html"
  ], function ($, Backbone, hogan, teatmpl) {

  return Backbone.View.extend({

    tagName: "li",

    template: hogan.compile(teatmpl),

    initialize: function () {
      this.model.bind("change", this.render, this)
    },

    render: function () {
      $(this.el).html(this.template.render(this.model.toJSON()))
      return this
    }
    
  })

})