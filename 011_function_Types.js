//Statement function
function a() {
    console.log("a");
}

//----------------------------------------------------

// function expression
const b = function () {
    console.log("b");
};

//----------------------------------------------------

// Arrow function
const c = () => {
    console.log("c");
};

//----------------------------------------------------

// First class function
// first class citizen
// The ability to pass function as a parameter or return a function
// is called first class function.

//  ---------------------------------------------------

// anonymous function
// function () {

// }

//----------------------------------------------------

// Named function Expression

const d = function e() {};
// e() is not accessable since it is not executed or fead to the
// memory yet.

//----------------------------------------------------

// Prarmeters are the variable avalable in the function like in
// following function PARAMETER is the parameter;

function f(PARAMETER) {}

// arguments are the value provided when a function is called like
// in the following Example.

f(ARGUMENT);
