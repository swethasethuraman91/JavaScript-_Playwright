import {test} from "@playwright/test"
import path from "node:path"

test ("multiple file upload", async ({page}) => {
    
    await page.goto("https://www.leafground.com/file.xhtml")
    
    const fileUploadReference = page.locator('(//input[@type="file"])[2]')
  //file path for upload
   await fileUploadReference.setInputFiles([path.join('Data/logo-white.jpg'),
    path.join('Data/logo2.jpg')])
   await page.locator('//span[text()="Upload"]').click()
//Validating file uploaded
    const verifyfileUpload = await page.locator('//span[text()="Successful"]').innerText()
    console.log("The file uploaded is:",verifyfileUpload);

})
