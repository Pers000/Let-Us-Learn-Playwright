import{expect, test} from "@playwright/test";
import moment from "moment";

test ("Test Checkbox", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")

    //Single Checkbox
    const singelChecbox = page.locator("id=isAgeSelected")
    expect(singelChecbox).not.toBeChecked()
    await singelChecbox.check()
    expect(singelChecbox).toBeChecked()

    //Disable Checkbox
    //Multiple Checkbox

})
