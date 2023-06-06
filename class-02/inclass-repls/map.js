'use strict';

// ***** MAP *****
/*
map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

Much like forEach without having to initialize an empty array and push values into it
*/

let strArr = ['one', 'two', 'three'];

let newStrArr = strArr.map(element => {
  return element.toUpperCase();
});

console.log(newStrArr);

let implicitReturn = strArr.map(element => element.toUpperCase());

console.log(implicitReturn);

let people = [
  {name: 'Audrey', age: 37},
  {name: 'Cora', age: 4},
  {name: 'Ronald', age: 10}
];

let names = people.map(person => {
   return person.name;
})

console.log(names);

let ages = people.map(person => person.age);
console.log(ages);

// TERNARY - WTF?

// WHAT ? TRUE : FALSE

let boolVal = true;

// if(boolVal){
//   console.log('this was true')
// } else {
//   console.log('this was false')
// }

boolVal ? console.log('this was true') : console.log('this was false')
