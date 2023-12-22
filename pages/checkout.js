import { expect } from '@playwright/test';

exports.Checkout = class Checkout {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continue = page.locator('#continue');
    this.finish = page.locator('#finish');
    this.completeMessage = page.locator('.complete-header');
  }

  async proccesCheckout(firstName, lastName, postalCode) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
    await this.continue.click();
    await this.finish.click();
  }

  async verifyCompleteOrder() {
    await expect(this.completeMessage).toBeVisible();
  }
};
