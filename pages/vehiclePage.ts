// pages/vehiclePage.ts
import { Page, expect } from '@playwright/test';

export async function fillVehiclePage(page: Page, vehicleData: any) {
  
  await page.locator('#make').selectOption(vehicleData.Make);
  await page.locator('#engineperformance').fill(vehicleData.EnginePerformance);
  await page.locator('#dateofmanufacture').fill(vehicleData.DateOfManufacture);
  await page.locator('#numberofseats').selectOption(vehicleData.NumberOfSeats);
  await page.locator('#fuel').selectOption(vehicleData.FuelType);
  await page.locator('#listprice').fill(vehicleData.ListPrice);
  await page.locator('#licenseplatenumber').fill(vehicleData.LicensePlateNumber);
  await page.locator('#annualmileage').fill(vehicleData.AnnualMileage);
  

  await page.getByRole('button', {name: "Next"}).click()
}