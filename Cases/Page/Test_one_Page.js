const { assert, expect, should } = require("chai")
let pageObject = require("../PageObject/Test_one_PageObject");
let logger = require("../../Util/logger");


function navigateToSite() {
    browser.driver.get(pageObject.url.SITE_URL);
    return pageObject.elements.SITE_LOGO.isPresent().then(() => {
        logger.info("Navigated to site");
    })
}


module.exports = { navigateToSite }