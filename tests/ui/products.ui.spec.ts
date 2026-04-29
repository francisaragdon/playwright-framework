import { test } from '../fixtures/ui/test-fixture';
import { config } from '../../src/config/env';
import loginData from '../../src/data/ui/users.json';

test('User adds product to cart', async ({ loginPage, productsPage }) => {
    await productsPage.addToCart('sauce-labs-backpack');
});

