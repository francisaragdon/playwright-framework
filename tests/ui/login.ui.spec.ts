import { test } from '@playwright/test';
import { LoginPage } from '../../src/ui/pages/LoginPage';
import { config } from '../../src/config/env';
import loginData from '../../src/data/ui/users.json';

test('User logins with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToUrl(config.baseUrl)
    await loginPage.login(loginData.valid[0].username, loginData.valid[0].password);
    await loginPage.assertTitle(loginData.ui.loginPage.expectedTitle);
});


test.describe('User login with valid credentials', () => {
    for (const user of loginData.valid) {
        test(`Valid login for ${user.username}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.goToUrl(config.baseUrl);
            await loginPage.login(user.username, user.password);
            await loginPage.assertTitle(loginData.ui.loginPage.expectedTitle);
        });
    }
});

test.describe('User login with invalid credentials', () => {
    for (const user of loginData.invalid) {
        test(`Invalid login for ${user.username}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.goToUrl(config.baseUrl);
            await loginPage.login(user.username, user.password);
            await loginPage.assertErrorMessage(loginData.ui.errorMessage.expectedText);
        });
    }
});
