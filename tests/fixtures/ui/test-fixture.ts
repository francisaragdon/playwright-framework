import { test as base } from '@playwright/test';
import { LoginPage } from '../../../src/ui/pages/LoginPage';
import { ProductsPage } from '../../../src/ui/pages/ProductsPage';
import { config } from '../../../src/config/env';
import loginData from '../../../src/data/ui/users.json';

type MyFixtures = {
    loginPage: LoginPage;
    productsPage: ProductsPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        //login logic
        const loginPage = new LoginPage(page);
        await loginPage.loginFlow(
            config.baseUrl,
            loginData.valid[0].username,
            loginData.valid[0].password,
            loginData.ui.loginPage.expectedTitle
        );
        await use(loginPage);
    },

    productsPage: async ({ page }, use) => {
        await use(new ProductsPage(page));
    },
});

export { expect } from '@playwright/test';
