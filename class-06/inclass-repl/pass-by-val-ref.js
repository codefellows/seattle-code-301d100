'use strict';

let cat = 'cat';
let copyCat = cat;

// console.log('cat: ', cat);
// console.log('copyCat: ', copyCat);

copyCat = 'Ronald';

// console.log('cat: ', cat);
// console.log('copyCat: ', copyCat);

let pets = ['Ronald', 'Victor', 'Karl'];
let copyPets = pets;

// console.log('pets: ', pets);
// console.log('copyPets: ', copyPets);

copyPets.push('Fido');

console.log('pets: ', pets);
console.log('copyPets: ', copyPets);

// spread operator - ...

let realCopyOfPets = [...pets];
console.log('real copy of Pets: ', realCopyOfPets);
realCopyOfPets.push('Bob');
console.log('real copy of Pets: ', realCopyOfPets);


// console.log(pets === copyPets);
// console.log([] === []);

let str = 'hello';

console.log([...str]);
