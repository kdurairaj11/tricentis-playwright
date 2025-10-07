import { test, expect } from './fixtures/tricentis-fixtures';
import { fillProductPage } from '../pages/productPage';

test('navigate and fill product page', async ({ page, productData, baseUrl }) => {
  await page.goto(baseUrl);
  await page.reload();

  await page.getByText('Enter Product Data').click();


  await fillProductPage(page, productData);

  await expect(page.getByText('Please, complete the first three steps to see the price table.')).toBeVisible();
});
