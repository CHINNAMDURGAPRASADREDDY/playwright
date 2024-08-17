// tests/assertions.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Assertion Tests', () => {
    test('should assert multiple conditions', async ({ page }) => {
        await page.goto('file:///' + __dirname + '/index.html');
        const header = page.locator('#header');
        const button = page.locator('#click-me');
        const result = page.locator('#result');

        await expect(header).toHaveText('Hello, World!');
        await expect(button).toBeEnabled();
        await expect(result).toHaveText('Initial Text');
    });
});
