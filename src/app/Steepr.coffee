BREWING_CLASS = "brewing"

setAnimationDuration = (jqObj, seconds) ->
	[ "-webkit-", "-moz-", "-ms-", "" ].forEach (prefix) ->
	  jqObj.css "#{prefix}animation-duration", "#{seconds}s"

define [

	"jquery"
	"use!backbone"
	"Teas"
	"TeaListView"
	"../lib/swipe"
	"jquery_mobile"

	], ($, Backbone, Teas, TeaListView) ->

	class Steepr extends Backbone.View

		el: $("body")

		events:
			"pageshow #steep" : "steep"

		initialize: ->
			teas = new Teas()
			teaListView = new TeaListView collection: teas
			
			# DEBUG
			window.teas = teas
			window.teaListView = teaListView

			teas.fetch
				add: true
				success: (coll, resp) ->
					teas.loadDefaults()  unless coll.length
					teaListView.activateSwipe()
				error: (coll, resp) ->
					console.log "Fetch Error: #{arguments}"

		steep: (e, data) ->
			steep_content = $("#steep .content")
			current = teas.getActive()

			times = current.get "times"
			count = current.get "count"
			last = times.length - 1
			steeping_secs = times[(if count < last then count else last)]

			# todo
			$("#steep .type").text current.get "name"

			current.incr_count()
			setAnimationDuration steep_content, steeping_secs
			steep_content.addClass BREWING_CLASS

			# stopwatch updater
			# timer = new Timer()
			# interval = timer.set("total", steeping_secs)
			# console.log interval
			# timer.start()


			setTimeout (->
				steep_content.removeClass BREWING_CLASS
				# clearInterval interval
			), steeping_secs * 1000
