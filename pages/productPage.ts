import { Page, expect } from '@playwright/test';

export async function fillProductPage(page: Page, productData: any) {
  await page.locator('#startdate').fill(productData.StartDate);
  await page.locator('#insurancesum').selectOption(productData.InsuranceSum);
  await page.locator('#meritrating').selectOption(productData.MeritRating);
  await page.locator('#damageinsurance').selectOption(productData.DamageInsurance);

  for (const option of productData.OptionalProducts) {
    await page.locator(`input[name="Optional Products[]"][id="${option}"]`).check({ force: true });
  }

  await page.locator('#courtesycar').selectOption(productData.CourtesyCar);

  await page.getByRole('button', {name: "Next"}).click()
}