import{expect, test} from "@playwright/test";
import moment from "moment";

test("Handling multiple Tabs",async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")
    console.log(page.url())

    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'")
    ])
    console.log(newWindow.url())
})

test("Handling multiple from a single button",async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")
    let facebookPage;
    let twitterPage;
    let lambdaPage;
    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ])
    await page.waitForLoadState()
    const pages = multiPage.context().pages()
    console.log('No of tabs: ' + pages.length)

    //Display all tabs that are open
    pages.forEach(tab => {
        console.log(tab.url())
    })

    for (let index = 0; index < pages.length; index++) {
        const url = pages[index].url()
        if (url == "https://www.facebook.com/lambdatest/") {
            facebookPage = pages[index]
        }else if(url == "https://twitter.com/i/flow/login?redirect_after_login=%2Fintent%2Ffollow%3Fscreen_name%3DLambdatesting")
            twitterPage = pages[index]
         }
    const text = await facebookPage.textContent("//h1")
    console.log(text)
})

test ("Handling Calendars", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
    let date = "1990-01-01"
    await page.fill("#birthday", date)
    page.waitForTimeout(4000)
})