import { expect, Page } from '@playwright/test';

export class ProductsPage {
    private page: Page;

    constructor(Page: Page) {
        this.page = Page;

    }

    async addToCart(productName: string) {
        const addToCart = this.page.locator(`#add-to-cart-${productName}`);
        await addToCart.click();
        const removeBtn = this.page.locator(`#remove-${productName}`);
        await expect(removeBtn).toBeVisible();
    }

}
