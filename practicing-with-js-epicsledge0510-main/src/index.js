import { identity, add, sub, get } from './1_arrowFunctions.js';
import { getX, second, getLocationY } from './2_destructuring.js';
import { constant, me, makeAdder, makeSubtractor, GT, LT } from './3_higherOrderFunctions.js';

console.log('Testing...');

test('identity should return the same value', (assert) => {
  const someVal = 3;
  const result = identity(someVal);

  assert(result === someVal);
});

test('identity should return the same obj by reference', (assert) => {
  const someObj = {x: 1};
  const result = identity(someObj);

  assert(result === someObj);
  assert(result !== {x: 1});
});

test('identity should return undefined if nothing is passed in', (assert) => {
  const result = identity();

  // This is wrong and exists to demonstrate a failing test. 
  // Make sure to fix it.
  assert(result === undefined);
});
test('add should return a sum of args', (assert) => {
  const args1 = 9;
  const args2 = 5;
  const result = add(args1, args2)

  // This is wrong and exists to demonstrate a failing test. 
  // Make sure to fix it.
  assert(result === 14);
});
test('sub should return the difference of args', (assert) => {
  const args1 = 9;
  const args2 = 5;
  const result = sub(args1, args2)

  // This is wrong and exists to demonstrate a failing test. 
  // Make sure to fix it.
  assert(result === 4);
});
test('get should return a property of an object', (assert) => {
  const objArgs = {
    name:"Andrew",
    defaultVal:"bad"
  }

  // This is wrong and exists to demonstrate a failing test. 
  // Make sure to fix it.
  assert(get(objArgs, 'name', 'bad') === "Andrew");
});
test('getX should return the x propety', (assert) => {
  const point = {
    x:7,
    y:4
  }

  // This is wrong and exists to demonstrate a failing test. 
  // Make sure to fix it.
  assert(getX(point, 'x') === 7);
});
test('second should get the second piece of data in an array', (assert) => {
  const arr = [1, 2, 3, 4, 5]

  // This is wrong and exists to demonstrate a failing test. 
  // Make sure to fix it.
  assert(second(arr) === 2);
});
test('getLocationY should return the y location', (assert) => {
  const person = {name: "Zach",
  location: {x:4, y:6}
  }

  // This is wrong and exists to demonstrate a failing test. 
  // Make sure to fix it.
  assert(getLocationY(person) === 6);
});

test('constant should return a constant value', (assert) => {


  // This is wrong and exists to demonstrate a failing test. 
  // Make sure to fix it.
  assert(constant("return value")("ignore me") === "return value");
});
test('me should return my name', (assert) => {


  // This is wrong and exists to demonstrate a failing test. 
  // Make sure to fix it.
  assert(me("ignore me") === "andrew");
});
test('makeAdder should add to the number that was input', (assert) => {


  // This is wrong and exists to demonstrate a failing test. 
  // Make sure to fix it.
  assert(makeAdder(3)(2) === 5);
});
test('makeSubtractor should subtract from the number that was input', (assert) => {


  // This is wrong and exists to demonstrate a failing test. 
  // Make sure to fix it.
  assert(makeSubtractor(3)(2) === -1);
});
test('gt should compare if the input is larger', (assert) => {


  // This is wrong and exists to demonstrate a failing test. 
  // Make sure to fix it.
  assert(GT(2)(3) === true);
});
test('lt should compare if the input is smaller', (assert) => {


  // This is wrong and exists to demonstrate a failing test. 
  // Make sure to fix it.
  assert(LT(3)(2) === true);
});


/*
  Below is the minimal machinery necessary to make these tests work.
  Feel free to peruse, but you need not grok it unless it becomes
  clear I've made an error in the code and it needs repairing.
*/
function test (message, testCaseFunc) {
  const passMarker = '✔😊',
        failmarker = '❌👿';

  let results = [];

  const assert = (boolAssertion) => {
    if (boolAssertion) {
      results.push(true);
    } else {
      results.push(false);
    }
  };

  testCaseFunc(assert);

  if (results.length === 0) {
    throw new Error(`No assertion made in test case: "${message}"`);
  }

  if (results.length === 1) {
    console.log(`${results[0] ? passMarker : failmarker} ${message}`)
  }

  if (results.length > 1) {
    const allPassed = results.every(passed => passed);

    console.log(`${allPassed ? passMarker : failmarker} ${message}:`);
    results.forEach(assertionResult => {
      console.log(` - ${allPassed ? passMarker : failmarker}`);
    });
  }
}