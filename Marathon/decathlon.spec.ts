import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.decathlon.in/');
 //search shoes
 await page.locator('//input[@type="search"]').fill("shoes");
 await page.locator('//input[@type="search"]').press("Enter");
  //filter option
 await page.getByRole('button',{name :"Gender"}).click();
 await page.locator('[data-test-id="filter-checkbox-gender_id_en-MEN"]').click();
 //await page.locator('[data-test-id="filter-sidebar-desktop:container"]').scrollIntoViewIfNeeded();
 //await page.getByRole('button',{name :"Sport"}).click();
 await page.locator('[data-test-id="filter-sidebar-desktop:container"]').getByRole('button',{name :"Sport"}).click();
 await page.locator('[data-test-id="filter-checkbox-sport_pratice_en-Running"]').click();
 await page.getByRole('button',{name :"Size"}).click();
 await page.locator('[data-test-id="filter-checkbox-indian_size-UK 10.5 - EU 45"]').click();
  //selecting option
 await page.getByRole('link',{ name :" JOGFLOW 190.1 Run Men"}).click();
  //cart
await page.getByRole('button', {name: "UK 10.5 - EU 45"}).click();
await page.locator('[data-test-id="pdp:add-to-cart-button"]').click();
await page.locator('[data-test-id="header-desktop:cart-icon"]').click();
  //total value
const total_amt = await page.locator('[data-test-id="cart:cart-checkout-total-cart-value"]').innerText();
 console.log("-------------------------");
 console.log("ORDER SUMMERY");
  console.log("Total : ", total_amt);
console.log("-------------------------");
});
