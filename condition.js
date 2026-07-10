
//calling function
//odd or even
function oddoreven(value)
{
    if(value%2 == 0)
    {
        console.log("even");
    }
    if( value %2 !=0 && value !=null)
    {
        console.log("odd" );
    }
    else 
    {
        console.log(typeof value);
    }
 

}
//number check 

function numberType(numCheck)
 {
    if(numCheck > 0)
    { 
        console.log("positive number");
    }
    if (numCheck < 0)
    {
        console.log("negative number");
    }
     else if(numCheck === 0)
    {
        console.log("neutral");
    }
 }



//fuction odd or even value passing in parameter
console.log("odd or even");
console.log("-----------");
oddoreven(23)
oddoreven(2)
oddoreven(0)
   console.log("---------------");
//function to check the number type
console.log("Number type check")
console.log("-----------------");
numberType(-2)
numberType(45)
numberType(0)
   console.log("---------------");



