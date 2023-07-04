import{expect, test} from "@playwright/test";
import moment from "moment";

test ("Handling Alerts 1", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    //Create event listener
     page.on("dialog", async (alert) => {
        const defaultValue = alert.message()
        console.log(defaultValue)
        await alert.accept()
     })

    //Other ways to locate an element that has multiple duplicate
    //const JSAlert = page.locator("button:has-text('Click Me').nth(0).click()")
    const JSAlert = page.locator("//p[text()='JS Alert']").click()

})

test ("Handling Alerts 2", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    //Create event listener
     page.on("dialog", async (alert) => {
        const defaultValue = alert.message()
        console.log(defaultValue)
        await alert.dismiss()
     })
    //Other ways to locate an element that has multiple duplicate
    const JSAlert = page.locator("button:has-text('Click Me')").nth(1).click()
    await page.waitForTimeout(2000)
    expect(page.locator("id=confirm-demo")).toContainText("Cancel")
})

test ("Handling Alerts 3", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    //Create event listener
     page.on("dialog", async (alert) => {
        const defaultValue = alert.defaultValue()
        console.log(defaultValue)
        await alert.accept("Monster")
     })
    //Other ways to locate an element that has multiple duplicate
    const promptMessage = page.locator("id=prompt-demo")
    await promptMessage.scrollIntoViewIfNeeded()
    const JSAlert = page.locator("button:has-text('Click Me')").nth(2).click()
    expect(promptMessage).toContainText("'Monster'")
})

test ("Handling Bootstrap modal", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")
    await page.click("//button[@data-target='#myModal']")
    await page.click("(//button[text()='Save Changes'])[1]")
})