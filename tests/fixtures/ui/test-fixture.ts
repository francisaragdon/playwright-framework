import { test as base, type Page } from '@playwright/test';
import { LoginPage } from '../../../src/ui/pages/LoginPage';
import { ProductsPage } from '../../../src/ui/pages/ProductsPage';
import { config } from '../../../src/config/env';
import loginData from '../../../src/data/ui/users.json';

type MyFixtures = {
    loggedInPage: Page;
    productsPage: ProductsPage;
};

export const test = base.extend<MyFixtures>({

    loggedInPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.loginFlow(
            config.baseUrl,
            loginData.valid[0].username,
            loginData.valid[0].password,
            loginData.ui.loginPage.expectedTitle
        );
        await use(page);
    },

    productsPage: async ({ loggedInPage }, use) => {
        await use(new ProductsPage(loggedInPage));
    }
});

export { expect } from '@playwright/test';
