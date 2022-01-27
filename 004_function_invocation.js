var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

/*
OUTPUT: 10
        100
        1

In Above code the x was allocated in the momory with value undefined and the a and b
function will be allocated in the memory with same code.

CODE_EXECUTION
CALL_STACK = [GEC]
x is assigned the value 1;
function a is called;
CALL_STACK = [GEC, a_EC]
x is asinged the value undefined
x is assined the value 10;
x is loged in console having value 10.
function a return after executing everything in a_EC and gets poped up from call stack
CALL_STACK = [GEC]
function b is called;
CALL_STACK = [GEC, b_EC]
x is asinged the value undefined
x is assined the value 100;
x is loged in console having value 100.
function b return after executing everything in b_EC and gets poped up from call stack
CALL_STACK = [GEC]
varable x is loged in console from GEC having value 1;
after executing everyting in GEC the GEC is poped up from the call stack
CALL_STACK = []
*/
