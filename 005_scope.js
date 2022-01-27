var x = 1;
function foo() {
    var y = 2;
    function zoo() {
        var z = 3;
        console.log(x);
        console.log(y);
        console.log(z);
    }
    console.log(x);
    console.log(y);
    console.log(z);
}
console.log(x);
console.log(y);
console.log(z);

/*
EC have lexical environment which means it has it's own memory as
well as it inherit it's parents memory variables and functions.

in GEC the x variable is avalable but y and z variable is out of it's
lexical environment. In the same way the foo function has the x ans y
variable but not z and in zoo function it has all variable in it's 
lexical environment.

an EC searches it's memory first and if it can not find that variable
in that memory than it searches it's parent memory. 
*/
