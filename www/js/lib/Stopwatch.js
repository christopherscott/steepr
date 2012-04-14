var Stopwatch = function (seconds) {

  var mins = secs > 60 ? Math.floor(secs/60) : 0,
          secs = (secs - (60 * mins)) - 1,
          hundreths = 99

  this.total = seconds

  

}

Stopwatch.prototype = {

  constructor: "Stopwatch",



}