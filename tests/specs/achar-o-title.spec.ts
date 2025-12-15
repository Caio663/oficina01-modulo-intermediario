import { test, expect } from '@playwright/test';
import { AcharOTitlePage } from '../pages/achar-o-title';

test('valida clique no heading', async ({ page }) => {
  const acharTitle = new AcharOTitlePage(page);

  await acharTitle.goto();
  await acharTitle.clickHeading();

  await expect(
    page.getByRole('heading', { name: 'IMC e ALIMENTAÇÃO CORRETA' })
  ).toBeVisible();
});