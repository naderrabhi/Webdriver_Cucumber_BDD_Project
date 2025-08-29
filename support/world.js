const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
require("chromedriver");

let driver;

async function initDriver() {
  const options = new chrome.Options();
  
  options.addArguments("--no-default-browser-check");
  options.addArguments("--disable-extensions");
  options.addArguments("--disable-popup-blocking");
  options.addArguments("--disable-infobars");
  options.addArguments("--disable-notifications");
  options.addArguments("--disable-gpu");
  options.addArguments("--disable-password-manager-reauthentication");
  options.addArguments("--disable-save-password-bubble");
  options.addArguments("--incognito");
  
  driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();
    
  await driver.manage().window().maximize();
  return driver;
}

module.exports = { initDriver, getDriver: () => driver };
