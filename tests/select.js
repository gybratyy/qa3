const { By } = require("selenium-webdriver");
const { setupDriver, teardownDriver } = require("../utils/setup");

describe("Task 3: Select Class", function () {
  this.timeout(30000);
  let driver;

  before(async () => {
    driver = await setupDriver();
    await driver.get("http://demo.automationtesting.in/Register.html");
  });

  after(async () => {
    await teardownDriver();
  });

  it("Select Dropdown Option", async () => {
    const dropdown = await driver.findElement(By.id("Skills"));
    const options = await dropdown.findElements(By.tagName("option"));

    for (const option of options) {
      const text = await option.getText();
      if (text === "APIs") {
        await option.click();
        console.log("APIs selected!");
        break;
      }
    }
  });
});
