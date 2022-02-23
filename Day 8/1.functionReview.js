'use strick';

// function decleration without agrument
function printMyName() {
  return 'Md. Mahabur Rahman Nadim';
}
console.log(printMyName());

// with argument
function printMyNameWithArgument(name) {
  return name;
}
console.log(printMyNameWithArgument('Md. Mahabur Rahman Nadim'));

// function behind the seen it's a object
console.log(typeof printMyName()); // result is string. But we can add property here like an objec
printMyNameWithArgument.age = 25;
// are we get the value when we call this function let's see
console.log(printMyNameWithArgument('Nadim')); // no we can't get it to get this we have to call like an object like below
console.log(printMyNameWithArgument.age);

// function expression
const functionExpression = function () {
  return 'This is function expression.Because all function basicaly return a value.We know that something which return a value are called expression ';
};
console.log(functionExpression());

// function declaration meaning have a name of this function. we can call this function before function defination or decleration

function calcAge1(brithYear) {
  return 2030 - brithYear;
}
const age1 = calcAge1(1998);

// Function expression meaning haveing no name it's store in a variable it's also called annumous function. We can't call the function before function decleration. This function most use in real world development then arrow or declaration function .
const calcAge2 = function (birthYear) {
  return 2030 - birthYear;
};
const age2 = calcAge2(1995);
console.log(age1, age2);

// function are produce value like string, boolian, number or expression. Since it's produce value we can sotre it on a variable any where we would like.Keep it mind and belived it
