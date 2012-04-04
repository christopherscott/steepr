domain model:
-------------

- tea: 

Represents a tea type, like green, with steeping times. Users should be able to add more, or customize the times.

  - name: String
  - times: [Numbers]
  - picture/icon ???

- steeping:

A moment in time where the steeping stopwatch was started.

  - timestamp: Time/String
  - type: String
  - iteration: Number (# of times the current batch of tea has been steeped, incl this one)

- running count:

Once for each type of tea, kept to inform user, and warn about oversteeping.

  - count: Number
  - type: String


