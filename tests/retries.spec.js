// tests/retries.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Retry Tests', () => {
    test('should retry on failure', async ({ page }) => {
        await page.goto('file:///' + __dirname + '/index.html');
        const result = page.locator('#result');
        await expect(result).toHaveText('Initial Text');
    });
});
