# Unit Testing with Jest

## Objective

Jest is a library which allows us to build tests with JavaScript. Unit tests are quickly becoming the standard within software development lifecycle (SDLC). They quickly uncover the most common type of error which interpreteres or prases cannot warn us about -- logic error.

## Getting Started

- [ ] Jest is installed as a dev dependency within the project in which we're working. Do this by running `npm i jest --save-dev`. This will install Jest as a dev dependency.
- [ ] Add a script to our `package.json` to include a test command `"test": "jest"`
- [ ] Create `sum.js` file with the following code:
```js
const addNums = (x, y) => {
    return x + y
}

module.exports = addNums
```
- [ ] Create a `sum.test.js` file. This file holds the unit test or tests for a particular file. The naming convention is *necessary* for Jest to understand where unit tests are.
- [ ] inside this file, type the following code:
```js
const addNums = require("./sum")

test("Adds 5 & 7 to be 12", () => {
    expect(addNums(5, 7)).toBe(12)
})
``` 
- [ ] `test()` or `it()` function takes a str parameter and a callback function
- [ ] Str outlines the definition of the unit test
- [ ] Callback fx is used to perform the test
    - [ ] `expect()` is an expectation object where we invoke the object we want to test
    - [ ] `toBe()` one of many **matchers** to check against

> You can also use `it()` and `xit()` instead of `test()`. `xit()` allows you to skip a unit test without triggering an error.

