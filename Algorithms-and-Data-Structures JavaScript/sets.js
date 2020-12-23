//sets are a new type of data which contains more informations,integers,strings,booleans or objects
// in a set a element appears only once
//or how many elements we add they appear once
// this is the importance of the sets
/*
 push 1 push 2 push 1 push 3 push 5 push 2 push 1 push 3
 
 set -> 1 , 2 ,3, 5 

*/
let set = new Set();
set.add(1);
set.add(2);
set.add(1);
set.add(3);
set.add(5);
set.add(2);
set.add(1);
set.add(3);

console.log(set);