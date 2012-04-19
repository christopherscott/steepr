class exports.SteepView extends Backbone.View

	el: $ "#steep"

	initialize: (options) ->
		console.log "steep view initializing"
		console.log options
		console.log @model
		@model.on "change", @render, this

	render: =>
		console.log "steepView rendering"
		@$("#current-tea").html @model.get("current").get "name"
