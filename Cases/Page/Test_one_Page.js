const { assert, expect, should } = require("chai")
let pageObject = require("../PageObject/Test_one_PageObject");


function navigateToSite() {
    browser.driver.get(pageObject.url.SITE_URL);
    return pageObject.elements.SITE_LOGO.isPresent().then(() => {
        console.log("Navigate to site!!!!");
    })
}


module.exports = { navigateToSite }