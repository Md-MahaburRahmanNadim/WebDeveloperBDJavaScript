/*Rest operator :
1. it's can create a modified array or object of perent object or array
2. it's use to controll multiple argument passing
3. it's use left side of an (=) assignment sign

Spread operator: 
1. it's use concate multiple Referance type into one referance type.
2.it's breaked the array data structure and create flat data coloction seperated by (comma(,))
3. We can pass an hole array as a argument by using spreed operator
*/

function passArrOrObj() {
  console.log();
}

const obje = { name: 'Nadim', age: 25, class: 'Textile Engineer' };
const friendsName = ['Nadim', 'Ahasan', 'Ifty', 'Sium'];
// passArrOrObj(...obje);
// console.log(...obje);
console.log(...friendsName);

// const newObj = [...obje]
