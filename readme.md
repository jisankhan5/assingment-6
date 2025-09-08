<!-- 1st Question -->
What is the difference between var, let, and const?

Ans:
var → Function-scoped, can be re-declared and updated, hoisted with undefined.
let → Block-scoped, can be updated but not re-declared in the same scope, hoisted but not initialized.
const → Block-scoped, cannot be re-assigned (but objects/arrays can be mutated), hoisted but not initialized.

<!-- 2nd Question -->
What is the difference between map(), forEach(), and filter()?

Ans:
map() → Returns a new array with transformed elements.
forEach() → Executes a function for each element, does not return a new array.
filter() → Returns a new array with elements that pass the given condition.

<!-- 3rd Question -->
What are arrow functions in ES6?

Ans:
Arrow functions are a shorter way to write functions using =>, do not have their own this, and cannot be used as constructors.

<!-- 4th Question -->
How does destructuring assignment work in ES6?

Ans:
Destructuring assignment extracts values from arrays or objects and assigns them to variables in a single statement.

<!-- 5th Question -->
Explain template literals in ES6. How are they different from string concatenation?

Ans:
Template literals use backticks (`) to create strings and allow:
Interpolation with ${expression}
Multiline strings without \n
They are different from string concatenation because they are more readable and allow embedding expressions directly.
