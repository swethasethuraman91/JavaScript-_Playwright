function factorial(n:number)
{
//negastive value check
    if(n<=0)
    {
        console.log(n, "given number is non-negative integer");
       
    }
    let result =1;
//calculation for factorial of given number
    for(let i=1; i<=n; i++)
    {
        result= result*i;
       // console.log(result);
    }
//result
   console.log("given factorial of", n,"is",result);
   // return result;

}
factorial(4);
factorial(-2);
factorial(2);
