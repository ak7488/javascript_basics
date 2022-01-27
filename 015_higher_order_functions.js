/*
A function which takes a function as an argument or returns a function
is known as Higher Order Function.
*/

const radius = [1, 5, 77, 99, 2];

const area = (radius) => {
    return Math.PI * radius * radius;
};
const diameter = (radius) => {
    return 2 * radius;
};
const cercumfrance = (radius) => {
    return Math.PI * radius * 2;
};

Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
};

console.log(radius.calculate(area));
console.log(radius.calculate(cercumfrance));
console.log(radius.calculate(diameter));
