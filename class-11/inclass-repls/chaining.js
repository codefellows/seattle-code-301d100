'use strict';

let str = 'bananas';

let result = str.split('');
console.log(result);

let result2 = result.join('-');
console.log(result2);

let result3 = result2.toUpperCase();
console.log(result3);

let chainedResults = str.split('')
  .join('-')
  .toUpperCase();
console.log(chainedResults);

let people = [
  {name: 'Audrey', instructor: true},
  {name: 'Cora', instructor: false},
  {name: 'Rey', instructor: true},
  {name: 'Cameron', instructor: false}
];

let nonInstructors = people.filter(person => !person.instructor)
  .map(nonInstructor => nonInstructor.name);

console.log(nonInstructors);
