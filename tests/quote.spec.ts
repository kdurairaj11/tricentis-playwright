import {test, expect} from './fixtures/tricentis-fixtures'
import { fillVehiclePage } from '../pages/vehiclePage';
import { fillInsurantPage } from '../pages/insurantPage';
import { fillProductPage } from '../pages/productPage';
import { fillPriceOptionPage } from '../pages/pricePage';
import { fillQuotePage } from '../pages/quotePage';


test('complete insurance form and submit', async ({ page, baseUrl, vehicleData, insurantData, productData, priceOptionData, quoteData }) => {
  await page.goto(baseUrl);
  await page.reload();

  await fillVehiclePage(page, vehicleData);
  await fillInsurantPage(page, insurantData);
  await fillProductPage(page, productData);
  await fillPriceOptionPage(page, priceOptionData);
  await fillQuotePage(page, quoteData);

  await expect(page.getByText('Sending e-mail success!')).toBeVisible({ timeout: 15000 });
  
});
