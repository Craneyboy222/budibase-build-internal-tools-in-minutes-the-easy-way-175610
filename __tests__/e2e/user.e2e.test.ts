import { test, expect } from '@playwright/test';

test.describe('User Management Tests', () => {
  test('should allow an admin to create a new user', async ({ page }) => {
    await page.goto('/admin/users');
    await page.click('button#new-user');
    await page.fill('input[name="username"]', 'newuser');
    await page.fill('input[name="email"]', 'newuser@example.com');
    await page.click('button#save');
    await expect(page.locator('text=newuser')).toBeVisible();
  });

  test('should allow an admin to delete a user', async ({ page }) => {
    await page.goto('/admin/users');
    await page.click('button#delete-user-newuser');
    await page.click('button#confirm-delete');
    await expect(page.locator('text=newuser')).not.toBeVisible();
  });
});
