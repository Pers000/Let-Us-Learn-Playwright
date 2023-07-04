import{expect, test} from "@playwright/test";
import moment from "moment";

test("Handling frames", async ({page}) => {
    await page.goto("https://letcode.in/frame")
    let fName = "Monster"
    let lName = "Thutty"
    const allFrame = page.frames()
    console.log("Total number of frames: " + allFrame.length)

    //how to move to a specific frame
    const firstFr = page.frame("firstFr")
    //if(firstFr != null){await firstFr.fill("", "")} <= this is the same as line below
    await firstFr?.fill("input[name='fname']", "Monster")
    await firstFr?.fill("input[name='lname']", "Thutty")
    expect(await firstFr?.locator("p.has-text-info").textContent()).toContain("You have entered " + fName + " " + lName)
    await page.waitForTimeout(4000)

  
})

test("Handling frames 2", async ({page}) => {
    await page.goto("https://letcode.in/frame")
    let fName = "Monster"
    let lName = "Thutty"
    const allFrame = page.frames()
    console.log("Total number of frames: " + allFrame.length)

    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("Monster")   
    await frame.locator("input[name='lname']").fill("Thutty")  
  
})

test("Handling nested frames", async ({page}) => {
    await page.goto("https://letcode.in/frame")
    let fName = "Monster"
    let lName = "Thutty"
    const allFrame = page.frames()
    console.log("Total number of frames: " + allFrame.length)

    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("Monster")   
    await frame.locator("input[name='lname']").fill("Thutty")  

    const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill("samplea@email.com")

    await frame.locator("input[name='fname']").fill("Monster Clear")   
    await frame.locator("input[name='lname']").fill("Thutty Clear")  
})
