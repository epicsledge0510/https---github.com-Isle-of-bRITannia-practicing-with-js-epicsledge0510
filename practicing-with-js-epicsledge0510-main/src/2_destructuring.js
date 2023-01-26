import { WRITE_ME } from "./1_arrowFunctions.js";

/*
Say you represented points in the 2D plane as an object with `x` and `y` 
properties (so the point (7, 4) would be `{x: 7, y: 4}`). Write a function `getX` 
that takes any point object and, using destructuring, returns the point's `x` value.
    getX :: Point -> Number
*/

const getX = (point, number) => (
    number in point ? point[number]:0
    );

/*
Write a function `second` that accepts an array `someArray`, extracts the second 
element of `someArray` using destructuring, and returns that element.
    second :: Array -> Any
*/

const second = (arr) => (arr[1]);

/*
Say you represented a person as an object with a `name` property and a `location` 
property, where `location` is an `{x, y}` Point as above. For instance: 
    {name: "Travis", location: {x: 43, y: 78}} 
Write a function `getLocationY` that takes any Person object and, using destructuring, 
returns the `y` value of their location.
    getLocationY :: Person -> Number
*/

const getLocationY = ({location:{y}}) => y;


export {
    getX, second, getLocationY
};