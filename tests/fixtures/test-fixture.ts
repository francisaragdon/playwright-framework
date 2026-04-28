import { test as base } from '@playwright/test';
import { LoginPage } from '../../src/ui/pages/LoginPage';
import { ProductsPage } from '../../src/ui/pages/ProductsPage';

type MyFixtures = {
    loginPage: LoginPage;
    productsPage: ProductsPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    productsPage: async ({ page }, use) => {
        await use(new ProductsPage(page));
    },
});

export { expect } from '@playwright/test';