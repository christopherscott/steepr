({
	appDir: "www/",
	useStrict: true,
	baseUrl: "js/app/",
	dir: "./www-build",
	locale: "en-us",
	optimize: "uglify",
	uglify: {
		toplevel: true,
		ascii_only: true,
		beautify: false
	},
	modules: [
		{
			name: "../main"
		}
	],
	paths: {
		text: "../lib/text",
		use: "../lib/use",
		jquery: "../lib/jquery-1.7.1",
		jquery_mobile: "../lib/jquery.mobile-1.0.1",
		modernizr: "../lib/modernizr-2.0.6.min",
		underscore: "../lib/underscore-min",
		backbone: "../lib/backbone-min",
		backbone_localStorage: "../lib/backbone_localStorage",
		hogan: "../lib/hogan-2.0.0.amd",
		Stopwatch: "../lib/Stopwatch"
	},
	use: {
		underscore: {
			attach: "_"
		},
		backbone: {
			deps: ["use!underscore", "jquery"],
			attach: "Backbone"
		},
		backbone_localStorage: {
			deps: ["use!backbone"]
		},
		modernizr: {
			attach: "modernizr"
		}
	}

})