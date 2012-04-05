# Notes

## domain model:

### tea: 

Represents a tea type, like green, with steeping times. Users should be able to add more, or customize the times.

  - name: String
  - times: [Numbers]
  - ideal temperature: Number
  - picture/icon?

### steeping:

A moment in time where the steeping stopwatch was started.

  - timestamp: Time/String
  - type: String
  - iteration: Number (# of times the current batch of tea has been steeped, incl this one)

### running count:

Once for each type of tea, kept to inform user, and warn about oversteeping.

  - count: Number
  - type: String


##tea times:

Taken from: http://worldoftea.org/hackers-guide-to-tea/

| Tea Water | Temperature | 1st Steep | 2nd Steep | 3rd Steep | 4th Steep
|-----------|-------------|-----------|-----------|-----------|----------
|White      | 150-160ºF   | 1 min     | 1 min     | 1.5 min   | 1.75 min
|Green      | 170-180ºF   | 1 min     | 1 min     | 1.5 min   | 1.75 min
|Oolong     | 190-195ºF   | 30 sec    | 30 sec    | 45 sec    | 45 sec
|Black      | 212ºF       | 1 min     | 1 min     | 1.5 min   | 1.5 min
|Pu-erh     | 212ºF       | 30 sec    | 30 sec    | 45 sec    | 1 min

Should we add {red,herbal} tea?



