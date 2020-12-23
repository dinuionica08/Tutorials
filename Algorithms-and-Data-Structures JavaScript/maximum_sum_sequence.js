// a sequence represent a series of consecutive numbers from an array
//1 2 3 4 5 
// 1 2 3 => is a sequence
// 1 2 5 => isn't a sequence

// the most usefull algorithm to find the maximum sum sequence has o(n) complexity
/*
10 20 -30 20
10 10 
30 30
0 0 
20 30
-10 0
-30 0
20 30 
30 

*/
let vector = [10,20,-30,20];
let sum = vector[0];
let smax = vector[0];
if ( sum < 0 ) 
    sum = 0
for ( let i = 1; i < vector.length; ++i ) {
    sum = sum + vector[i];
    if ( sum > smax )
        smax = sum;
    if ( sum < 0 )
        sum = 0;

}
console.log(smax);
