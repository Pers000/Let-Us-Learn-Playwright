import{expect, test} from "@playwright/test";
import moment from "moment";

test ("Handling dropdown", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    await page.selectOption("#select-demo", {label: "Tuesday"})
    await page.waitForTimeout(4000)
    await page.selectOption("#select-demo", {value: "Friday"})
    await page.waitForTimeout(4000)
    await page.selectOption("#select-demo", {index: 6})
    await page.waitForTimeout(4000)
})

test("Handling multiple select", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    await page.selectOption("#multi-select",[
        {index: 5},
        {label: "California"},
        {value: "Washington"}
    ])
    await page.waitForTimeout(4000)
})

test("Handling bootstrap dropdown", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
    await page.click("#country+span")
     page.locator("ul#select2-country-results").locator("li", {hasText: "Hong Kong"}).click()
    await page.waitForTimeout(4000)
})

test("Handling bootstrap dropdown 2", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
    await selectCountry("Denmark")
    await selectCountry("Hong Kong")

   async function selectCountry (countryName) {
    await page.click("#country+span")
    page.locator("ul#select2-country-results").locator("li", {hasText: countryName}).click()
    await page.waitForTimeout(4000)
   }
})