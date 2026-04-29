import { test } from '../../fixtures/ui/test-fixture';
import { ProductsPage } from '../../src/ui/pages/ProductsPage';

test('User adds product to cart', async ({ loggedInPage }) => {
    const productsPage = new ProductsPage(loggedInPage);
    await productsPage.addToCart('sauce-labs-backpack');
});

