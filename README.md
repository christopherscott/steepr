# steepr

## Mobile tea steeping stopwatch

Work-in-progress: [Steepr (on GitHub)](http://christopherscott.github.com/steepr/public) - no promises, might be broken, odd, unfinished or otherwise weird.

Jasmine tests: [http://christopherscott.github.com/steepr/public](http://christopherscott.github.com/steepr/public)

* * *

# Notes

## Data model

### tea: 

Represents a tea type, like green, with steeping times. Users should be able to add more, or customize the times.

  - name: String
  - times: [Numbers]
  - ideal temperature: Number
  - count (of steepings on given tea chunk): Number
  - picture/icon?

### steeping:

A moment in time where the steeping stopwatch was started.

  - timestamp: Time/String
  - type: String
  - iteration: Number (# of times the current batch of tea has been steeped, incl this one)

##tea times:

Taken from: [Hacker's Guide To Tea](http://worldoftea.org/hackers-guide-to-tea/)

| Tea Water | Temperature | 1st Steep | 2nd Steep | 3rd Steep | 4th Steep
|-----------|-------------|-----------|-----------|-----------|----------
|White      | 150-160ºF   | 1 min     | 1 min     | 1.5 min   | 1.75 min
|Green      | 170-180ºF   | 1 min     | 1 min     | 1.5 min   | 1.75 min
|Oolong     | 190-195ºF   | 30 sec    | 30 sec    | 45 sec    | 45 sec
|Black      | 212ºF       | 1 min     | 1 min     | 1.5 min   | 1.5 min
|Pu-erh     | 212ºF       | 30 sec    | 30 sec    | 45 sec    | 1 min

Should we add {red,herbal} tea?

* * *

*Note:* It did occur to me that all models share the 'type' string, and that at some point this could get out of sync (or otherwise be hard to maintain, with customizations). Looking into relationship library for backbone to abstract out the shared data into it's own model. Debating the usefulness and/or pragmatic issues thereof.

1. **Backbone Relational**: Get and set relations (one-to-one, one-to-many, many-to-one) for Backbone models
[https://github.com/PaulUithol/Backbone-relational](https://github.com/PaulUithol/Backbone-relational)

2. **Backbone.rel**: Backbone.Rel extends your Backbone models with a lightweight relationships manager.
[https://github.com/masylum/Backbone.Rel](https://github.com/masylum/Backbone.Rel)

I've since decided against adding relational models, mainly due to the applications minimal nature and the pragmatic need to keep the data simple.

* * *

Copyright (C) 2012 Christopher Scott Hernandez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.