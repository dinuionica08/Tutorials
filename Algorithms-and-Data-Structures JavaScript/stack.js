// a stack represent a new type of data which contains informations,numbers,strings.booleans, or objects
//at this type of data all the elements must respect a order
//(LIFO) LAST IN FIRST OUT 
// the last element which was add into the stack is the first element that is deleted from the stack
// with a stack we can do 4 operation 
// => push
// => empty
// => pop
// => ptop
/*
    1 = > is the LIFO ELEMENT
    2
    3
    4
    5
*/
// a stack is like a group of plates placed on top of each other


// the basic implementation

let stack =[];
let topp = 0;


// function to see if the stack is empty
function empty() {
    if ( topp == 0 )
         return 1;
    else 
        return 0;
     
}
// function to push something into the stack
function push(val) {
    stack[++topp] = val;
     
}
// function to delete the last element of the stack
function pop() {
     --topp;
}

// function print the top of the stack
 function top() {
     return stack[topp];
 }
 push(3);
 push(4);
 push(5);
 pop();
 pop();
 console.log(top());
