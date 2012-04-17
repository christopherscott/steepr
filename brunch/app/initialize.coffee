{BrunchApplication} = require 'helpers'
{MainRouter} = require 'routers/main_router'
{Steepr} = require 'views/Steepr'

class exports.Application extends BrunchApplication
  # This callback would be executed on document ready event.
  # If you have a big application, perhaps it's a good idea to
  # group things by their type e.g. `@views = {}; @views.home = new HomeView`.
  initialize: ->
    window.Steepr = new Steepr
    console.log "application should've started"
    ((H) -> H.className = H.className.replace(/\bno-js\b/, "js")) document.documentElement
   
window.app = new exports.Application
