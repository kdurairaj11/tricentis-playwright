import { Page, expect } from '@playwright/test';

export async function fillPriceOptionPage(page: Page, priceOptionData: any) {
  await page.locator(`input[name="Select Option"][value="${priceOptionData.Option}"]`).check({ force: true });

  await page.getByRole('button', {name: "Next"}).click()
}