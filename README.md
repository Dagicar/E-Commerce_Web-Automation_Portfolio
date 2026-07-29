# My Playwright E2E Portfolio - SauceDemo

¡Hola! En este repositorio armé una suite de pruebas automatizadas End-to-End (E2E) para la web de e-commerce SauceDemo. 

El objetivo principal fue aplicar buenas prácticas de automatización desde cero, organizando el código con el patrón **Page Object Model (POM)** y dejando las pruebas integradas a un pipeline en **GitHub Actions**.

---

## 🛠️ Lo que usé

* **Playwright** + **TypeScript**
* **Page Object Model (POM)** para mantener el código limpio y mantenible.
* **GitHub Actions** para que los tests corran automáticamente en la nube con cada push.

---

##  ¿Qué prueban estos tests?

Estructuré la suite en 3 módulos principales:

1. **Login (`login.spec.ts`):**
   * Validación de inicio de sesión correcto.
   * Manejo de errores para usuarios bloqueados y credenciales incorrectas.

2. **Productos y Carrito (`products.spec.ts`):**
   * Búsqueda y selección de productos por nombre.
   * Verificación del contador del carrito al agregar items.

3. **Checkout (`checkout.spec.ts`):**
   * Flujo E2E completo: Login $\rightarrow$ Selección de productos $\rightarrow$ Datos de envío $\rightarrow$ Confirmación de orden.

---

##  Cómo correrlo en tu máquina

Si quieres probar los tests localmente, sigue estos pasos:

1. Clona el repo e instala las dependencias:
   ```bash
   git clone https://github.com/Dagicar/E-Commerce_Web-Automation_Portfolio.git
   cd E-Commerce_Web-Automation_Portfolio
   npm install
   ```

2. Instala los navegadores de Playwright:
    ```bash 
    npx playwright install  
    ```
3. Ejecuta las pruebas:
    ```bash 
    npx playwright test  
    ```
4. Para ver el reporte HTML interactivo:
    ```bash
    npx playwright show-report  
    ```
