'use strick';
/**
 Here we review function decleration and function expression. And learn about (arrow function )

 */
// this funcion also sotre in a variable but it's no name also no funcion key word it's has a (=>) arrow

/* single line of statment arrow funcion. here we do not use {} for function body and we don't use the return keyword it's self work like return. But if we use multiple line of code and parameter then we have to use {} and return keyword to reuse the value again and again */

const calcAge3 = birthYear => 2050 - birthYear;
const age = calcAge3(1998);
console.log(age);

// multiple parameter, and statement function.If we have multiple parameter then we have to use (). But in single parameter we don't have to use this

const calcAge4 = (birthYear, firstName) => {
  const age = 2060 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(calcAge4(1998, 'Nadim'));
console.log(calcAge4(1990, 'Hasan'));
// This function are not use that much because it's not get the "This keyword" but the function expression and decleration get the "This keyword"
