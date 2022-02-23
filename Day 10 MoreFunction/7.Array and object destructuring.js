'use strick';
/**
 * Array Destructuring: It's basically a way of unpacking values from an array or an object into separate variables
 * Destructuring is to break a complex data structure down into a smaler data structure like a variable
 */
const restaurant = {
  name: 'Nadim Fry',
  location: 'Satpika,Shibpur,Narsingdi,Daka',
  Categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // here the customer is order something by using manu index number
  },
};
/**
 splice method is used remove cirtain element form an array by using index 
 slice method is used to devided
 */

const arr = [23, 45, 56];
// if we want to save those item then we have to declear 3 variable and then we can store it
const a = 23;
const b = 45;
const c = 56;
console.log(a, b, c);
//  but we can do this only one line by using array destructuring
const [x, y, z] = arr; // it's vary simple and vary fast
console.log(x, y, z);
// by doing this destructuring we aren't change the array structure. the main array will be same as like priviours one
console.log(arr);

// we can also destructuring array inside of an object like below
let [main, secondary] = restaurant.Categories;
console.log(main, secondary);

// soaping variable in old faction
const tem = main;
main = secondary;
secondary = tem;
console.log(main, secondary);
// soaping variable by using array destructuring
[secondary, main] = [main, secondary]; // here we put the value in a array which we want to soup then just reversely destructuring the array. It's vary simple then the manual process

console.log(secondary, main);

//  reciving two return value from a function or a method. By using destructuring method. and store those value in seperat variable. We can't return multiple value from a funtion without help of array.But when we sand an array as output then have problem to seperate it here it's very easy to seperate or destructure a value
console.log(restaurant.order(1, 2));
const [starter, mainCourse] = restaurant.order(1, 2);
console.log(starter, mainCourse);

// nested array destructuring
const nested = [2, 4, [5, 6]];
// const [i,,j] = nested;// if don't want catch any value in an array then we have to put an empty (hole)in this index
// console.log(i,j);
let [i, , [j, k]] = nested;
console.log(i, j, k);

// default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // if we dont give any defoult value then if this item is not there then it's give us undefined value but if we put the default value then it give us the defold value insted of undefined value if this item is not in array.It's use full when we recive DATA FORM API becuase we dont know that this data exit or not

/**
 * Object Destructuring
 */
const restaurant = {
  name: 'Nadim Fry',
  location: 'Satpika,Shibpur,Narsingdi,Daka',
  Categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // here the customer is order something by using manu index number
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
//function parameter or argument handleing
restaurant.orderDelivery({
  time: '22:40',
  address: 'Narsingdi, Dhaka',
  mainIndex: 2,
  starterIndex: 2,
});
// another
restaurant.orderDelivery({
  address: 'Shibpur, Narsingdi',
});
// stret forward dest. or save induvusial value into a variable
const { name, openingHours, Categories } = restaurant;
console.log(name, openingHours, Categories);

// destructuring and change the defualt key to new name/ variable name (key:newName)

const {
  name: restaurantName,
  openingHours: hours,
  Categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// setup default value
const { menu = {}, starterMenu: starters = {} } = restaurant;
console.log(menu, starters); // here restaurant object menu is not there so we get the defualt value insted of undefined. In ever resived object we have to specifi the defualt value because we dont know are the value come or not because it's thred parety API

// Mutating variables
let a = 111;
let b = 134;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // here if we dont give first brecket then we get an arror because we mutating the variables for that reason we have to create a expression area
console.log(a, b);

// Nested objects Destructuring
const { fri } = openingHours;
console.log(fri); // here we get the object for get single value we do more diper things
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// another here we change the default name of property because the same variable exsite upper postion so we can get an error or change the value
const {
  sat: { open: opens, close: closes },
} = openingHours;
console.log(opens, closes);
