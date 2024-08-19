import { test, expect } from '@playwright/test';

// / <reference types="cypress" />
test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1020 });
  await page.goto('/');
});

test('language UA', async ({ page }) => {
  await expect(page).toHaveTitle("Фармацевтична компанія «Здоров'я»");
  await expect(page).toHaveURL(/ua/);
  await expect(page.locator('header > .wrapper')).toBeVisible();
  const scope = page.locator('header > .wrapper');
  await expect(scope.getByText(/Зворотній зв'язок/).first()).toBeVisible();
  await expect(scope.getByText(/Меню/).first()).toBeVisible();
});

test('language RU', async ({ page }) => {
  await page.locator('.language > a').click();
  await page
    .locator('.lang-item:nth-child(1) > [href="https://zt.com.ua/ru/"]')
    .click();
  await expect(page).toHaveTitle('Главная - Здоровье');
  await expect(page).toHaveURL(/ru/);
  const scope = page.locator('header > .wrapper');
  await expect(scope.getByText(/Обратная связь/).first()).toBeVisible();
  await expect(scope.getByText(/Меню/).first()).toBeVisible();
});

test('language DE', async ({ page }) => {
  await page.locator('.language > a').click();
  await page
    .locator('.lang-item:nth-child(2) > [href="https://zt.com.ua/de/"]')
    .click();
  await expect(page).toHaveTitle('Startseite - Zdorovye');
  await expect(page).toHaveURL(/de/);
  const scope = page.locator('header > .wrapper');
  await expect(scope.getByText(/Rückkopplung/).first()).toBeVisible();
  await expect(scope.getByText(/Menü/).first()).toBeVisible();
});

test('language ES', async ({ page }) => {
  await page.locator('.language > a').click();
  await page
    .locator('.lang-item:nth-child(3) > [href="https://zt.com.ua/es/"]')
    .click();
  await expect(page).toHaveTitle('Inicio - Zdorovye');
  await expect(page).toHaveURL(/es/);
  const scope = page.locator('header > .wrapper');
  await expect(scope.getByText(/Realimentación /).first()).toBeVisible();
  await expect(scope.getByText(/Menú/).first()).toBeVisible();
});

test('language FR', async ({ page }) => {
  await page.locator('.language > a').click();
  await page
    .locator('.lang-item:nth-child(4) > [href="https://zt.com.ua/fr/"]')
    .click();
  await expect(page).toHaveTitle('Accueil - Zdorovye');
  await expect(page).toHaveURL(/fr/);
  const scope = page.locator('header > .wrapper');
  await expect(scope.getByText(/Réaction/).first()).toBeVisible();
  await expect(scope.getByText(/Menu/).first()).toBeVisible();
});

test('language EN', async ({ page }) => {
  await page.locator('.language > a').click();
  await page
    .locator('.lang-item:nth-child(5) > [href="https://zt.com.ua/en/"]')
    .click();
  await expect(page).toHaveTitle('Homes - Zdorovye');
  await expect(page).toHaveURL(/en/);
  const scope = page.locator('header > .wrapper');
  await expect(scope.getByText(/Feedback/).first()).toBeVisible();
  await expect(scope.getByText(/Menu/).first()).toBeVisible();
});
