/**
 # ARRAY METHODS
 * @link https://medium.com/@akxay/the-essential-guide-to-javascript-methods-for-modern-web-development-23e4dc89408d
 * @description : length, indexOf, includes, slice, concat, toString, at (common for array and string )
 * @example 
 # Mutate(original array)	 -  push, pop, shift, unshift, splice, sort, reverse, fill, copyWithin
 # return NewArray	 -  map, filter, slice, concat, flat, flatMap, toSorted, toReversed, toSpliced, with
 # Other	 -  find, indexOf, some, every, reduce, join, forEach, etc.
 * -----------------------------------------------------------
 # Basic Array Methods
 * push()       // Add to end
 * pop()        // Remove from end
 * shift()      // Remove from start
 * unshift()    // Add to start
 * concat()     // Merge arrays
 * join()       // Join to string
 * at()         // Get item at index (supports negative) 
 * -----------------------------------------------------------
 # Searching and Indexing Methods
 * indexOf()        // First index of value
 * lastIndexOf()    // Last index of value
 * includes()       // Check if value exists
 * find()           // First match by condition
 * findIndex()      // Index of first match
 * findLast()       // Last match by condition (ES2023+)
 * findLastIndex()  // Index of last match (ES2023+) 
 * -----------------------------------------------------------
 #  Iteration Methods
 * forEach()    // Loop through array
 * map()        // Transform array
 * filter()     // Filter values
 * some()       // At least one match
 * every()      // All match
 * reduce()     // Accumulate left-to-right
 * reduceRight()// Accumulate right-to-left
 * flatMap()    // map() + flat()
 * flat()        // flat the array
 * -----------------------------------------------------------
 #  Modifying Array Content
 * slice()        // Extract portion (non-destructive)
 * splice()       // Remove/replace/add (destructive)
 * fill()         // Fill array with static value
 * copyWithin()   // Copy part within array (destructive)
 * with()         // New array with replaced value at index (ES2023+)
 * toSpliced()    // Like splice(), returns new array (ES2023+) 
 * -----------------------------------------------------------
 * toString()           // Convert to string
 * toLocaleString()     // Localized string
 * Array.isArray()      // Check if is array
 * from()               // Create array from iterable
 * of()                 // Create array from args
 * entries()            // Returns key/value iterator
 * keys()               // Returns keys (indexes)
 * values()             // Returns values 
 * -----------------------------------------------------------
 #  sorting and reversing methods
 * sort()          // Sort in place
 * reverse()       // Reverse in place
 * toSorted()      // Return sorted copy (ES2023+)
 * toReversed()    // Return reversed copy (ES2023+) 
 */

const fruitsArr = ['apple', 'orange', 'banana', 'grape',"mango","pineapple","guva"];
const numArr = [1,2,3,4,5,6,7,8,9,10];
const arrObj = 
[
    {name: "tom",age:30,dept:"HR"},
    {name: "mark",age:25,dept:"CEO"},
    {name: "jason",age:27,dept:"CTO"},
    {name: "jpe",age:28,dept:"DEVELOPER"},
    {name: "john",age:23,dept:"TESTER"},
]
const boolArr= [true,false]
let temp = []

//---------------------------------------------------------------------------------------------------------------------------
// 1. toSting();
// console.log(numArr);
temp = numArr.toString();
// console.log(temp);
//---------------------------------------------------------------------------------------------------------------------------
// 2. sort()
/**
 * by default ascending order
 * -1 -> Keep a before b (no change)
 * 1 ->  Put a after b (swap them)
 * 0 ->  a and b are equal, do nothing
 * without call back  
 * numArr.sort()
 * [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
 * This may seem incorrect, but the issue arises because sort() compares numbers as strings.
 * 
 * with call back
 * numArr.sort((a,b)=>a-b)
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
 */
fruitsArr.sort()
numArr.sort()
numArr.sort((a,b)=>a-b)
// console.log(fruitsArr) //[ 'apple', 'banana', 'grape', 'orange' ]
// console.log(numArr) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//---------------------------------------------------------------------------------------------------------------------------
// 3. reverse()
/**
 * same as sort it works for string and not for number
 */
