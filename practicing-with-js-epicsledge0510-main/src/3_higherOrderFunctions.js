import { WRITE_ME } from "./1_arrowFunctions.js";

/*
Write a function `constant` that takes any value `returnMe` and returns a 
function that will accept any value `ignoreMe`, but returns the value `returnMe`. 
    (if you want a shorter name for this function, `k` is appropriate).
*You may use curly braces for this function.*
    constant :: Any -> Any -> Any
*/

const constant = (returnMe) => ignoreMe => returnMe;

//I'm not entirely sure how to do this, this is how i understood it from the reading

/*
Use your function `constant` to write a function `me` that accepts any value, 
but just returns your own name.
    me :: Any -> String
*/

const me = (anyvalue) => constant("andrew")(anyvalue);

/*
Write an arrow function `makeAdder` that accepts a number `a`, and returns 
a function accepting a number `b` which returns the sum of `a` and `b`.
*You may use curly braces for this function.*
    makeAdder :: Number -> Number -> Number
*/

const makeAdder = (a) => (b) => b + a;

/*
Write an arrow function `makeSubtractor` that accepts a number `a`, and 
returns a function accepting a number `b` which returns `b - a`.
*You may **not** use curly braces for this function.*
    makeSubtractor :: Number -> Number -> Number
*/

const makeSubtractor = (a) => (b) => b - a;

/*
Write two arrow functions, `GT` and `LT`. Both will take a single 
number `a` as a parameter, and return a function accepting a single 
number `b`. 
The function `GT` should check if `b` is greater than `a`.
The function `LT` should check if `b` is less than `a`.
 
*You **must** use curly braces for `GT`, but **may not** use curly braces for `LT`*.
    GT :: Number -> Number -> Boolean
    LT :: Number -> Number -> Boolean
*/
const GT = (a) => (b) => b > a;

const LT = (a) => 
    (b) => b < a;

;

export {
    constant,
    me,
    makeAdder,
    makeSubtractor,
    GT,
    LT
};