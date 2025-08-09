/**
 * Object Methods
 * Object.create()
 * Object.keys()
 * Object.values()
 * Object.entries()
 * Object.assign()
 * Object.freeze()
 * Object.seal()
*/

let obj =
{
    id: 1,
    Name: "Sanjay",
    Age: 23,
};

let employee = Object.create( obj );
employee.id = 2
employee.Name = "yogesh"
employee.Age = 50
// console.log( employee ,"create");
// console.log( Object.entries( employee ), "entries" );
// console.log( Object.keys( employee ),"keys");
// console.log( Object.values( employee ),"values");
// console.log( Object.assign( { employee }, employee ),"assign");
// console.log( Object.freeze( employee ),"freeze");
// console.log( Object.seal( employee ),"seal");



/**
 * Shallow Copy vs Deep copy
 */

// shallow copy

/**
 *  Object.assign()
 *  Spread Operator
 *  Array.prototype.slice();
 */

let original = {
    name: "sanjay",
    age: 24,
    emp: {
        id :1128
    }
};


let shallowCpy = {...original};
shallowCpy.age = 23
shallowCpy.emp.id = 1199
console.log(original);
console.log(shallowCpy);
console.log( shallowCpy.age );
console.log( shallowCpy.emp.id );
console.log("===========================");

//================================================================================//
// Deep Copy
 /**
  * JSON.stringify()
  * JSON.Parse()
  */

let deepCpy = JSON.parse( JSON.stringify( original ) )
deepCpy.age = 23;
deepCpy.emp.id = 2000;
console.log( original );
console.log( deepCpy );
console.log( deepCpy.age );
console.log( deepCpy.emp.id );
 