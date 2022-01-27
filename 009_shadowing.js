var a = 10;
let b = 10;
const c = 10;

{
    var a = 100;
    let b = 100;
    const c = 100;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

//OUTPUT
//100
//100
//100
//100
//10
//10

/*
OverShadowing the parent key with child key in a scope or if var 
changing the previos value since it is stored in same memory location.

in above code the a b and c are declared the value 10 in global space;
the var a is overwritten to 100 since it refers to same global space, 
while the let b and const c are overShodowed by the scove declaration
of let b and const c;

in line 14 and 15 since b and c are in differnt block and reffers to
different memory location the output is 10.
*/

// Shadowing behaves in similar way in the functions also.

//Illigal Shadowing

let z = 2;
{
    var z = 10;
}

/*
The ablove code will throw error because the let z is in the global
scope and not redeclarable but the var z is declaring z in the global
scope again
*/
