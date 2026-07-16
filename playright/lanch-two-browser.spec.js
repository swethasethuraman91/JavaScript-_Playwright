import { chromium, test, webkit } from "@playwright/test"; //import test
  
test("To launch a browser", async () => {
  // 1. Launch Browser Instance A (Chromium)
  const browserA = await chromium.launch({ headless: false, channel: "chrome" });
  const contextA = await browserA.newContext();
  const pageA = await contextA.newPage();
  await pageA.goto('https://www.redbus.in');
      console.log(await pageA.title());
      console.log(await pageA.url());


  // 2. Launch Browser Instance B (webkit)
  const browserB = await webkit.launch({ headless: false , channel: "webkit" }); // or use chromium.launch again
  const contextB = await browserB.newContext();
  const pageB = await contextB.newPage();
  await pageB.goto('https://www.flipkart.com');
      console.log(await pageB.title());
      console.log(await pageB.url());

  // 3. Pause script so both windows stay open on screen
  await pageA.pause(); 
});
