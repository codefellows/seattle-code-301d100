'use strict';

/*
.forEach - Iterates over every element in array
         - Run: a callback function
         - Return: nothing

.map     - Iterate over every element in array
         - Run: a callback function
         - Return: new array - same length of original

.filter  - Iterate over every element in array
         - Run: a callback function
         - Return: shallow copy of the elements that pass            the test or []

.reduce  - Iterate over every element in array
         - Args: callback, initial value(first element in             the arr if no initial value is provided)
         - Run: callback is ran with 2 parameters
              accumulator -> initial value
              current value -> element in the array
              return our accumulator
         - Return: ANYTHING I WANT (single value)
*/

let people = [
  {name: 'Audrey', age: 37, instructor: true},
  {name: 'Rey', age: 24, instructor: true},
  {name: 'Cora', age: 4, instructor: false}
];

let initials = people.reduce((acc, curVal) => {
  acc = acc + curVal.name.charAt(0);
  return acc;
}, '');

console.log(initials);

let years = people.reduce((acc,curVal)=>{
  acc = acc + curVal.age;
  return acc;
}, 0);

console.log(years);

// people.reduce(()=>{},[])
let names = people.reduce((acc, curVal)=>{
  console.log('accumulator: ', acc);
  console.log('current value: ', curVal);
  acc.push(curVal.name);
  return acc;
}, []);

console.log(names);

let usingMap = people.map(person => person.name);
console.log('using map: ', usingMap);
