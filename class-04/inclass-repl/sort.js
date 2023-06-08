'use strict';

//  ***** SORT ********

/*
The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values
*/

/* The callback passed into sort is a COMPARISON FUNCTION - should always return a negative, zero, or positive value depending on the arguments.
*/

// **** SORTING NUMBERS ***
// function(a,b){a - b}
/* From w3schools:

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is NEGATIVE, a is sorted before b.
If the result is POSITIVE, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values.

Example:
The compare function compares all the values in the array, two values at a time (a, b).
let nums = [100, 40]
When comparing 100 and 40, the sort() method calls the compare function(100, 40).
The function calculates 100-40 (a - b), and since the result is positive (60),  the sort function will sort 40(b) as a value lower than 100(a).

a-b - ascending order
b-a - descending order 40-100 = -60 so a is sorted before b 100, 40
*/

let numbers = [4,2,45,10000,0,35];

numbers.sort((a,b) =>{
  return b-a;
});

console.log(numbers);

let ages = [
  {age: 12},
  {age: 3},
  {age: 200},
  {age: 24}
];


ages.sort((a,b) => {
  return a.age - b.age;
});

console.log(ages);

/*
 ***** STRINGS ******
 function compareFn(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
*/

const months = ['March', 'Jan','april', 'Feb', 'Dec'];

months.sort((a,b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
});

months.sort((a,b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);

console.log(months);
