//function name
launchBrowser()
runTest("smoke")
runTest("regression")
runTest("sanity")
runTest()

//function calling
function launchBrowser(browserName = "Chrome")
{
    if(browserName  ="Chrome")
        console.log("the browser is chrome");
    else
        console.log("this is default browser ")
}
function runTest(testType)
{
    switch(testType)
    {
        case "smoke":
            console.log("smoke");
        break;
        case "sanity":
             console.log("sanity");
        break;
        case "regression":
            console.log("regression");
        break
        default:
            console.log("this is default smoke");     
        break;      
    }
}
