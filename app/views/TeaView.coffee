TeaTemplate = require "./templates/tea"

class exports.TeaView extends Backbone.View

	tagName: "li"

	# switched from underscore templates to hogan
	# prefer the lighter-weight mustache syntax
	template: TeaTemplate

	# re-render with any model change (any attribute)
	initialize: ->
		@model.bind "change", @render, this

	render: ->
		$(@el).html @template @model.toJSON()
		@