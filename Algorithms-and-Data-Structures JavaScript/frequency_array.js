// to see what times a number appears in an array we usullay must use the frequency array for a good complexity
// It's very important to declare the frequency array as global 
let frequency =[];
let vector = [ 1,2,3,1,1,5,1,5,1,1,1,1,6];
for (let i =1; i <= 6; ++i ) {
    frequency[i] = 0; // here we set each elements with 0
}
for ( let i = 0; i <= vector.length; ++i) {
    frequency[vector[i]]++; // here we increment the aparition
}
for (let i = 1; i <= 6; ++i ) {
    console.log(i + " appear of " + frequency[i] + " times ");
}
// the single inconvenient of this algorithm is represented by the range of the numbers are searched