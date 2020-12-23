// with euclid algorithm we can find cmmd of a number 
// thsi algorithm is based on the remainders of the number divison
/*
12 5 
12 5 2 2
5 2 2 1
2 1 1 0
1 0  => 1  

24 6 4 0
6 0  => 6
*/ 

// we must create a function with 2 arguments
// iterative function
function euclid( a, b) {
    while ( b != 0 ) {
        r = a % b;
        a = b;
        b = r;
    }
    return a;
}

// recursive function
function euclid2(a,b) {
    if ( b == 0 )
        return a;
    else
        return euclid2(b,a % b);
}
console.log(euclid2(24,2));