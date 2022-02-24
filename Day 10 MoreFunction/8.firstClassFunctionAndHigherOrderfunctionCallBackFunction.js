'use strick';
/**
first class function crectritis
1) It's a value it's can sotre in variable like (arrow,expression function)
2)It return a function. This kind of function are called callback function. Call back function also called heigher order function 
3)It can recive function as a parameter.This kind of function also called call back function 
 */

const restaurant = {
  name: 'Nadim Fry',
  location: 'Satpika,Shibpur,Narsingdi,Daka',
  Categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // here the customer is order something by using manu index number
  },
};

const orderMI = restaurant.order(1, 2);
console.log(orderMI);
// const orderMI = restaurant.order;
// console.log(orderMI(0,1)); you sotre like this because here this keyword present. But if this keyword is not present in order method then you can sotre it LIKE BELOW

// 1. sotre in a variable
// DRY code
const iterateArray = function (array) {
  let it = '';
  for (Items of array) {
    it += Items + ' ';
  }
  return it;
};

function resotrentManu(...Item) {
  return iterateArray(Item);
}
const fnWithoutCalling = resotrentManu;
console.log(fnWithoutCalling(...restaurant.mainMenu));

// easy way with fn expression
const printItems = (...items) => {
  return iterateArray(items);
};
console.log(printItems(...restaurant.starterMenu));

//  returning function

function returnFnStoreValue() {
  return printItems;
}
console.log(returnFnStoreValue()(...restaurant.Categories));

// passing function as a parameter

const passPrintItemsFn = function (printFn) {
  console.log(printFn(...restaurant.starterMenu));
  return printFn;
};
// console.log(passPrintItemsFn(printItems(...restaurant.mainMenu)));// if we call here then it's inter as a value not a function. So here calling is not our parpus our popust is pass a function
console.log(passPrintItemsFn(printItems));
const callBySoring = passPrintItemsFn(printItems);
console.log(callBySoring('Md. Mahabur Rahman Nadim', 2, 4, 2, 'hasan'));
