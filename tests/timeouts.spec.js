// tests/timeouts.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Timeout Tests', () => {
    test('should have sufficient time to pass', async ({ page }) => {
        await page.goto('file:///' + __dirname + '/index.html');
        const result = page.locator('#result');
        await page.waitForTimeout(5000); // Wait for 5 seconds
        await expect(result).toHaveText('Initial Text');
    });
});
