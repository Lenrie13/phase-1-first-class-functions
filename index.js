// takes in a callback function
function receivesAFunction(saidFunction) {
    saidFunction();
}

// returns a named function
function returnsANamedFunction() {
    function namedFunction() {};
    return namedFunction;
}

// returns an anonymous function
function returnsAnAnonymousFunction() {
    return function () {};
}