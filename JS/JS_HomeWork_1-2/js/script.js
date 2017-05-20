//Function "POW" analogy
function pow(num, exp) {
  'use strict';
  var result = num;

  for (var i = 1; i < exp; i++) {
    result *= num;
  }

  return result;
}

var num = prompt('Enter the number: ', '');
console.log('Raise the number: ' + num);

var exp = prompt('Enter the power: ', '');
console.log('To the power of: ' + exp);

if (exp < 0) {
  alert('Power ' + exp + ' not supported, enter the integer power greater than 1!');
  console.log('Power ' + exp + ' not supported, enter the integer power greater than 1!');
} else if (exp == 0) {
  result = 1;
  alert ('The result of raising to zero power = ' + result);
  console.log('The result of raising to zero power = ' + result);
} else {
  alert( pow(num, exp) );
  console.log('The result of the exponentiation: ' + pow(num, exp));
}


// var arr = [];
// arr.length = 5;
//
// for (var i = 0; i < arr.length; i++) {
//   arr[i] = prompt('Please, enter your name', '');
//   console.log('Name: ' + arr[i]);
// }
//
// var userName = prompt('Please, enter your username', '');
// console.log('user name: ' + userName);
//
// for (i = 0; i < arr.length; i++) {
//   if (userName === arr[i]) {
//   var  searchResult = true;
//   }
// }
//
// if (searchResult) {
//   alert(userName + ', You have successfully entered!');
// } else {
//   alert( 'Wrong user name!');
// }