fruitsArr.reverse()
numArr.reverse()
// console.log(fruitsArr);//[ 'orange', 'grape', 'banana', 'apple' ]
// console.log(numArr);//[10, 9, 8, 7, 6, 5, 4, 3, 2, 1] 
//---------------------------------------------------------------------------------------------------------------------------
//4. concat()
let arr1 = ["a","b"]
let arr2 = ["c","d"]
let arr3 = ["e","f"]
let result = arr1.concat(arr2, arr3)
// console.log(result);// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
//---------------------------------------------------------------------------------------------------------------------------
//5. join()
// Example 1: Joining an Array into a String (Comma Separator)
    const fruits1 = ['apple', 'banana', 'cherry'];
    const result1 = fruits1.join();
    // console.log(result1); // Output:'apple,banana,cherry' => a comma default behavior
     
// Example 2: Joining an Array with a Custom Separator
    
    const fruits2 = ['apple', 'banana', 'cherry'];
    const result2 = fruits2.join(' - ');
    // console.log(result2);  // Output: 'apple - banana - cherry'
    
// Example 3: Joining Array without Separator
    
    const letters3 = ['a', 'b', 'c'];
    const result3 = letters3.join('');
    // console.log(result3);  // Output: 'abc'
    
// Example 3: Joining Array with space Separator
    
    const letters4 = ['a', 'b', 'c'];
    const result4 = letters4.join(' ');
    // console.log(result4);  // Output: 'a b c'
//---------------------------------------------------------------------------------------------------------------------------
//6. find()
/**
 * 
 * returns the first element in an array that satisfies a condition. If no element satisfies the condition, 
 * it returns undefined.
 */
const res = numArr.find((data)=>{
 return data>5
})
// console.log(res) //10
//---------------------------------------------------------------------------------------------------------------------------
//7. findIndex()
/**
 * returns the index of the first element in an array that satisfies a condition.
 * If no element satisfies the condition, it returns -1.
 */
const res1 = numArr.findIndex((data)=>{return data<10})
// console.log(res1);//1
//---------------------------------------------------------------------------------------------------------------------------
//8. map()
/**
 * creates a new array populated with the results of calling a provided function on every element in the original array.
 * the returned array is always the same length as the original. 
 */
  
   const users = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 }
    ];
    
    const names = users.map(user => user.name);
    //or
     const names1 = users.map((items)=>{
     return items.name
    })

    // console.log(names)// [ 'Alice', 'Bob', 'Charlie' ]
//---------------------------------------------------------------------------------------------------------------------------
//9. filter()
/**
 * method creates a new array with all elements that pass the test implemented by the provided function. 
 * Only elements that return true in the callback function are included in a array.
 */

const adults = users.filter(user => user.age >= 30);
// console.log(adults);//[ { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 } ]
//---------------------------------------------------------------------------------------------------------------------------
//10. some()
/**
 * returns true if at least one element satisfies the condition.
 */
let ages = [10,20,12,30,15];
let isEligible= ages.some((age)=>{
  return age>18; 
})
// console.log(isEligible)//true
//---------------------------------------------------------------------------------------------------------------------------
//11. every()
/**
 *  returns true only if all elements satisfy the condition.
*/
let isAllvote = ages.every(val=>val>=18)
// console.log(isAllvote)//false
//---------------------------------------------------------------------------------------------------------------------------
//12. slice()
/**
 *  method returns a copy of an array into a new array,selected from start to end (end not included).
 *  NOTE : It does not modify the original array.
 *  // from index start(0) to (end-1) if 4 then 4-1 =3 (not including last index),
*/
const sliceArr = ['apple', 'orange', 'banana', 'grape',"mango","pineapple","guva"];

