let { Given, Then, When } = require("cucumber");
let page = require("../Page/Test_one_Page");
const { assert, expect, should } = require("chai");


Given(/^I navigate to the website$/, function () {
    return page.navigateToSite().then(() => {
        logger.info("Step 1 Complete : Daya!! Darvaza tod do!!");
    }).catch(function (err) {
        logger.info(err);
        expect.fail(null, null, err);
    })
});

When(/^I click on the sign-in link$/, function (callback) {
    logger.info("Step 2 Complete");
    callback();
});

When(/^I navigate to the login page$/, function (callback) {
    logger.info("Step 3 Complete");
    callback();
});

Then(/^I enter the (.*) and (.*)$/, function (email, password, callback) {
    logger.info("Step 4 Complete :" + email+ "  " + password);
    callback();
});

Then(/^I click on the sign-in button$/, function (callback) {
    logger.info("Step 5 Complete");
    callback();
});

Then(/^I navigate to the account page$/, function (callback) {
    logger.info("Step 6 Complete");
    callback();
});