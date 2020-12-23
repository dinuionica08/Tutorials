// this algorithm help us to find the first n prim numbers
/*
1 2 3 4 5
0 0 0 0 0
1 0 1 0 1 
3 5 
  */
 let a = [1,2,3,4,5,6,7,11];
 for ( let i = 0; i < 20; ++i )
   a[i] = 1;
 for ( let i = 3; i * i <= 20; i = i + 2 ) {
   if (a[i] == 1) {
     for ( let j = i * i; j <= 20; j = j + 2 * i ) {
       a[j] = 0;
     }
   }
 }
 console.log(2);
 for ( let i = 3; i <= 20; i = i + 2) {
     if ( a[i] == 1 ) {
       console.log(i);
     }
 }