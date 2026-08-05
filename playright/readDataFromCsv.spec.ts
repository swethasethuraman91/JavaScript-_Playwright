import {test} from "@playwright/test"
import {parse} from "csv-parse/sync"
import fs from "fs"
import path from "path"

let records =parse(fs.readFileSync('Data/loginData.csv',"utf-8"),{
    skip_empty_lines:true,//ignore blank line
     columns:true//converts first line headerinto object
    }) as any[];
//loop for multi record data to excecute
for(let loginData of records){
    //let rawdata:any = loginData;
    test(`Multiple records from csv file - ${loginData.TCID}`,async ({page}) => {
       
        await page.goto("https://leaftaps.com/opentaps/control/main")
          await page.locator('#username').fill(loginData.username)
        await page.locator('#password').fill(loginData.password);
        
        await page.locator('.decorativeSubmit').click();
    
    })
}
