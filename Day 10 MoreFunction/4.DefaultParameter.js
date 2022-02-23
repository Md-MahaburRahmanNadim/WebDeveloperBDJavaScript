'use strick';
/**
 it's previend unexcepted error in code when user dont give that much argument in the function call
 */

//  ES6 defaultParameter fretures
function ES6DefaultParameter(
  productName = 'JsWithJonied',
  price = 100,
  discount = 0.1,
  shipping = 20,
  category = 'book'
) {
  return `JavaScript Best book name is ${productName}. Price of this book is ${
    price - price * discount
  } tk. Shipping cost ${shipping} tk. This is the ${category} category product`;
}
console.log(ES6DefaultParameter()); // those this function need 5 argument to run this function but we dont give a single parameter but still it's dont give any error because of (defaultParameters)

//   defaultParameter fretures below then ES6
function BelowES6DefaultParameter(
  productName,
  price,
  discount,
  shipping,
  category
) {
  // To set default parameter we have to use (OR) short cuicuit consept
  productName = productName || 'JsWithJonid';
  price = price || 200;
  discount = discount || 0.2;
  return `JavaScript Best book name is ${productName}. Price of this book is ${
    price - price * discount
  } tk. Shipping cost ${shipping} tk. This is the ${category} category product`;
}

// if we want to runn this function we have to specified all of the argument. Here no change to skeep any argument missing
console.log(BelowES6DefaultParameter(null, null, null, 20, 'book')); // this is a strik if we dont want to overright the default value (we have to use falsy value here like (null,undefined,0,''))
