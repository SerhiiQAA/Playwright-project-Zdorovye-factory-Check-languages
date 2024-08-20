import { test, expect } from '@playwright/test';
import { HomePage } from './pages/homePage';

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1020 });
  await page.goto('/');
});

test('language UA', async ({ page }) => {
  const homePage = new HomePage(page);
  await expect(page).toHaveTitle("Фармацевтична компанія «Здоров'я»");
  await expect(page).toHaveURL(/ua/);
  await expect(homePage.header).toBeVisible();
  await expect(homePage.feedbackLink).toBeVisible();
  await expect(homePage.menuLink).toBeVisible();
});

test('language RU', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.changeLanguage('RU');
  await expect(page).toHaveTitle('Главная - Здоровье');
  await expect(page).toHaveURL(/ru/);
  await expect(homePage.feedbackLink).toBeVisible();
  await expect(homePage.menuLink).toBeVisible();
});

test('language DE', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.changeLanguage('DE');
  await expect(page).toHaveTitle('Startseite - Zdorovye');
  await expect(page).toHaveURL(/de/);
  await expect(homePage.feedbackLink).toBeVisible();
  await expect(homePage.menuLink).toBeVisible();
});

test('language ES', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.changeLanguage('ES');
  await expect(page).toHaveTitle('Inicio - Zdorovye');
  await expect(page).toHaveURL(/es/);
  await expect(homePage.feedbackLink).toBeVisible();
  await expect(homePage.menuLink).toBeVisible();
});

test('language FR', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.changeLanguage('FR');
  await expect(page).toHaveTitle('Accueil - Zdorovye');
  await expect(page).toHaveURL(/fr/);
  await expect(homePage.feedbackLink).toBeVisible();
  await expect(homePage.menuLink).toBeVisible();
});

test('language EN', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.changeLanguage('EN');
  await expect(page).toHaveTitle('Home - Zdorovye');
  await expect(page).toHaveURL(/en/);
  await expect(homePage.feedbackLink).toBeVisible();
  await expect(homePage.menuLink).toBeVisible();
});
