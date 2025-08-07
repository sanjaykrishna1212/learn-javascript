const arr = [ 29, 34, 354, 653, 8, 2 ];

// arr.sort( ( a, b ) =>
// {
//     return b - a;
// } );

// console.log( arr );


function bubblesort(arr){
const n = arr.length
for ( let i = 0; i < n - 1; i++ )
{
    for ( let j = 0; j < n - i - 1; j++ )
    {
       if (arr[j] < arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
}
return arr
}
console.log(bubblesort(arr));


