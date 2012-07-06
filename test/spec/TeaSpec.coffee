{Tea} = require 'models/Tea'

describe "Tea", ->

  tea = null

  beforeEach ->
    tea = new Tea()

  it 'Should have reasonable defaults', ->
    defaults = [ 'name', 'temperature', 'times', 'total', 'round', 'batch', 'active' ]
    expect(tea.get(attr)).toBeDefined() for attr in defaults

  it 'Should increment total and round', ->
    tea.increment()
    expect(tea.get('total')).toEqual(1)
    expect(tea.get('round')).toEqual(1)

  it 'Should report if tea is at limit', ->
    tea.increment() for _ in [1,2,3,4]
    expect(tea.atLimit()).toBeTruthy()

  it 'Should report if tea is over limit', ->
    tea.increment() for _ in [1,2,3,4,5]
    expect(tea.overLimit()).toBeTruthy()

  it 'Should give current time', ->
    expect(tea.getCurrentTime()).toEqual(50)
    tea.increment() for _ in [1,2,3]
    expect(tea.getCurrentTime()).toEqual(90)

  it 'Should allow for toggling of active attribute', ->
    expect(tea.get('active')).toBeFalsy()
    tea.toggleActive()
    expect(tea.get('active')).toBeTruthy()
    tea.toggleActive()
    expect(tea.get('active')).toBeFalsy()
