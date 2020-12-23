// we must create a function to decomposition of a number into prime numbers

function decomposition(n) {
    d=2;
    while(n>1)
        {
            p=0;
            while(n%d==0)
            {
                p++; 
                n=n/d; 
            }
         
            if(p>0)
               console.log( d + " ^ " + p);
            d=d+1;
        }
}
decomposition(100);