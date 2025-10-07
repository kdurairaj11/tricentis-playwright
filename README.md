This project reads raw data from a .json file (located in data folder) and fills in each page. 
There are 5 test files for each page (Vehicle, Insurant, Product, Price, Quote) that individually tests their functionality, with quote.spec.ts acting as the integration test that captures the entire user flow. 
In the tests folder, there are the 5 test files, alongside a fixtures folder that contains tricentis-fixtures.ts. I created a fixture to handle each page, and it injects data from the .json based on a categorized schema (with each page acting as a top-level key).
In the pages folder, I created 5 page object modules, each exporting a fill function to populate the unique fields for each page using locators and test data.
The spec.ts files utilize the fixtures and created functions, and ends with an assertion to determine whether the page successfully accepts the data and moves to the next page (or submits depending on the case).
