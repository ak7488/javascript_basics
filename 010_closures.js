// Closures are the function and its lexical scope.

// even if the function returns another function and it self gets
// popped out of call stack the returned function mantains its
// lexical scope, like

function x() {
    const a = 7;
    function y() {
        console.log(a);
    }
    return y;
}

const z = x();
console.log(z);
z();

// thus it's not that the function just returned another function but
// it returned the whole closure of the function y;

//It can be used to secure a variable;

function Counter() {
    let count = 0;
    this.count = function () {
        const c = count;
        return c;
    };
    this.increment = function () {
        count++;
        console.log(count);
    };
    this.decrement = function () {
        count--;
        console.log(count);
    };
}

const counter1 = new Counter();

console.log("c", counter1.count());
counter1.increment();
console.log("c", counter1.count());
counter1.decrement();
console.log("c", counter1.count());
