// a queue represent a new type of data which can contains information,numbers,string,booleans,or objects
// as in the stack,the queue elements must follow an order
//FIFO => FIRST IN FIRS OUT
/*
    1 2 3 4 5 6 7 8 
   left         right
   FIFO ELEMENT

*/
// with a queue we can do also 4 operation
// => push
// => empty
// => pop
// => front

//the basic implementation
 
let queue = [];
let left = 1;
let right = 0;

// function to see if the queue is empty
function empty() {
    return left >= right;
     
}
// function to push something into the stack
function push(val) {
    queue[++right] = val;
     
}
// function to delete the last element of the queue
function pop() {
     ++left;
}

// function print the top of the queue
 function front() {
     return queue[left];
 }

 push(3);
 push(4);
 push(5);
 pop();
 pop();
 console.log(front());