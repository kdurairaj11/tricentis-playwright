import {test, expect} from './fixtures/tricentis-fixtures'
import { fillVehiclePage } from '../pages/vehiclePage';
import { fillInsurantPage } from '../pages/insurantPage';
import { fillProductPage } from '../pages/productPage';
import { fillPriceOptionPage } from '../pages/pricePage';


test(' form', async ({ page, baseUrl, vehicleData, insurantData, productData, priceOptionData}) => {
  await page.goto(baseUrl);
  await page.reload();

  await fillVehiclePage(page, vehicleData);
  await fillInsurantPage(page, insurantData);
  await fillProductPage(page, productData);
  await fillPriceOptionPage(page, priceOptionData);

   await expect(page.getByText('E-Mail')).toBeVisible();
  
});