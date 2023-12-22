import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { Inventory } from '../pages/inventory';
import { Checkout } from '../pages/checkout';
import { Cart } from '../pages/cart';

test('Shoul be able to checkout product', async ({ page }) => {
  const home = new HomePage(page);
  const inventory = new Inventory(page);
  const cart = new Cart(page);
  const checkout = new Checkout(page);

  //login
  await home.goto('https://www.saucedemo.com/');
  await home.login('standard_user', 'secret_sauce');

  //Inventory
  await inventory.addToCart();
  await inventory.verifyCart();
  await inventory.gotoCartPage();

  //cart
  await cart.verifyProductName('Sauce Labs Backpack');
  await cart.checkout();

  //checkout
  await checkout.proccesCheckout('Rizki', 'Darmawan', '878976');
  await checkout.verifyCompleteOrder();

  await page.waitForTimeout(5000);
});
