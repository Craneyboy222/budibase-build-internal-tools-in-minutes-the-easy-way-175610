import { test, expect } from '@playwright/test';

test.describe('Authentication Tests', () => {
  test('should allow a user to log in with valid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/dashboard');
  });

  test('should not allow a user to log in with invalid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="username"]', 'invaliduser');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message')).toBeVisible();
  });

  test('should allow a user to log out', async ({ page }) => {
    await page.goto('/dashboard');
    await page.click('button#logout');
    await expect(page).toHaveURL('/login');
  });
});
