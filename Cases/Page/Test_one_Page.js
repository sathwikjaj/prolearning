const { assert, expect, should } = require("chai")
let pageObject = require("../PageObject/Test_one_PageObject");


function navigateToSite() {
    browser.get("http://automationpractice.com/index.php");
    // return browser.sleep(5000).then(()=>{
        return expect(browser.getCurrentUrl()).toBe('https://angularjs.org/').then(()=>{
        // return pageObject.elements.SITE_LOGO.isPresent().then(() => {
            console.log("Navigate to site!!!!");
        })
    // })
 
}


module.exports = { navigateToSite }