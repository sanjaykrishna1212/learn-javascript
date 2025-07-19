
const originalString = "hello";// len = 5
                               // last index = 5 -1
////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Reverse a string without using in built-in method. 
 */
function reverseString(str)
{
    let reversed = ""
    for(let i = str.length-1;i>=0;i--)
    {
        reversed+=str[i]
    }
    return reversed;
}

const reversedString =reverseString(originalString)
console.log(reversedString);

/////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Reverse a string with using in built-in method. 
 */

function reverseStringwithbuildin(str)
{
    let reversed = str.split("").reverse().join("");
    return reversed
}
const reversedStringwithbuildin =reverseStringwithbuildin(originalString)
console.log(reversedStringwithbuildin);

////////////////////////////////////////////////////////////////////////////////////////////////