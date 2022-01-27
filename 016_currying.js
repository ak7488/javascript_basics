/*
Currying is when you break down a function that takes multiple arguments into a series of
functions that each take only one argument. Here's an example in JavaScript:
*/

function add(a, b) {
    return a + b;
}

/*
add(3, 4); // returns 7
This is a function that takes two arguments, a and b, and returns their sum. We will now 
curry this function:
*/

function add2(a) {
    return function (b) {
        return a + b;
    };
}

/*
This is a function that takes one argument, a, and returns a function that takes another
argument, b, and that function returns their sum.
*/

add2(3)(4);

var add3 = add2(3);

add3(4);
