import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Módulo de Autenticación - SauceDemo E-Commerce', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
  });

  test('TC-LOG-01: Login exitoso con credenciales válidas', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    
    // Verificamos redirección al catálogo de productos
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('TC-LOG-02: Error al intentar ingresar con un usuario bloqueado', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.assertErrorMessage('Epic sadface: Sorry, this user has been locked out.');
  });

  test('TC-LOG-03: Error al ingresar credenciales inválidas', async () => {
    await loginPage.login('invalid_user', 'wrong_password');
    await loginPage.assertErrorMessage('Username and password do not match');
  });
});