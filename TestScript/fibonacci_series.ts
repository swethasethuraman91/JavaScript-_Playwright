
function fibonacci(n:number)
{console.log("given number is", n);
let series = [];
let first = 0, second = 1;

//condition to check non negative integer
    if(n<=0)
    {
        console.log(n,"Given integer must be non negative")
    }
    
 //loop for fibonacci series
    for (let i=0; i < n; i++)
    {
         series.push(first);
           let next = first + second;
            first = second;
            second = next;         
    }
   return series;
}
console.log(fibonacci(10));
console.log(fibonacci(-2));
console.log(fibonacci(0));
