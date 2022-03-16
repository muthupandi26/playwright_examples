const { test, expect } = require('@playwright/test');
const { Constant } = require('../support/constants');
const { BaseAction } = require('../support/baseAction');
const { When } = require('@cucumber/cucumber');


When('Now go to the facebook page', () => {
  test('my test', async ({ page }) => {
    //   await page.goto(Constant.BASE_URL);
      const homepage = new BaseAction(page);
      await homepage.goto(Constant.BASE_URL);
      await page.fill('//input[@id="email"]', "check");
      await page.fill('//input[@id="pass"]', 'password');
    
    await page.pause();
      await page.close();
    });
})

