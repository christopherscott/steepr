BREWING_CLASS = "brewing"

setAnimationDuration = (jqObj, seconds) ->
	[ "-webkit-", "-moz-", "-ms-", "" ].forEach (prefix) ->
	  jqObj.css "#{prefix}animation-duration", "#{seconds}s"

class exports.Steepr extends Backbone.View

	el: $("#steepr")

	events:
		"pageshow #steep" : "steep"

	initialize: ->
		console.log "steepr view started"

	steep: (e, data) ->
		steep_content = $("#steep .content")
		current = app.teas.getActive()
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
