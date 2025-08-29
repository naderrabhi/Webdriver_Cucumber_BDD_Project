const { After, AfterAll, Status, Before } = require("@cucumber/cucumber");
const { initDriver, getDriver } = require("./world");

Before(async function () {
  // Initialize driver if not initialized
  if (!getDriver()) {
    await initDriver();
  }
});

After(async function (scenario) {
  // Take screenshot on failure
  if (scenario.result.status === Status.FAILED) {
    const screenshot = await getDriver().takeScreenshot();
    await this.attach(screenshot, "image/png");
  }
});

AfterAll(async function () {
  const driver = getDriver();
  if (driver) {
    await driver.quit();
  }
});
