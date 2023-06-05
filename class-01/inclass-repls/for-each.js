'use strict';

// ******* forEach *******
// SYNTAX: arr.forEach( ()=>{} )

// Array method that executes a provided function on each element in the array
// Returns nothing! if I want to capture those new elements, then I must use an empty array and push to it

let arr = [1,2,3,4,5];

for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

arr.forEach(element => {
  console.log(element);
});

arr.forEach(element => {
  console.log(element + 1);
});

let newArr = [];

arr.forEach(element => {
  newArr.push(element+1);
});

console.log(newArr);
