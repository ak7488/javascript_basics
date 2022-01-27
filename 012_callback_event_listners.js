// What is a callback in javascript?
/*
Callbacks are functions provided as argument when another function
is called so that when the new function finished it's work it can
call the callback function the execute desired code.
 */

setTimeout(() => {
    console.log('hello world')
}, 1000);

// Why do we need to remove the event listners?
/*
We remove the event listners because those are closures which consumes
memeory if we don't remove them they will hog lots of memory and make 
the program slower.
 */