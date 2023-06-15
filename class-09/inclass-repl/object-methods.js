'use strict';

let beverlyHills = {
  dramaLevel: 1000000,
  wealth: 'insane amount',
  bestFranchise: true,
  queenBee: 'Kyle Richards',
  wishesSheWasOnIt: 'Audrey Patterson'
};


// *** Object.keys() ***
// return an array of all the object's keys

console.log(Object.keys(beverlyHills));

// *** Object.values() ***
// return an array of all the object's values
console.log(Object.values(beverlyHills));

// *** Object.entries() ***
// return an array of arrays key/value pair

console.log(Object.entries(beverlyHills));

for(let key in beverlyHills){
  console.log(beverlyHills[key]);
  console.log(key);
}
