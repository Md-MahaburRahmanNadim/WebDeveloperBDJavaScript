/**
 Hoisting: Makes some types of variables accessible/usable in the code before they are actually decleared. "variables lifted to the top of their scope"

 Before excution, code is scanned for variable declarations, and for each variable, a new property is create in the variable environment object.
      name                      hoisted?        initial value         scope
function declarations              yes              Actual fn         Block(in strick mode)

var variables                     yes             undefined            function(fn) 


let and const variables           no            <uninitialize> TDZ          block      


function expression and arrows            Depends if using var or let/const 


 */
