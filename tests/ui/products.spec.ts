import { test } from '../../fixtures/test-fixture';
import { config } from '../../config/env';

test('[@smoke] User adds product to cart', async ({ loginPage, productsPage }) => {
    await loginPage.loginFlow(config.baseUrl, config.username, config.password, config.pageTitle);
    await productsPage.addToCart('sauce-labs-backpack');
});

