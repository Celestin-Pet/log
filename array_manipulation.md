# Array Manipulations

[MDN on Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
As we know by now, arrays are collections of values.

As we will see, there are often many ways to achieve the same thing when working arrays. Over time, you will add different techniques to your mental toolbox to achieve the result you want quickly.

The basics.

- How do we create an array?
- How do we add items to an array?
- How do we change items of an array?
- How do we remove items from an array?
- How do we know the length of an array?
- How do we iterate over an array?

## How do we create an array?

An array can be created multiple ways

From scratch:

```js
const a = []; // result: []
const b = ['item1', 'item2']; // result: ['item1', 'item2']

// The examples with new Array() are NOT recommended and shown here for demo purposes only.
const c = new Array(); // result: []
const d = new Array('item 1', 'item2'); // result: ['item1', 'item2']
const e = new Array(20); // result: [ <20 empty items> ]
const f = new Array(20, 21); // result: [20, 21]
// Note that `e` and `f` are a beautiful example of how weird and unexpected JavaScript can be.
// You should use `a` or `b` by default.
```

From value (as an example, many ways to create an array from another value):

```js
const a = 'hello world'; // result: 'hello world'
const b = a.split(' '); // result:  ['hello', 'world' ]
```

## Array length

Every array has as a 'static' property `length`. Meaning that we can easily get the amount of items in an array.

```js
const f = ['hi', 'there'];
console.log(f.length); // 2
```

## Array index

We can access array elements through the position of the element in the array. This is called an index. Indices (plural of index) are 0-based, meaning that the first item's index is 0, the second element is 1.

```js
const x = ['first', 'second', 'third'];
console.log(x[0]); // 'first'

x[3] = 'fourth';
```

Note that arrays can have empty values. This should be avoided usually to prevent unexpected behaviour.

```js
x[10] = 'eleventh';
console.log(x); // [ 'first',  'second',  'third',  'fourth',  <6 empty items>,  'eleventh' ]
```

Next to the index, we have a wide range of tools to manipulate arrays.

## Array methods

These methods are essential.

**Extremely important is to remember to always ask these two questions**:

- What is the return value of this method?
- What does this method do to the original array it is used on?

**Adding items**

- [`.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) Add item to end of array.
  Example:

```js
const animals = ['pigs', 'goats', 'sheep'];

// 1.What is the return value of this method?
// returns the length of the new array
console.log(animals.push('cows'));
// expected output: 4

// 2. What does this method do to the original array it is used on?
// modifies the original array - adds at the end of the array the given element(s)
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

// can add multiple elements in one call
animals.push('chickens', 'parrot');

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chicken", "parrot"]
```

> _See this in action in this [JSBin](https://jsbin.com/lawovip/edit?js,console)._

- [`.unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) Add item to beginning of array.
  Example:

```js
const array1 = [1, 2, 3];

// 1.What is the return value of this method?
// returns the length of the new array
console.log(array1.unshift(4, 5));
// expected output: 5

// 2. What does this method do to the original array it is use
// modifies the original array - adds at the begining of the array the given element(s)
console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
```

> _See this in action in this [JSBin](https://jsbin.com/pikupol/edit?js,console)._

**Removing items**

- [`.shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) Remove first element from array.
  Example:

```js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

// 1.What is the return value of this method?
// returns the first element of the array
console.log(firstElement);
// expected output: 1

// 2. What does this method do to the original array it is use
// modifies the initial array - removes the first element
console.log(array1);
// expected output: Array [2, 3]
```

> _See this in action in this [JSBin](https://jsbin.com/madaxuq/edit?js,console)._

- [`.pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) Remove last element from array. Example:

```js
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// 1.What is the return value of this method?
// returns the last element
console.log(plants.pop());
// expected output: "tomato"

// 2. What does this method do to the original array it is use
// modifies the original array - removes the last element from the end of the array
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

> _See this in action in this [JSBin](https://jsbin.com/nicazaf/edit?js,console)._

- [`.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) Remove a specific element from array using index.
  Example:

```js
const months = ['Jan', 'March', 'April', 'June'];

// 1.What is the return value of this method?
// return an array containing the elements removed
console.log(months.splice(1, 0, 'Feb'));

// 2. What does this method do to the original array it is use
// modifies the original array:

// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

console.log(months.splice(4, 1, 'May'));
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
```

> _See this in action in this [JSBin](https://jsbin.com/yuriyer/edit?js,console)._

**Useful iterators over arrays**

- [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) creates a new array with the results of calling a provided function on every element in the calling array.
- [`.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) creates a new array with all elements that pass the test implemented by the provided function.
- [`.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) sorts the elements of an array in place and returns the array

Detailed examples: [`here`](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/map_filter.md)
