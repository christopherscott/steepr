# Write your [mocha](http://visionmedia.github.com/mocha/) specs here.

tea_test = new Tea

describe "tea", ->
  it "should exist", ->
    expect(tea_test).not.to.be(undefined)
  it "should have default name of Earl Gray", ->
    expect(tea_test.get("name")).to.eql "Earl Gray"

# base case
describe "something", ->
  it "should get substring", ->
    expect("something".substr(4)).to.eql "thing"

describe "addition", -> 
  it "should work naturally", ->
    expect(1+1).to.eql 2

describe "lastly", ->
  it "should not be empty", ->
    expect({}).not.to.be(undefined)

describe "what", ->
  it "should not be undefined", ->
    expect([]).not.to.be(undefined)

describe "adding", ->
  it "should add", ->
    expect(2+2).to.eql 5

describe "else "