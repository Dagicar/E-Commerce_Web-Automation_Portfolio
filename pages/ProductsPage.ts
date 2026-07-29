import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly inventoryItems: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
  }

  async addProductToCartByName(productName: string) {
    const productContainer = this.inventoryItems.filter({ hasText: productName });
    await productContainer.getByRole('button', { name: 'Add to cart' }).click();
  }

  async verifyCartBadgeCount(expectedCount: string) {
    await expect(this.shoppingCartBadge).toHaveText(expectedCount);
  }
}