import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Módulo 3: Proceso de Checkout y Compra - SauceDemo', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC-CHK-01: Completar la compra de un producto de manera exitosa', async () => {
    // 1. Agregar producto al carrito
    await productsPage.addProductToCartByName('Sauce Labs Backpack');
    
    // 2. Ir al carrito e iniciar checkout
    await checkoutPage.goToCart();
    await checkoutPage.proceedToCheckout();

    // 3. Llenar datos de comprador y confirmar
    await checkoutPage.fillCheckoutInformation('Gian', 'Dev', '20001');
    await checkoutPage.finishOrder();

    // 4. Validar pantalla de orden exitosa
    await checkoutPage.verifyOrderSuccess();
  });
});