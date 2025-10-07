import {test, expect} from './fixtures/tricentis-fixtures'
import { fillVehiclePage } from '../pages/vehiclePage';

test('navigate and fill vehicle page', async({page, vehicleData, baseUrl}) => {
    
    await page.goto(baseUrl);
    await page.reload(); 


    // fill in each page
    await fillVehiclePage(page, vehicleData);

    await expect(page.getByText('First Name')).toBeVisible();

})