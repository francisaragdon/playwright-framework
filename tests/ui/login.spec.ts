import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { config } from '../../config/env';

test('User login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToUrl(config.baseUrl)
    await loginPage.login(config.username,config.password);
    await loginPage.assertTitle(config.pageTitle);
});

