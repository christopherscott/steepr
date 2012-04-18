{BrunchApplication} = require 'helpers'
{Home_view} = require './views/Home_view'
{Teas} = require "./collections/Teas"
{TeaList_view} = require "./views/TeaList_view"

class exports.Application extends BrunchApplication
	# This callback would be executed on document ready event.
	# If you have a big application, perhaps it's a good idea to
	# group things by their type e.g. `@views = {}; @views.home = new HomeView`.
	initialize: ->
		@home_view = new Home_view
		@teas = teas = new Teas
		@teaList_view = teaListView = new TeaList_view collection: @teas

		@teas.fetch
			add: true
			success: (coll, resp) ->
				teas.loadDefaults() unless coll.length
				teaListView.activateSwipe()
			error: (coll, resp) ->
				console.log "Fetch Error: #{arguments}"

		# fix for FOUC, using jquery mobile
		doc = document.documentElement
		doc.className = doc.className.replace /\bno-js/, "js"

		console.log "application started"

window.app = new exports.Application
