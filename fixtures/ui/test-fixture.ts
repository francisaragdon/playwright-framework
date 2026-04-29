import { test as base, type Page } from '@playwright/test';
import { LoginHelper } from '../../src/ui/helpers/LoginHelper';
import { config } from '../../src/config/env';
import loginData from '../../data/ui/users.json';


type MyFixtures = {
    loggedInPage: Page;

};

export const test = base.extend<MyFixtures>({

    loggedInPage: async ({ page }, use) => {
        const loginHelper = new LoginHelper(page);
        await loginHelper.login(config.baseUrl,
            loginData.valid[0].username,
            loginData.valid[0].password,
            loginData.ui.loginPage.expectedTitle
        );
        await use(page);
    }

});

export { expect } from '@playwright/test';
