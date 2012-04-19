{BrunchApplication} = require 'helpers'

{Teas} = require "./collections/Teas"

{HomeView} = require './views/HomeView'
{TeaListView} = require "./views/TeaListView"
{AboutView} = require './views/AboutView'
{PreferencesView} = require './views/PreferencesView'
{SteepView} = require './views/SteepView'

class exports.Application extends BrunchApplication 
  # This callback would be executed on document ready event.
  # If you have a big application, perhaps it's a good idea to
  # group things by their type e.g. `@views = {}; @views.home = new HomeView`.
  initialize: ->
    @home_view = new HomeView
    @steep_view = new SteepView
    @preferences_view = new PreferencesView
    @about_view = new AboutView

    @teas = teas = new Teas
    @teaList_view = teaListView = new TeaListView collection: @teas
    @teas.fetch
      add: true
      success: (coll, resp) ->
        teas.loadDefaults() unless coll.length
        teaListView.activateSwipe()
      error: (coll, resp) ->
        console.log "Fetch Error: #{arguments}"

    @fixFouc()

    console.log "application started"

  fixFouc: ->
    # fix for FOUC, using jquery mobile
    doc = document.documentElement
    doc.className = doc.className.replace /\bno-js/, "js"

window.app = new exports.Application
