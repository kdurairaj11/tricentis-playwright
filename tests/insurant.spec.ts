import {test, expect} from './fixtures/tricentis-fixtures'
import { fillInsurantPage } from '../pages/insurantPage';

test('navigate and fill insurant page', async({page, insurantData, baseUrl}) => {
    
    await page.goto(baseUrl);
    await page.reload();
    await page.getByText('Enter Insurant Data').click()


    // fill in each page
    await fillInsurantPage(page, insurantData);

    await expect(page.getByText('Start Date')).toBeVisible();

})