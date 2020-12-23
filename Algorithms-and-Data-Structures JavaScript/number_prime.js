// a number prime is a number that is divisible by 1 and by itself

// we mus create a function with number argument
function prime(number) {
    if ( number <= 1 ) 
        return false; // the first prime number is 2
    else    
        for ( let divisor = 2; divisor <= Math.sqrt(number); ++divisor) // for a good complexity we go to the radical number
            if ( number % divisor == 0 )
                return false; // 
            return true;
}
console.log(prime(7));