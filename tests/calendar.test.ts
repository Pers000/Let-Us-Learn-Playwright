 import{expect, test} from "@playwright/test";
 import moment from "moment";

test ("Calendar using moments", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")

    await selectDate(15, "May 2023");

    await page.reload()  

    await selectDate(20, "June 2023");

    await page.reload()  

    await selectDate(3, "July 2023");

    async function selectDate(date: number, dateToSelect: string) {
        await page.click("//input[@placeholder='Start date']");
        const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
        const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
        const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

        //let dateToSelect: string = "January 2023";
        const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
        console.log("This :" + thisMonth);

        while (await mmYY.textContent() != dateToSelect) {
            if (thisMonth) {
                await prev.click();
            } else { await next.click(); }
        }
        await page.click(`//td[@class='day'][text()='${date}']`)
    }
    await page.waitForTimeout(3000)
})