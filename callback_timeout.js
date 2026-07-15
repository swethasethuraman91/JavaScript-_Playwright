let browser = "Chrome";// variable declaration
//set timeout for the function
function checkBrowserVersion(cb)
{
    console.log("browser will disolay after 2mins");
    setTimeout(() => {cb(browser)}, 2000);
   
}
//callback function
function displayBrowser(browserName) {
  console.log("Data received from browser!" +browserName);
  

}
//function declaration
checkBrowserVersion(displayBrowser);
