// an array represnt a new type of variable which contains more information,dates,string, boooleans ,numbers etc
// the order of the data dosen't matter
// in programming counting  start from the 0
// operations with an array
/*
= > add someting with push method
= > delete something with pop or an created function()
= > sort the array
= > reverse the array
= > find somethinf into the array

*/
let names = ["ionica", "dan", "marinela"];
for ( var name = 0; name <=names.length; ++name)
    console.log(names[name]);
names.reverse(); // this method reverese the array
names.push("ciprian"); // to add something in array
names.pop();
/* 
45 2 5 6 74 1
1 2 5 6 45 74 
*/
for ( var name = 0; name <=names.length; ++name)
    console.log(names[name]);