// Function 1: receives a function and calls it
function receivesAFunction(callback) {
  return callback();
}

// Function 2: returns a named function
function returnsANamedFunction() {
  function namedFn() {
    return "I am a named function!";
  }
  return namedFn;
}

// Function 3: returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    return "I am an anonymous function!";
  };
}

// Export them so tests can use them
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};
