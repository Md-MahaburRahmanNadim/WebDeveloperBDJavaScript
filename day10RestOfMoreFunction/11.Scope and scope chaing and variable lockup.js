'use strick';
/**
Scoping asks the question "Where do variables live? " or Where can we access a certain variable, and where not?

There are 3 types of scope in javascript: the global scope,scopes defined by functions, and scopes defined by blocks;

Only let and const variables are block-scoped. Variables declared with var end up in the closest function scope.

In js, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written

Every scope always has access to all the variables from all its outer scopes. This s the scope chain!

When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. This is called variable lookup

The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope: meaning the sibling scope

the scope chain in a certain scope is equal to adding together all the variable environments of the all parent scopes

the scope chain has nothing to do wit the order in which function were called. It does not affect the scope chain at all!
 */
