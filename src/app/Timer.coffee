define [ "jquery", "use!backbone" ], ($, Backbone) ->
	class Timer extends Backbone.Model
		initialize: ->
			@bind "change:total", @setDivs, this

		setDivs: (model, secs, options) ->
			mins = (if secs > 60 then Math.floor(secs / 60) else 0)
			secs = (secs - (60 * mins)) - 1
			hundreths = 99
			@set
				mins: mins
				secs: secs
				hundreths: hundreths

		start: ->
			h = @get("hundreths")
			s = @get("secs")
			m = @get("mins")
			interval = setInterval(->
				if h > 0
					h = h - 1
				else
					if s > 0
						s = s - 1
						h = 99
					else
						if m > 0
							m = m - 1
							s = 59
							h = 99
						else
							# end of timer
			, 10)
			interval