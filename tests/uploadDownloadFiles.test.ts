import {chromium, test} from "@playwright/test"
test("How to download files",async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo")
    await page.type("#textbox", "Hatedogs")
    await page.click("id=create")

    
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ])
    // const path = await download[0].path()
    // console.log(path)
    const fileName =  download[0].suggestedFilename()
    console.log(fileName)
    await download[0].saveAs('files\\downloads\\' + fileName)
    
    console.log(download.map)
    await page.waitForTimeout(4000)
})

test("How to upload image",async ({page}) => {

    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")
    await page.setInputFiles("input[type='file']", 
    "files/uploads/testupload.jpg")
    await page.waitForTimeout(4000)
})

test("How to upload files",async ({page}) => {

    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")
    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple()
    console.log(isMultiple)
    uploadFiles.setFiles(
        ["files/uploads/testupload.jpg",
         "files/uploads/testupload2.jpg"]
    )
    await page.waitForTimeout(4000)
})