import {chromium, test} from "@playwright/test"

test("Login test demo", async() => {
    const browser = await chromium.launch({headless: false})
    const context = await browser.newContext()
    const page = await context.newPage()
    
    // Maximize the screen by setting the viewport size to match the browser window's dimensions
    await page.setViewportSize({ width: 0, height: 0 });
    await page.goto("https://ecommerce-playground.Lambdatest.io/")
    await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]")
    //await page.click("text=Login")
    await page.click("'Login'")
    await page.fill("input[name='email']", "ponsta360v6@gmail.com")
    await page.fill("input[name='password']", "Pass123!")
    await page.click("//input[@type='submit']")
    await page.waitForTimeout(5000)

    //creating a new browser context will open another browser which does not contain same session
    const context2 = await browser.newContext()
    const page2 = await context2.newPage()
    await page2.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")
    await page2.waitForTimeout(5000)

    await browser.close()
})
