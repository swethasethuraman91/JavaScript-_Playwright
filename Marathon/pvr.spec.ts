import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.pvrcinemas.com/');
  //seleccting from dropdown
  await page.locator('div:nth-child(7) > .cities-names > .cities-overlay').click();
  await page.getByText('Cinema', { exact: true }).click();
  await page.locator('.custom-dropdown-arrows > img').click();
  await page.locator('span').filter({ hasText: 'Select Cinema' }).click();
  await page.getByText('INOX The Marina Mall, OMR,').click();
  await page.getByText('Tomorrow, 25 Jul').click();
  await page.getByRole('listbox').locator('li').filter({ hasText: 'THE ODYSSEY' }).click();
  await page.getByText(':40 PM English').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('button', { name: 'Accept' }).click();
  //seat selection
  await page.getByText('4').nth(5).click();  
  await page.getByText('3').nth(2).click();
 //printing bill
  const mov_name  =await page.locator('//h5').innerText();
  const total_amt = await page.locator('//div[@class ="grand-prices"]').innerText();
 console.log("-------------------------");
 
  console.log("Movie name : ", mov_name)
  console.log( "Grand Total : ", total_amt)
  
console.log("-------------------------");

});
