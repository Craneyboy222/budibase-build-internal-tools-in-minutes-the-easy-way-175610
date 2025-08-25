import { test, expect } from '@playwright/test';

test.describe('Database End-to-End Tests', () => {
  test('User can login and see their applications', async ({ page }) => {
    await page.goto('/login');
    await page.fill('#email', 'user@example.com');
    await page.fill('#password', 'password123');
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/dashboard');
    const applications = await page.$$('div.application-item');
    expect(applications.length).toBeGreaterThan(0);
  });

  // Additional E2E tests...
});