// Block are used to group multiple statements as a single statement.

//it is used where the operator expects a single statement.

if (true) console.log("true");

/*
if statement expects a single statement after its decleration,
if we want to execute multiple statement then we have to group
them using Blocks, like this:
*/

if (true) {
    console.log("hello");
    console.log("hello 2");
}

// Block scope is all the variables and functions we can access inside
// that block.

{
    let a = 0;
    let b = 1;
}
let c = 2;

/*
in above code let a and let b are in same block scope but let a and 
let c are in different block scope.
*/

{
    var d = "d";
    let e = "e";
    const f = "f";
}

/*
After the execution of the d, e, and f variable scope the e and f are
no longer accessable since there are stored in different scope while
d is still accessable because var is stored in global scope.

 */
