class Steepr.models.Tea extends Backbone.Model
  defaults: 
    name: "Earl Gray"
    times: [50, 60, 90, 90]
    temperature: 120
    count: 0

class Steepr.models.Steeping extends Backbone.Model
  defaults:
    type: "Earl Gray"
    timestamp: "Fri Apr 06 2012 09:04:03 GMT-0400 (EDT)"
    count: 0