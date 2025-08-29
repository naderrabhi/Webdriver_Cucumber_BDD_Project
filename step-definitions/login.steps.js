const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const LoginPage = require("../pages/LoginPage");
const HomePage = require("../pages/HomePage");
const { getDriver } = require("../support/world");

let loginPage, homePage;

Given("I am on the SauceDemo login page", async function () {
  const driver = getDriver();
  loginPage = new LoginPage(driver);
  homePage = new HomePage(driver);
  await loginPage.open();
});

When("I login with username {string} and password {string}", async function (username, password) {
  await loginPage.login(username, password);
});

Then("I should see the products page", async function () {
  const ok = await homePage.isDisplayed();
  expect(ok).to.equal(true);
});

Then("I should see error {string}", async function (expectedError) {
  const error = await loginPage.getErrorMessage();
  expect(error).to.include(expectedError);
});