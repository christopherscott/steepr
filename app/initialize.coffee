{BrunchApplication} = require 'helpers'
{Steepr} = require './views/Steepr'
{Teas} = require "./collections/Teas"
{TeaListView} = require "./views/TeaListView"
console.log TeaListView
class exports.Application extends BrunchApplication
	# This callback would be executed on document ready event.
	# If you have a big application, perhaps it's a good idea to
	# group things by their type e.g. `@views = {}; @views.home = new HomeView`.
	initialize: ->
		@steepr = new Steepr   	
		@teas = teas = new Teas
		@teaListView = teaListView = new TeaListView collection: @teas

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
