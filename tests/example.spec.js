// example.spec.js
const { test, expect } = require('@playwright/test');

test('my test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Facebook – log in or sign up/);

  await page.fill('//input[@id="email"]', '9003663966');

  await page.fill('//input[@id="pass"]', 'muthu@2699');

//   await page.pause();
  await page.close();
});