const { Builder } = require("selenium-webdriver");

let driver;

async function setupDriver() {
  driver = await new Builder().forBrowser("chrome").build();
  return driver;
}

async function teardownDriver() {
  if (driver) {
    await driver.quit();
  }
}

module.exports = { setupDriver, teardownDriver };
