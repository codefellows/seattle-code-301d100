'use strict';

/* regex stands for 'regular expression'

 *** METHODS ***

REGEX METHOD:
test method - regex.test(str); returns a boolean

STRING METHODS:
match method - opposite - str.match(regex); returns an array of matches OR null
replace method - str.replace(regex, the thing to replace);
*/

let str = 'hello goodbye javascript';
let regexPattern = /hello/g;

// TEST
console.log(regexPattern.test(str));

// Match
console.log(str.match(regexPattern));

// Replace
console.log(str.replace(regexPattern, 'HELLO'));

