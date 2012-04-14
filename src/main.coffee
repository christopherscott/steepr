require.config
	paths:
		text: "../lib/text"
		use: "../lib/use"
		jquery: "../lib/jquery-1.7.1"
		jquery_mobile: "../lib/jquery.mobile-1.0.1"
		modernizr: "../lib/modernizr-2.0.6.min"
		underscore: "../lib/underscore-min"
		backbone: "../lib/backbone-min"
		backbone_localStorage: "../lib/backbone_localStorage"
		hogan: "../lib/hogan-2.0.0.amd"
		Stopwatch: "../lib/Stopwatch"

	baseUrl: "js/app/"

	use:
		underscore:
			attach: "_"

		backbone:
			deps: [ "use!underscore", "jquery" ]
			attach: "Backbone"

		backbone_localStorage:
			deps: [ "use!backbone" ]
			attach: "Store"

		modernizr:
			attach: "modernizr"

require [ "jquery", "Steepr", "Stopwatch" ], ($, Steepr) ->
	$ ->
		new Steepr()

		console.log "application started"
		
		# fixes flash of unstyled content		
		((H) ->
			H.className = H.className.replace(/\bno-js\b/, "js")
		) document.documentElement

