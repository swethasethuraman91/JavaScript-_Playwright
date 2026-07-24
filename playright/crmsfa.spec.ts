import{test} from "@playwright/test"
//login session useage
test.use({
    storageState : 'data/userInfo.json'
})
test("Session storage", async ({page}) =>{
    await page.goto("https://leaftaps.com/opentaps/control/login;jsessionid=EB9FBD35553E8DBB939B0F283EE242E6.jvm1")
    console.log("page Navigation successful");
})
