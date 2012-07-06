{spawn, exec} = require "child_process"

task "build", "Compile coffee-script -> js, from src/ to www/js/ recursively", ->
	coffee = spawn "coffee", ["-c", "-o", "www/js/", "src/"]
	coffee.stdout.on 'data', (data) -> console.log data.toString().trim()
	# run through less

task 'watch', 'continually build with --watch', ->
	coffee = spawn 'coffee', ['-cw', '-o', 'www/js/', 'src']
	coffee.stdout.on 'data', (data) -> console.log data.toString().trim()


task "optimize", "Run the RequireJS optimizer and output to 'www-build'", ->
	rjs = spawn "r.js", ["-o", "build.js"]
	rjs.stdout.on 'data', (data) -> console.log data.toString().trim()
	# strip comments from www/index.html
