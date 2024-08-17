// tests/fixtures.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Fixture Tests', () => {
    let page;
    let context;

    test.beforeEach(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('file:///' + __dirname + '/index.html');
    });

    test.afterEach(async () => {
        await context.close();
    });

    test('should have correct header text', async () => {
        const header = page.locator('#header');
        await expect(header).toHaveText('Hello, World!');
    });
});
