define([
  "jquery",
  "use!backbone",
  "hogan",
  "text!app/templates/TeaTemplate.html"
  ], function ($, Backbone, hogan, TeaTemplate) {

  return Backbone.View.extend({
    tagName: "li",
    // switched from underscore templates to hogan
    // prefer the lighter-weight mustache syntax
    template: hogan.compile(TeaTemplate),
    // re-render with any model change (any attribute)
    initialize: function () {
      this.model.bind("change", this.render, this)
    },
    render: function () {
      $(this.el).html(this.template.render(this.model.toJSON()))
      return this
    }
  })

})