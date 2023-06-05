'use strict';

// function declaration - hoisting
function myAdd(a,b){
  return a+b;
}

// function expression
let add = function(a,b){
  return a+b;
}

// Arrow Function

// explicit returns - because of the use of the curly brackets
let arrowAdd = (a,b) => {
  return a+b;
};

let arrowSquare = num => {
  return num*num
};

let noParam = () => {
  console.log('no params')
}

noParam();

// implicit return - no curlys - multi-line
let implicitReturn = (a,b) => (
  a+b
)

// implicit return - one liner
let square = num => num*num

console.log(arrowAdd(2,5));
console.log(implicitReturn(2,3));

// Classes

// Constructor
function Musician(artist, style){
  this.name = artist;
  this.musicStyle = style;
  this.isAmazing = true;
}

let tSwift = new Musician('Taylor Swift', 'Pop');


console.log(tSwift);


class MusicianClass {
  constructor(artist, style){
    this.name = artist;
    this.musicStyle = style;
    this.isAmazing = true;
  }

  awesome = () => {
    console.log('I am Amazing!');
  }
}

let bey = new MusicianClass('Beyonce', 'R&B');

console.log(bey);

class MusicGroup extends MusicianClass {
  constructor(artist, musicStyle, members){
    super(artist, musicStyle);
    this.members = members;
  }
}

let spiceGirls = new MusicGroup('Spice Girls', 'British Pop', ['Posh', 'Sporty', 'Scary', 'Baby', 'Ginger']);

console.log(spiceGirls);
