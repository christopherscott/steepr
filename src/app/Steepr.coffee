define [

	"jquery"
	"use!backbone"
	"Teas"
	"TeaListView"
	"Timer"
	"../lib/swipe"
	"jquery_mobile"

	], ($, Backbone, Teas, TeaListView, Timer) ->

	setAnimationDuration = (jqObj, seconds) ->
		prefixes = [ "-webkit-", "-moz-", "-ms-", "" ]
		i = 0
		len = prefixes.length
		while i < len
			jqObj.css "#{prefixes[i]}animation-duration", "#{steeping_secs}s"
			i++
			
	class Steepr extends Backbone.View

		el: $("body")

		events:
			"pageshow #steep" : "steep"

		initialize: ->
			that = this
			teas = new Teas()
			teaListView = new TeaListView(collection: teas)
			window.teas = teas
			window.teaListView = teaListView
			teas.fetch
				add: true
				success: (coll, resp) ->
					teas.loadDefaults()  unless coll.length
					teaListView.activateSwipe()
				error: (coll, resp) ->
					console.log arguments

		steep: (e, data) ->
			steep = $("#steep .content")
			current_tea = teas.getActive()
			tea_type = current_tea.get("name")
			times_threshold = current_tea.get("times").length - 1
			times = current_tea.get("times")
			count = current_tea.get("count")
			steeping_secs = times[(if count < times_threshold then count else times_threshold)]

			current_tea.incr_count()

			# sets the css property "animation-duration" (and vendor prefixes)
			# so that the background color transition lasts as long as timer
			setAnimationDuration steep, steeping_secs
			steep.addClass "brewing"

			timer = new Timer()
			interval = timer.set("total", steeping_secs)

			console.log interval
			timer.start()
			$("#steep .type").text tea_type
			setTimeout (->
				steep.removeClass "brewing"
				clearInterval interval
			), steeping_secs * 1000
