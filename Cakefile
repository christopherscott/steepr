{spawn, exec} = require "child_process"

task "optimize", "Run the RequireJS optimizer and output to 'www-build'", ->
	# exec "r.js -o build.js"
	coffee = spawn "r.js", ["-o", "build.js"]
	coffee.stdout.on 'data', (data) -> console.log data.toString().trim()

task "compile", "Compile coffee-script -> js, from src/ to www/js/ recursively", ->
	coffee = spawn "coffee", ["-c", "-o", "www/js/", "src/"]
	coffee.stdout.on 'data', (data) -> console.log data.toString().trim()
	# exec "coffee -o www/js/ -c src/"

task 'watch', 'continually build with --watch', ->
	coffee = spawn 'coffee', ['-cw', '-o', 'www/js/', 'src']
	coffee.stdout.on 'data', (data) -> console.log data.toString().trim()