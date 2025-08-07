const arr = [];
function generator ( input )
{
    for ( let i = 1; i < input; i++ )
    {
        arr.push( i );
    }
    return arr;
}
generator( 10 );

const modified = arr.map( ( data ) => { return data * 2; } );
const filtered = arr.filter( ( data ) => { return data % 2 !== 0; } );
const reduced = arr.reduce( ( prev, next ) => { return prev * next; }, 1 );
const finded = arr.find((data)=>{
    return data>3
})
console.log( arr, "original array" );
console.log( modified, "modified" );
console.log( filtered, "filtered" );
console.log( reduced, "reduced" );
console.log( finded, "finded" );

