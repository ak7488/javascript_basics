/*
Javascript have only one call stack while exeuctes code quickly just
as it is pushed to it.
When a callback or event callback is resitered in browser and after 
achiving it's condition to execute it is pushed to the callback queue
which stores all callback functions.
The event loop constantly checkes the call stack if is empty or not,
if empty then it checks if there any task in microtask queue if yes
then it pushes the task to the call stack one by one and if not then
it checks if there any task on callback queue if there is/are then
if pushes the task to the call stack one by one to be executed.

Microtask queue takes president over callback queue

All the callback from promises or mutation observer pushes its task
to microtask queue and are the only to access it.

Every other callback from dom api, setTimeout etc pushes its task to
callback queue.

Callback starvation: When microtask queue's task creates new
microtask/s then the callback queue does not get the chance to push
its task to call stack and it is callback starvation.

Trust issuses with setTimeout()
Since event loop will only push callback queue task to the call stack
if the call stack is empty thus if there is a long process or main thread
of the js is blocked the callback from setTimeout will not be executed
evern if the time expires.
*/
