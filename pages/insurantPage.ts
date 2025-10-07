import { Page, expect } from '@playwright/test';

export async function fillInsurantPage(page: Page, insurantData: any) {
  await page.locator('#firstname').fill(insurantData.FirstName);
  await page.locator('#lastname').fill(insurantData.LastName);
  await page.locator('#birthdate').fill(insurantData.DateOfBirth);
  await page.locator(`input[name="Gender"][value="${insurantData.Gender}"]`).check({ force: true });
  await page.locator('#streetaddress').fill(insurantData.StreetAddress);
  await page.locator('#country').selectOption(insurantData.Country);
  await page.locator('#zipcode').fill(insurantData.ZipCode);
  await page.locator('#city').fill(insurantData.City);
  await page.locator('#occupation').selectOption(insurantData.Occupation);

  for (const hobby of insurantData.Hobbies) {
    await page.locator(`input[name="Hobbies"][value="${hobby}"]`).check({ force: true });
  }

  await page.locator('#website').fill(insurantData.Website);
  await page.locator('#picture').fill(insurantData.Picture);

  await page.getByRole('button', {name: "Next"}).click()
}