const {test, expect} = require('@playwright/test');

//test which require browser with some cookie settings
test("Browser Context Testcase", async ({browser})=>
{
    const context = await browser.newContext();
    //creates new page here we will give url and then automate
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
})

//test which require default browser and no pre-requiste-- no need to initialize browser /page playwright will automatically take care
//test.only ==> it will run only this test
test("Page playwright testcase", async ({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
        //to get tile and use assertion to check whether it is the expected title
        //to enter value in text box type/fill can be used, from latest version type is deprecated
        await page.locator('#username').fill("rahulshetty")
        await page.locator('#password').fill('learning')
        await page.locator('#signInBtn').click()
        //the above creds will give error to get the error message below coding is done
        //regex can be used in CSS selector
        //style = none when no error message is there, it will turn to block only when error message is displayed
        //textcontent() --to extract the text
        console.log(await page.locator("[style*='block']").textContent()) 
        //to check whether the expected text is present
        await expect(page.locator("[style*='block']")).toContainText("password")
        //valid username , password and check dashboard is loading
        await page.locator('#username').fill(" ") //wipes the existing data
        await page.locator('#username').fill("rahulshettyacademy")
        await page.locator('#signInBtn').click()
        //to grab title of first product displayed in the page
        console.log(await page.locator(".card-body a").first().textContent());//reteive first elemnt
        console.log(await page.locator(".card-body a").nth(1).textContent()); //retrive second element
        console.log(await page.locator(".card-body a").last().textContent()); //retrive last element



    })