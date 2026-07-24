import {test} from "@playwright/test"

test("authentication" , async ({page}) => {
    //login page
  await page.goto("https://leaftaps.com/opentaps/control/main")
  await page.getByLabel("Username").first().fill ("democsr2")
  await page.getByText("Password").fill("crmsfa")
  await page.getByRole("button",{name : "Login"}).click()
  //sesesion creation 
  page.context().storageState({path:'data/userInfo.json'})
    
})
