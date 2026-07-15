let browser = "Chrome";// variable declaration
function checkBrowserVersion(cb)
{
    console.log("browser will disolay after 2mins");
    setTimeout(() => {cb(browser)}, 2000);
   
}
function displayBrowser(browserName) {
  console.log("Data received from browser!" +browserName);
  

}
checkBrowserVersion(displayBrowser);