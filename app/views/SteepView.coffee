SteepTemplate = require './templates/steep'

setAnimationDuration = (jqObj, seconds) ->
  [ '-webkit-', '-moz-', '-ms-', '' ].forEach (prefix) ->
    jqObj.css "#{prefix}animation-duration", "#{seconds}s"
    jqObj.css "#{prefix}transition-duration", "#{seconds}s"

class exports.SteepView extends Backbone.View

  el: $ '#steep'
  
  events: 
    "click a[data-rel=back]" : "waitAndClear"

  initialize: (options) ->
    home = options.home_view
    home.on 'steep', @render
    home.on 'steep', @startTimer, this

  render: =>
    @$('.tea').html @collection.active?.get 'name'

  waitAndClear: ->
    $(document).on 'pagechange', @clearTimer

  clearTimer: =>
    clearInterval @interval
    @$('#leaves').removeClass('brewing').find('#time').html ''
    $(document).off('pagechange')

  startTimer: =>
    secs = @collection.getActiveTime()
    time = @$ '#time'
    {seconds, minutes} = @parseTime secs

    @collection.incrementActive()

    setAnimationDuration $('#tea'), secs
    setAnimationDuration $('#mug'), secs

    @interval = interval = setInterval ->
      
      if seconds > 1
        seconds--
      else
        if minutes
          minutes--
          seconds = 59
        else
          time.html ''
          time.html 'done'
          return clearInterval interval

      # this is odd, not sure if i'm doing something wrong
      # but the timer won't update reliably unless i insert
      # the empty string before writing out, maybe it forces
      # a buffer flush somewhere; also below
      time.html ''
      time.html "#{minutes}:#{seconds}"
    , 1000

    @$('#leaves').addClass 'brewing'
    time.html "#{minutes}:#{seconds}"

  parseTime: (secs) ->
    seconds = secs % 60
    minutes = (secs - seconds) / 60
    {seconds, minutes}
