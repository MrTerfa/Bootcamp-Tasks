// This is a test suite that with test cases for the fizz buzz tasks
'use strict';
var caller = require('../src/app.js');
describe("Fizz Buzz tests ", function() {
  it("should return `Fizz` for number divisible by 3", function() {
    expect(caller.fizzBuzz(3)).toBe('Fizz');
  });
  it("should return `Buzz` for number divisible by 5", function() {
    expect(caller.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(caller.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(caller.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(caller.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(caller.fizzBuzz(63)).toBe('Fizz');
  });
  it("should return `Buzz` for 100", function() {
    expect(caller.fizzBuzz(100)).toBe('Buzz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(caller.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(caller.fizzBuzz(101)).toBe(101);
  });

  it("should return `Undefined` if the function is undefined", function() {
    expect(caller.fizzBuzz()).toBeUndefined('The function is undefined');
  });
});
