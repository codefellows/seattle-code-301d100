'use strict';

// ******* FILTER ***********

/*
filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

Returns an array with the elements that pass the test in the callback function. If no elements pass the test, then an empty array is returned.
*/

let numbers = [1,2,3,4,5,6,7,8,9,10];

let lessThanSix = numbers.filter(num => {
  return num < 6;
});

console.log(lessThanSix);

let animals = ['cat', 'dog', 'mouse'];

let filteredAnimals = animals.filter(animal => {
  return animal.charAt(1) === 'o';
});

console.log(filteredAnimals);

let people = [
  {name: 'Audrey', age: 37},
  {name: 'Cora', age: 4},
  {name: 'Bob', age: 22}
];

let cora = people.filter(person => {
  return person.name === 'Cora';
});
console.log(cora);
console.log(people[1]);

let oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);
