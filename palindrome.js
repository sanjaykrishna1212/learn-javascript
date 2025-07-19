
const orignalString = "sanjay"
//level
//madam
//radar
///////////////////////////////////////////////////////////////////////////////////
/**
 * check if a string is palindrome or not 
 */

function CheckPalindrome(str)
{
    const cleanedStr = str.toUpperCase();cleanedStr === reverseString(cleanedStr)
    return cleanedStr === reverseString(cleanedStr)
}

const isPalindrome = CheckPalindrome(orignalString)
console.log(isPalindrome);
//////////////////////////////////////////////////////////////////////////////////


function reverseString(str)
{
    let reversed = ""
    for(let i = str.length-1;i>=0;i--)
    {
        reversed+=str[i]
    }
    return reversed;
}
//////////////////////////////////////////////////////////////////////////////////
