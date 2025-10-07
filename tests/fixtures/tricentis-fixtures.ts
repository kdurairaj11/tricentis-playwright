import { test as base, expect, Page } from '@playwright/test';
import * as fs from 'fs';

const data = JSON.parse(fs.readFileSync('./data/testdata.json', 'utf-8'));

type AppFixtures = {
    baseUrl: string;
    vehicleData: any;
    insurantData: any;
    productData: any;
    priceOptionData: any;
    quoteData: any;
};

export const test = base.extend<AppFixtures>({
  baseUrl: async ({}, use) => {
    await use(data.baseUrl);
  },
  vehicleData: async ({}, use: (vehicleData: any) => Promise<void>) => {
    await use(data.testData.Vehicle);
  },
  insurantData: async ({}, use: (insurantData: any) => Promise<void>) => {
    await use(data.testData.Insurant);
  },
  productData: async ({}, use: (productData: any) => Promise<void>) => {
    await use(data.testData.Product);
  },
  priceOptionData: async ({}, use: (priceOptionData: any) => Promise<void>) => {
    await use(data.testData.PriceOption);
  },
  quoteData: async ({}, use: (quoteData: any) => Promise<void>) => {
    await use(data.testData.Quote);
  },
});


export { expect };


