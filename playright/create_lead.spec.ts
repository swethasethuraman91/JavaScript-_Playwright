import {test} from "@playwright/test";

//test class
test ("Create_lead", async({page}) =>{

//url navigation
    await page.goto("http://leaftaps.com/opentaps/control/main");
//credentials check
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");

//login button check and navigation to next page
    page.locator('input[type ="submit"]').click();

//login to myHome page
    await page.locator('#button').click();

//leads tabs selection
    page.getByText('Leads', { exact: true }).click();

page.getByText('Create Lead', { exact: true }).click();

//filling create lead
    page.locator("#createLeadForm_companyName").fill("playwrightjs");
    page.locator("#createLeadForm_firstName").fill("swetha");
    page.locator("#createLeadForm_lastName").fill("s");
    page.locator("#createLeadForm_personalTitle").fill("Mrs");
    page.locator("#createLeadForm_generalProfTitle").fill("Tester");
    page.locator("#createLeadForm_annualRevenue").fill("9099900");
    page.locator("#createLeadForm_departmentName").fill("Playwright");
/*//iterating source
    const dd_Values = await page.locator('#createLeadForm_dataSourceId ').allInnerTexts();
    for (const option of dd_Values)
    {
        console.log("source options:->" , option);
    }
    page.locator("#createLeadForm_primaryPhoneNumber").fill("9876543210");*/
//submit
    await page.locator('.smallSubmit').click();
    console.log("page submitted");
   // await page.pause(); 
   });