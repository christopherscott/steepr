{BrunchApplication} = require 'helpers'

{Teas} = require './collections/Teas'

{HomeView} = require './views/HomeView'
{AboutView} = require './views/AboutView'
{PreferencesView} = require './views/PreferencesView'
{SteepView} = require './views/SteepView'

class exports.Steepr extends BrunchApplication 
  # This callback would be executed on document ready event.
  # If you have a big application, perhaps it's a good idea to
  # group things by their type e.g. `@views = {}; @views.home = new HomeView`.
  initialize: ->

    @teas = new Teas

    @home_view = new HomeView collection: @teas
    @steep_view = new SteepView
      collection: @teas
      home_view: @home_view
      
    #@preferences_view = new PreferencesView
    #@about_view = new AboutView

    @fixFouc()

    console.log "application started"

    MBP.hideUrlBarOnLoad()

  fixFouc: ->
    # fix for FOUC, using jquery mobile
    doc = document.documentElement
    doc.className = doc.className.replace /\bno-js/, "js"

window.steepr = new exports.Steepr
