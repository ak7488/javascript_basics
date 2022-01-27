var x = 7;
function getName() {
    console.log("Kunal kumar");
}

getName();
console.log(x);

/*
In the above code from line 1 to 7 code is executed as expected
and the output is:-

Kunal kumar
7
*/
//------------------------------------------------------------------
console.log("Seperate ----------------------------------------------");
//-------------------------------------------------------------------

getName();
console.log(x);

var x = 7;
function getName() {
    console.log("Kunal kumar");
}

/*
OUTPUT: Kunal kumar
        undefined

in the abobe code from 20 to 26 the output is undefined for x while Kunal kumar for the getName
function because in the readMode before code execution x is stored as undefined while getName
function is stored as the provided code so, when the code executes the x is loged as undefined
becase the x is not given the value 7 until line 23 while function is executed in different EC.
*/

// Var and functions are not asigned on top of the code while executing it is just those are
// read and defined first before code execution.

//JavaScript Hoisting refers to the process whereby the interpreter
// allocates memory for variable and function declarations prior to
// execution of the code.
