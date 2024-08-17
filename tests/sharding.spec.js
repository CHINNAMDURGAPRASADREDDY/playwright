// tests/sharding.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Sharding Tests', () => {
    test('should shard the tests', async ({ page }) => {
        await page.goto('file:///' + __dirname + '/index.html');
        const header = page.locator('#header');
        await expect(header).toHaveText('Hello, World!');
    });
});
