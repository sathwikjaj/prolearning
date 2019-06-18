let { Given, Then, When } = require("cucumber");
let page = require("../Page/Test_one_Page");
const { assert, expect, should } = require("chai");


Given(/^I navigate to the website$/, function () {
    return page.navigateToSite().then(() => {
        console.log("Step 1 complete")
    }).catch(function (err) {
        console.log(err);
        expect.fail(null, null, err);
    })
});

When(/^I click on the sign-in link$/, function (callback) {
    console.log("yes2");
    callback();
});

When(/^I navigate to the login page$/, function (callback) {
    console.log("yes3");
    callback();
});

Then(/^I enter the (.*) and (.*)$/, function (email, password, callback) {
    console.log("yes4" + email + password);
    callback();
});

Then(/^I click on the sign-in button$/, function (callback) {
    console.log("yes5");
    callback();
});

Then(/^I navigate to the account page$/, function (callback) {
    console.log("yes5");
    callback();
});