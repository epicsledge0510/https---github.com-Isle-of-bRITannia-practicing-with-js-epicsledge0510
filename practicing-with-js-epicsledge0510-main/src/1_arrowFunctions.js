const WRITE_ME = {};

/*
Write an arrow function `identity` that takes any value and simply returns it.

    identity :: Any -> Any
*/

const identity = (val) => val;

/*
Write an arrow function `add` that takes two numbers and adds them, returning the result.

    add :: Number -> Number -> Number
*/

const add = (a,b) => a + b;

/*
Write an arrow function `sub` that takes two numbers and subtracts the first 
from the second, returning the result.

    sub :: Number -> Number -> Number
*/

const sub = (a,b) => a - b;

/*
Write an arrow function `get` that takes three parameters: an object `obj`, 
a string `prop`, and a value `defaultVal`. Your function `get` should return 
whatever value is in `obj` at the property specified by `prop`, or `defaultVal` 
if that property does not exist in `obj`.

    get :: Object -> String -> Any -> Any
*/

const get = (obj, prop, defaultVal) => (
    prop in obj ? obj[prop]:defaultVal
    );
    
export {
    WRITE_ME,
    identity, add, sub, get
};
