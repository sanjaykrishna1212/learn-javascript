/**
 * MAP 
 * 
 * Purpose: A Map object holds key-value pairs, where any data type can be used as a key or value.
 */

const map = new Map();

map.set( "name", "sanjay" );
map.set( 10, "Ten" );

// console.log( map.get( "name" ) );

// console.log( map.has( 10 ) );

console.log( map, "before" );
console.log( map.size, "size" );
map.delete("name")
console.log(map,"after");


