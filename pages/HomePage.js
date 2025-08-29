const { By, until } = require("selenium-webdriver");


class HomePage {
constructor(driver) {
this.driver = driver;
this.productsTitle = By.className("title");
this.inventoryContainer = By.id("inventory_container");
}


async isDisplayed() {
await this.driver.wait(until.elementLocated(this.productsTitle), 5000);
const text = await this.driver.findElement(this.productsTitle).getText();
return text === "Products";
}
}


module.exports = HomePage;