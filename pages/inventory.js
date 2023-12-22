import { expect } from '@playwright/test';

exports.Inventory = class Inventory {
  constructor(page) {
    this.page = page;
    this.buttonBackpack = page.locator('id=add-to-cart-sauce-labs-backpack');
    this.shoppingCart = page.locator("//a[@class='shopping_cart_link']");
    this.totalCart = page.locator("//a[@class='shopping_cart_link']/span");
  }

  async addToCart() {
    await this.buttonBackpack.click();
  }

  async verifyCart() {
    await expect(this.totalCart).toBeVisible();
  }

  async gotoCartPage() {
    await this.shoppingCart.click();
  }
};
