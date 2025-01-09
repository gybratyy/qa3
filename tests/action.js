const { By } = require("selenium-webdriver");
const { setupDriver, teardownDriver } = require("../utils/setup");

describe("Task 2: Action Class", function () {
  this.timeout(30000);
  let driver;

  before(async () => {
    driver = await setupDriver();
    await driver.get("https://demo.automationtesting.in/Static.html");
  });

  after(async () => {
    await teardownDriver();
  });

  it("Perform Mouse Hover and Drag-and-Drop", async () => {
    const actions = driver.actions({ bridge: true });
    const source = await driver.findElement(By.id("angular"));
    const target = await driver.findElement(By.id("droparea"));

    await actions.dragAndDrop(source, target).perform();
  });
});
