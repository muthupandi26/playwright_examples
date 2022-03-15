const { test, expect } = require('@playwright/test');
const { Constant } = require('../support/constants');
const { BaseAction } = require('../support/baseAction');

test('my test', async ({ page }) => {
//   await page.goto(Constant.BASE_URL);
  const homepage = new BaseAction(page);
  await homepage.goto(Constant.BASE_URL);


  await page.close();
});