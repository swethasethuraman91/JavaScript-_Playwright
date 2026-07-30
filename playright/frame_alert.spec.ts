import { test } from "@playwright/test"

test ("Frame" , async ({page}) =>{

    await page.goto ("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    const allFrame = page.frames();
 //Assignment Requirements: 
page.once('dialog',async(alert)=>{
    let alertType=alert.type();
    console.log(alertType);

    let alertMessage=alert.message();
    console.log(alertMessage);
    alert.accept();

});
  //automatic clic operation
     const frameRef =  page.frameLocator('//iframe[@id="iframeResult"]');
       await frameRef.locator('//button[text()="Try it"]').click();
//printing value of innertext in alert box
  const value =await  frameRef.locator('//button[@onclick="myFunction()"]/following::p').innerText();
    console.log("alert msg",value);

});
