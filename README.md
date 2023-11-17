# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @faelixx/lotide`

**Require it:**

`const _ = require('@faelixx/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * assertArraysEqual() : A function that compares two arrays it takes in and prints out a message telling us if they match or not.
  * assertEqual() : A function that compares two values it takes in and prints out a message telling us if they match or not.
  * assertObjectsEqual() : A function that compares two objects it takes in and prints out a message telling us if they match or not.
  * countLetters() : A function that takes in a string and returns an object that shows how many times each letter in the function argument shows up in the argument.
  * countOnly() : A  function that takes an array of values and compares it to an object that may or may not have the array items set to keys. In the object key properties, lies boolean value. If, the key property is set to 'true' it counts how many times the respective key is present in the input array and returns the count.
  * eqArrays() : A function that compares two arrays and returns true if arrays are equal, and false if not equal.
  * eqObjects() : A function that compares two objects and returns true if objects are equal, and false if not equal.
  * findKey() : A function that takes in an object and a callback. It scans the object and returns the FIRST key for which the callback returns a truthy value. If no key is found, returns undefined.
  *findKeyByValue() : A function that takes in an object and a key value property and returns the key value that is paired with the inputted key value property.
  * flatten() : A function that takes a nested array within an array and returns a flattened array in order respective to the passed array.
  * head() : A function that takes an array and returs the first element of the passed array.
  * letterPositions() : A function that takes a sentence string and pairs each letter of the string with the array index it appears in and returns it in an object.
  * map(): A function that takes an array as its first argument and a callback function as the second argument. The callback function is applied to each element in the passed array.
  * middle() : A function that returns the 'middle' element of an odd number array and the two 'middle' elements of an even number array that's greater than 2
  * tail() : A function that returns all elements of an array except for the the first element.
  * takeUntil() : A function that will return a slice of the array with elements taken from the beginning. It should keep going until the callback/predicate returns a truthy value. If there is no match in the function arguments, it returns an empty array.
  * without() : A function that takes two arrays. First an original and second, a list of items to remove from the original array.