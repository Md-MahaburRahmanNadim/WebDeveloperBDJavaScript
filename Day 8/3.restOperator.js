'use strick';
/**
 It's also use to except ullimited argument. But it's more fixibale then the (arguments keyword). Here we can accept some argument via single variables and rest of argument we can catch via (...RestOf opertor). Rest operator store value in (array) formate like (arguments) keyword. 

 Note: But we cant add any variable after the rest operator via (comma (,)) or any way. Remember it.

 This operator not only use to contorl the aguments overflow. It's also use to distructurng value to catch via rest of operator
 */
function controllUlArgumentViaRestOperator(fname, lname, ...restOfArguments) {
  const fullName = fname + lname;
  console.log(fullName);
  console.log(restOfArguments);
  let names = '';
  for (hobis of restOfArguments) {
    names += hobis;
  }
  return names + fullName;
}

console.log(
  controllUlArgumentViaRestOperator(
    'Md. Mahabur Rahman',
    'Nadim',
    25,
    ' student',
    ' Want to be a web Developer',
    ' Like programing',
    ' loving thing is computer',
    ' i want to understad the computer mind '
  )
);
