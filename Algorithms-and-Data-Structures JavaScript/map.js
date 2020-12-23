// a map is a collection of dates with keys like as object
// the difference is that the map allows keys of any types
let map = new Map();
map.set('1',2); // add somethig into the map ,the first argument represent the key of map
console.log(map.get('1')); // this return the value of key
console.log(map.has('1')); // return true if the key exist
map.delete('1'); // delete the element of the map with key
map.size() // size of the map