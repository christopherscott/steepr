{BrunchApplication} = require 'helpers'
{MainRouter} = require 'routers/main_router'
{Steepr} = require 'views/Steepr'

class exports.Application extends BrunchApplication
  # This callback would be executed on document ready event.
  # If you have a big application, perhaps it's a good idea to
  # group things by their type e.g. `@views = {}; @views.home = new HomeView`.
  initialize: ->
    window.Steepr = new Steepr
    # fix for FOUC, using jquery mobile
    doc = document.documentElement
    doc.className = doc.className.replace /\bno-js/, "js"

    console.log "application started"
   
window.app = new exports.Application