const slicedArr1 = sliceArr.slice()//[ 'apple', 'orange', 'banana', 'grape', 'mango', 'pineapple', 'guva' ]
const slicedArr2 = sliceArr.slice(0)//[ 'apple', 'orange', 'banana', 'grape', 'mango', 'pineapple', 'guva' ]
const slicedArr3 = sliceArr.slice(2,5)//[ 'banana', 'grape', 'mango' ]
const slicedArr4 = sliceArr.slice(-1)//[ 'guva' ]
// console.log(slicedArr1)
// console.log(slicedArr2)
// console.log(slicedArr3)
// console.log(slicedArr4)
// console.log(sliceArr.length)
//---------------------------------------------------------------------------------------------------------------------------
//13. splice()
/**
 *  @method: array.splice(start, deleteCount, item1, item2, ...)
 *  @param start The index at which to start changing the array.
 *  @param deleteCount The number of elements to remove. If 0, no elements are removed.
 *  @param item1 item2 ... Optional elements to add at the start index.
 *  @description: method modifies the contents of an array by removing, replacing, or adding elements at a specified index.
 *  Unlike slice(), it can change the original array.
*/
let spliceArr = ['apple', 'orange', 'banana', 'grape',"mango","pineapple","guva"];
const type1 = spliceArr.splice()// []
const type2 = spliceArr.splice(0,2)// [ 'apple', 'orange' ] removed fruit
const type3 = spliceArr.splice(0,0,"jackfruit","lichiee")// ['jackfruit','lichiee','banana','grape','mango','pineapple', 'guva']
const type4 = spliceArr.splice(1,1,"lion","tiger")// ['jackfruit','lion','tiger','banana','grape','mango','pineapple', 'guva']
const type5 = spliceArr.splice(-2)// [ 'pineapple', 'guva' ]
// console.log(spliceArr)
// console.log(type1)
// console.log(type2)
// console.log(type3)
// console.log(type4)
// console.log(type5)
//---------------------------------------------------------------------------------------------------------------------------
//14. includes()
/**
 * It determines whether an array contains a certain element.
 * It returns a boolean value—true if the element is found, and false otherwise.
 * This method is case-sensitive.
 * element: The element to search for.
 * start (optional): The position in the array at which to begin the search. Defaults to 0.
*/
const includeValwithoutstart = spliceArr.includes("grape")//true
const includeValwithstart =  spliceArr.includes("grape",3)//true
// console.log(includeValwithoutstart);
// console.log(includeValwithstart);
//---------------------------------------------------------------------------------------------------------------------------
//15. toString()
/**
 * It converts an array into a comma-separated string. Each element of the array is concatenated into a single string,
 * with commas inserted between elements. It does not modify the original array.
 * 
*/
const str = ["apple","carrot","beetroot"]
const convertStr = str.toString(); //apple,carrot,beetroot
// console.log(str);
// console.log(convertStr);
//---------------------------------------------------------------------------------------------------------------------------
//16. push()
/**
 * It adds one or more elements to the end of an array and returns the new length of the array. It modifies the original array.
 */
const pushArr = ['apple', 'banana'];
pushArr.push("guva","grapes")
// console.log(pushArr);//[ 'apple', 'banana', 'guva', 'grapes' ]
//---------------------------------------------------------------------------------------------------------------------------
//17.  pop()
/**
 * It removes the last element from an array and returns that element. This method modifies the original array.
 */
const popArr = ['apple', 'banana', 'guva', 'grapes']
popArr.pop()// grapes
// console.log(popArr);// 'apple', 'banana', 'guva' ]
//---------------------------------------------------------------------------------------------------------------------------
//18. shift()
/**
 * It removes the first element from an array and returns that element. This method modifies the original array.
 */
const shiftArr = ['apple', 'banana', 'guva', 'grapes']
shiftArr.shift();//apple
// console.log(shiftArr);//[ 'banana', 'guva', 'grapes' ]
//---------------------------------------------------------------------------------------------------------------------------
//19 unshift()
/**
 * It adds one or more elements to the beginning of an array and returns the new array. It modifies the original array.
*/
const unShiftArr = ['apple', 'banana', 'guva', 'grapes']
unShiftArr.unshift("papaya")
// console.log(unShiftArr);//[ 'papaya', 'apple', 'banana', 'guva', 'grapes' ]
//---------------------------------------------------------------------------------------------------------------------------
// 20. foreach()
/**
 * It executes a provided function once for each array element. It is used for iterating over an array but does not return any value.
*/
const forEachArr = ['apple', 'banana', 'guva', 'grapes']
forEachArr.forEach((data,index,array)=>{
    // console.log(data,index); 
    // console.log(array); 
})
//---------------------------------------------------------------------------------------------------------------------------
// 21. fill()
/**
 * It changes all elements in an array to a static value,from a start index to an end index (not included). 
 * It modifies the original array.
*/
const fillArr = [1,2,3,4,5,6,7,8,9]
fillArr.fill(12);// [12, 12, 12, 12, 12,12, 12, 12, 12]
fillArr.fill(14,2,6);//[1, 2, 14, 14, 14,14, 7,  8,  9]
// console.log(fillArr);
//---------------------------------------------------------------------------------------------------------------------------




