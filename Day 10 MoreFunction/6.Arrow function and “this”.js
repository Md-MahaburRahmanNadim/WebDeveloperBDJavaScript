//We cant use this key word in arrow function. That's why we arent use arrow function that much
'use strick';

// arrow function inside a object

const thisInArrowFunction = {
  name: "Can' use this keyword in arrow function",
  arrow: price => {
    console.log(this);
    return this.name;
  },
};

console.log(thisInArrowFunction.arrow()); // it's return undefined because the arrow function has no this keyword
