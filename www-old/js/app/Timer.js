define(["jquery", "use!backbone"], function ($, Backbone) {

  return Backbone.Model.extend({
    initialize: function () {
      this.bind("change:total", this.setDivs, this)
    },
    setDivs: function (model, secs, options) {

      var mins = secs > 60 ? Math.floor(secs/60) : 0,
          secs = (secs - (60 * mins)) - 1,
          hundreths = 99

      this.set({
        mins: mins,
        secs: secs,
        hundreths: hundreths
      })

      // console.log(this.get("mins"), this.get("secs"), this.get("hundreths"))

    },

    start: function () {
      var h = this.get("hundreths"),
          s = this.get("secs"),
          m = this.get("mins");



      var interval = setInterval(function () {

        if (h>0) {
          h = h - 1
        } else {
          if (s>0) {
            s = s - 1;
            h = 99;
          } else {
            if (m>0) {
              m = m - 1;
              s = 59;
              h = 99;
            } else {
              // at the end
              // noop
            }
          }
        }

        // console.log(m,s,h)

      }, 10)

      return interval
    }
  })

})