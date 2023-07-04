import{expect, test} from "@playwright/test";
import moment from "moment";

 test("Interaction with inputs", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const messageInput = page.locator("input#user-message")
    await messageInput.scrollIntoViewIfNeeded()
    console.log(await messageInput.getAttribute("placeholder"))
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")
    console.log('Enter message before value: ' + await messageInput.inputValue())
    await messageInput.type("I'm a monster")
    console.log('Enter message after value: ' + await messageInput.inputValue())
 })

 test("Sum", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const sum1 = page.locator("input#sum1")
    const sum2 = page.locator("input#sum2")
    const getSum_btn = page.locator("//button[text()='Get Sum']")
    await getSum_btn.scrollIntoViewIfNeeded()
    const result = page.locator("#addmessage")

    let num1 = 12;
    let num2 = 13;
   
    //this validation can be skipped. You can go directly to entering value
    console.log(await sum1.getAttribute("placeholder"))
    expect(sum1).toHaveAttribute("placeholder", "Please enter first value")
    console.log(await sum2.getAttribute("placeholder"))
    expect(sum2).toHaveAttribute("placeholder", "Please enter second value")

    await sum1.type("" + num1)
    await sum2.type("" + num2)
    await getSum_btn.click()
    //console.log('The sum of '+ num1 +' + ' + num2 + ' is ' + result.textContent)
    let sum = num1 + num2;
    expect (result).toHaveText("" + sum) 

 })