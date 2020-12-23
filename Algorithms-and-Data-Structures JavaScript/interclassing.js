// the algorithm of interclassing consists in entering all the numbers in order

let array1 = [1,2,5,4];
let array2 = [3,7,8,6];
let array3 = [];
let p = 0;
let i = 0;
let j = 0;
let n = array1.length;
let m = array2.length;
while ( i < n && j <  m) {
    if ( array1[i] < array2[j] ) 
        array3[p++] = array1[i++];

    else  
        array3[p++] = array2[j++];
    
}
while (i < n) {
    array3[p++] = array1[i++];
}
while( j < m ) {
    array3[p++] = array2[j++];
}
for ( let i = 0; i < array3.length; ++i)
    console.log(array3[i]);
