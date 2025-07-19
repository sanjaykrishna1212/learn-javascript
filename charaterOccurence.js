
const originalString = "weekend"

////////////////////////////////////////////////////////////////////////////
/**
 * count the occurence of each character in string 
 */
function Check_Occurence(str)
{
    const count = {}

    for(let char of str)
    {
       if(!count[char]){ count[char]=1 ; continue;}
       count[char]++ ;
    }
    return count
}

const getOccurence  = Check_Occurence(originalString)

console.log(originalString , "= >" ,getOccurence)
////////////////////////////////////////////////////////////////////////////
