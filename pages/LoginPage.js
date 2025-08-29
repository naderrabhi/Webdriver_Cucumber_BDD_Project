const { By, until } = require("selenium-webdriver");


class LoginPage {
constructor(driver) {
this.driver = driver;
this.usernameInput = By.id("user-name");
this.passwordInput = By.id("password");
this.loginButton = By.id("login-button");
this.errorMessage = By.css("h3[data-test='error']");
}


async open() {
await this.driver.get("https://www.saucedemo.com/");
await this.driver.wait(until.elementLocated(this.usernameInput), 5000);
}


async login(username, password) {
await this.driver.findElement(this.usernameInput).clear();
await this.driver.findElement(this.passwordInput).clear();


if (username !== undefined) {
await this.driver.findElement(this.usernameInput).sendKeys(username);
}
if (password !== undefined) {
await this.driver.findElement(this.passwordInput).sendKeys(password);
}
await this.driver.findElement(this.loginButton).click();
}


async getErrorMessage() {
const el = await this.driver.wait(until.elementLocated(this.errorMessage), 4000);
return el.getText();
}
}


module.exports = LoginPage;