import { Page, expect } from '@playwright/test';

export async function fillQuotePage(page: Page, quoteData: any) {
  await page.locator('#email').fill(quoteData.Email);
  await page.locator('#phone').fill(quoteData.Phone);
  await page.locator('#username').fill(quoteData.Username);
  await page.locator('#password').fill(quoteData.Password);
  await page.locator('#confirmpassword').fill(quoteData.ConfirmPassword);
  
  await page.locator('#sendemail').click();
}