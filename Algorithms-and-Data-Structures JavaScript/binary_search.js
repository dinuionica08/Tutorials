// a simple search of a element into an array have o(n) complexity
// the best form of search is represented by binary_search that have o(log(n)) complexity
// the first import thing at the binary_search is that all elements must be ordered
 /*
 1 2 3 4 5 6 

 3
 right 6
 left  1
 mid 3.5 = 3
 if v[3] == 3  yes => true

 5
 right 6
 left  1
 mid  3.5 = 3 
 if v[3] == 3  v[3] < 3 
left = mid + 1;
left 4 
right = 6;
mid = 5
 if  v[5] == 5 yes => true;

 2
 right 6
 left 1
 mid 3.5 = 3
 if ( v[3] == 2) v[3] > 2
 right = mid - 1;
 right 2
 left 1
 mid 1 
 if  v[mid] ==2 v[mid] < 1
 left = mid + 1; 
 left 2 
 right  2
 mid 2  v[2] == 2 yes => true


 
 */
// we must create a function
// we need to declare some variables

// iterative function 

function binary_search(v, n, x) {
    let mid = 0;
    let right = n;
    let left = 0;
    while ( left <= right) {
        mid = (left + right ) / 2;
        if ( v[mid] == x ) return mid;
        else if ( v[mid] < x ) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// recursive function

function binary_search( v,x,left,right) {
    if ( left > right ) 
        return -1;
    else {
        let mid = (left + right) / 2;
        if (v[mid] == x ) 
            return mid;
         if ( v[mid] < x )
            return( v,x,mid + 1, right);
        if ( v[mid] > x)
            return(v,x,left,mid - 1 ); 
    }
}

let v = [1,2,3,4,5,6];
console.log(binary_search(v,2,0,6));


    