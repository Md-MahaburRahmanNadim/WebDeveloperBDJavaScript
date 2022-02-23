'use strick';
/**
 Arguments keyword which store all of the arguments pass in a function in the formate of a array. 

 So how can we access those value?
 via any kind of loop but here we use (for of) loop let's see some example bellow
 */

function dontKnowHowManyArgumentUserPassInThisFunction() {
  console.log(arguments);
  // we know that the arguments is an array which contains all of argument which is pass in this function as a item
  for (values of arguments) {
    console.log(values); // this is so much fast right. But ES6 do this task more faxiable via (Rest of operators😋🤩)
  }
}

dontKnowHowManyArgumentUserPassInThisFunction(
  'Md. ',
  'Mahabur',
  'Rahman',
  'Nadim'
);
