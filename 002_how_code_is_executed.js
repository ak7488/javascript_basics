var n = 2;                     
function square(num) {         
    var ans = num * num;        
    return ans;                 
}                              
var square2 = square(n);       
var square4 = square(4);       


/*
1) in above code First a global execution context is created.
2) All variable are stored in memory part of EC where variables are
sotored as undefined and function are stored as exact code like 
    2.1) in virst line n is assigned undefined (n: undefined)
    2.2) function square is asisgned the whole code under the 
    square function.
    2.3) square2 and square3 are assigned the value undefined.
3) Next all codes are executed line by line.
    3.1) n is assigned value 2
    3.2) there's no code to execute from line 3 to 5 the ignored.
    3.3) to asine value to square2, function square is exuected 
    in new EC.
4) new EC is created for square function and just line first value
is stored in memory part of new EC and after that code is executed.
    4.1) memory is allocated for num and ans variable.
    4.2) in code execution, value 2 is assigned to num variable.
    4.3) in same way value num * num is assign to variabe ans.
    4.4) return gives control back to where the function was invocked.
    4.5) return statement also gives back ans value as return statement.
5)The function's EC is deleated after value is returned.
6)Same thing will happen as the previos function invocation of square 
function but this time num value will be 4 as the parameter is passed.
7) this all happens in call stack 
    7.1) in call stack global EC is in the bottom like: [GEC];
    7.2) if another EC is created it will be pushed to call stack 
    like: [GEC, 1EC];
    7.3) and if the execution of the 1EC or the EC on top of the call 
    stack is completed then is is poped up from the call stack and the 
    control is given back to the EC below it, like: [GEC]
    7.4) and if the function is called in it self or multiple functions
    are called in one another then call stack will be like:-
    [GEC, 1EC, 2EC, 3EC, 4EC, 5EC, ...]

*/