import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { config } from '../../config/env';
import loginData from '../../../data/ui/users.json';

export class LoginHelper {
  constructor(private page: Page) { }

  async login(url: string, username: string, password: string, title: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.loginFlow(
      url,
      username,
      password,
      title
    );
  }

}
