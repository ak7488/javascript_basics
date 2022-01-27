/*
Javascript runtime environment is a space which includes js engine,
event loop, APIes, microtask queue and callback queue.

Javascript engine is a interpretter which takes the human readable
code and converts it into machine code and executes it.

Some famous js engines are:
V8 from google used in chrome, node, deno
SpiderMonkey from Mozilla in Firefox

js engine goes from different stages to convert and execute the code
which are:
    1) Parsing:
        >In parsing the code is broken down into tokens like the code
        "let a = 'k'" will be broken down to "let", "a", "=", "'k'"
        > The code is converted into Abstract Syntax Tree (AST);
    2) Compilation:
        >Javascript is a interpretted languabewhich executes code line 
        by line
        > But the modern browsers uses interpretter as well as compoler
        to execute the code quickly and efficently which is called 
        Just In Time Compilation.
        > It takes the AST and converts it to machine code. 
    3) Execution
        >Execution takes place with the help of call stack, memory
        heap and garbage collector.
        > Call stack is the part which executes the code. 
        > Memory heap is the place which stores all the variables and
        functions.
        > Garbage collector collects all the unused variables and clean
        the memory. It uses mark ans sweep algorithm
        > While executing it also do work like inlining, copy elisin and
        inline caching
*/
