const { By, until } = require("selenium-webdriver");
const { setupDriver, teardownDriver } = require("../utils/setup");

describe("Task 1: Wait Mechanisms", function () {
  this.timeout(30000);
  let driver;

  before(async () => {
    driver = await setupDriver();
    await driver.get("http://demo.automationtesting.in/Register.html");
  });

  after(async () => {
    await teardownDriver();
  });

  it("Implicit Wait", async () => {
    await driver.manage().setTimeouts({ implicit: 5000 });
    await driver.findElement(By.css('[ng-model="FirstName"]'));

    const element = await driver.findElement(By.css('[ng-model="FirstName"]'));
    await element.sendKeys("Gibrat");
  });

  it("Explicit Wait", async () => {
    const explicitWait = driver.wait(until.elementLocated(By.css("input[placeholder='Last Name']")), 10000);
    await explicitWait;
    
    const element = await driver.findElement(By.css("input[placeholder='Last Name']"));
    await element.sendKeys("Yerzhan");
  });

  it("Fluent Wait", async () => {
    const fluentWait = async () => {
      let conditionMet = false;
      const start = Date.now();

      while (!conditionMet && Date.now() - start < 10000) {
        try {
          const element = await driver.findElement(By.css("input[type='email']"));
          if (await element.isDisplayed()) {
            conditionMet = true;
            console.log("Element Address found!");
            element.sendKeys("gybraty@gmail.com");
          }
          
        } catch (err) {
          // Ignore errors  
        }
      }
      if (!conditionMet) throw new Error("Element not found!");
    };
    await fluentWait();


  });
});
