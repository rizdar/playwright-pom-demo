import { expect } from '@playwright/test';

exports.Cart = class Cart {
  constructor(page) {
    this.page = page;
    this.itemName = page.locator("//div[@class='inventory_item_name']");
    this.buttonCheckout = page.locator('#checkout');
  }

  async verifyProductName(productName) {
    await expect(await this.itemName.textContent()).toBe(productName);
  }

  async checkout() {
    await this.buttonCheckout.click();
  }
};
