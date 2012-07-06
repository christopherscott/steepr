{Teas} = require 'collections/Teas'

describe 'Teas', ->

  teas = null

  it 'Should begin empty', ->
    teas = new Teas()
    expect(teas.length).toEqual(0)

  describe 'Once defaults are loaded', ->

    beforeEach ->
      teas = new Teas()
      teas.loadDefaults()

    it 'There should be 5 models, and the active model should be green tea', ->
      expect(teas.length).toEqual(5)
      expect(teas.getActive().get('name')).toEqual('Green')

    it 'Should return green tea as active by default', ->
      expect(teas.getActive()).toEqual(teas.where(name: 'Green')[0])

    it 'Should return current time for active tea', ->
      expect(teas.getActiveTime()).toEqual(5)

    it 'Should give the last time if steeped more than the maximum times', ->
      active = teas.getActive()
      active.increment()
      expect(teas.getActiveTime()).toEqual(10)
      active.increment() for _ in [1,2,3,4,5,6,7]
      expect(teas.getActiveTime()).toEqual(20)

    it 'Allow activation of another model', ->
      green = teas.where(name: 'Green')[0]
      black = teas.where(name: 'Black')[0]
      expect(teas.getActive()).toEqual(green)
      teas.activate(black)
      expect(teas.getActive()).toEqual(black)

    it 'Should allow activation with convenience method', ->
      teas.incrementActive()
      expect(teas.getActive().get('round')).toEqual(1)

    it ''