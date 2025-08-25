import { test as base } from '@playwright/test';

export const test = base.extend({
  async beforeEach({ page }, use) {
    await page.goto('/');
    await use(page);
  },
});
