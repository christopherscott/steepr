define [

	"jquery"
	"use!backbone"
	"hogan"
	"text!templates/TeaTemplate.html"

	], ($, Backbone, hogan, TeaTemplate) ->

	class TeaView extends Backbone.View

		tagName: "li"

		# switched from underscore templates to hogan
		# prefer the lighter-weight mustache syntax
		template: hogan.compile(TeaTemplate)

		# re-render with any model change (any attribute)
		initialize: ->
			@model.bind "change", @render, this

		render: ->
			$(@el).html @template.render(@model.toJSON())
			@