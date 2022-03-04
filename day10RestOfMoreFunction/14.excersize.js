// excersize one
// count the only truthy value from an array
const array = [0, null, undefined, '', 2, 3];
let state = 0;
for ([item, value] of array.entries()) {
  if (!!value === true) {
    state++;
  }
  // console.log(value);
}
console.log(state);

// 2nd excersize

function sum(...arr) {
  let summation = 0;
  for (item of arr) {
    summation += item;
  }
  return summation;
}
const numArray = [23, 43, 234, 54, 234];
console.log(sum(...numArray));
