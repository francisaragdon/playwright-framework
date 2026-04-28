import { test, expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    private page: Page;

    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('#login-button');
        this.errorMessage = page.locator('.error-message-container');
    }

    async goToUrl(url: string) {
        await this.page.goto(url);
    }

    async assertTitle(title: string) {
        await test.step('Assert login page title', async () => {
            await expect(this.page).toHaveTitle(title);
        });
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    async loginFlow(url: string, username: string, password: string, title: string) {
        await this.goToUrl(url);
        await this.login(username, password);
        await this.assertTitle(title);
    }

    async assertErrorMessage(message: string) {
        await test.step('Assert login error message', async () => {
            await expect(this.errorMessage).toContainText(message);
        });
    }
}
