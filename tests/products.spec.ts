import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Módulo de Catálogo y Carrito - SauceDemo', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC-PROD-01: Agregar un producto al carrito actualiza el contador', async () => {
    await productsPage.addProductToCartByName('Sauce Labs Backpack');
    await productsPage.verifyCartBadgeCount('1');
  });

  test('TC-PROD-02: Agregar múltiples productos al carrito', async () => {
    await productsPage.addProductToCartByName('Sauce Labs Backpack');
    await productsPage.addProductToCartByName('Sauce Labs Bike Light');
    await productsPage.verifyCartBadgeCount('2');
  });
});