import { test, expect } from '@playwright/test';

test('checkDisplayedElementOnHeader', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Community' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Switch between dark and light' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search (Command+K)' })).toBeVisible();
});
test('checkCorrectNameElementOnHeader', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText(
    'Playwright',
  );
  await expect(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
  await expect(page.getByRole('link', { name: 'API' })).toContainText('API');
  await expect(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
  await expect(page.getByRole('link', { name: 'Community' })).toContainText('Community');
});

test('checkAtributes', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute(
    'href',
    '/',
  );
  await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
  await expect(page.getByRole('link', { name: 'API' })).toHaveAttribute(
    'href',
    '/docs/api/class-playwright',
  );
  await expect(page.getByRole('link', { name: 'Community' })).toHaveAttribute(
    'href',
    '/community/welcome',
  );
  await expect(page.getByLabel('GitHub repository')).toHaveAttribute(
    'href',
    'https://github.com/microsoft/playwright',
  );
  await expect(page.getByLabel('Discord server')).toHaveAttribute(
    'href',
    'https://aka.ms/playwright/discord',
  );
});

test('checkSwitchingThemeMode', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Switch between dark and light').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('checkTitleText', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText(
    'Playwright enables reliable end-to-end testing for modern web apps.',
  );
});

test('checkButtonGetStarted', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
  await expect(page.getByRole('link', { name: 'Get started' })).toHaveAttribute(
    'href',
    '/docs/intro',
  );
});
