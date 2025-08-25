export const testApiResponses = (page) => {
  page.route('**/api/users', route => route.fulfill({
    status: 200,
    body: JSON.stringify([{ id: 1, name: 'Test User' }]),
  }));

  page.route('**/api/applications', route => route.fulfill({
    status: 200,
    body: JSON.stringify([{ id: 1, name: 'Test Application' }]),
  }));
};
