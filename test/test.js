const { Builder, By, until } = require("selenium-webdriver");
const assert = require('assert');

describe("Stock App", () => {
    let driver;

    before(async() => {
      driver = await new Builder().forBrowser("chrome").build();
    });

    it("opens browser to stock app", async () => {
      await driver.get("http://localhost:3002");
      let actual = await driver.getTitle();
      let expected = "Stock Portfolio App";
      assert.equal(actual, expected );
    });

    it("goes to /signin and signs in", async () => {
      await driver.get("http://localhost:3002");
      await driver.findElement(By.id("signin")).click();
      await driver.findElement(By.name("email")).sendKeys("sayeed@email.com");
      await driver.findElement(By.name("password")).sendKeys("password");
      await driver.findElement(By.id("send")).click()
      await  driver.wait(until.elementLocated(By.id('welcome')), 5000);
      const actual = await driver.findElement(By.id("welcome")).getText();
      const expected = "Welcome, Sayeed!"
      // const actual = await driver.getCurrentUrl();
      // const expected = "http://localhost:3002/"
      assert.equal(actual, expected);
    });
});