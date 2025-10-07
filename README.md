This project reads raw data from a `.json` file located in the `data` folder and uses it to populate form fields across multiple pages.

#### Test Files

- There are five test files in the `tests` folder, each corresponding to a specific page:
  - `vehicle.spec.ts`
  - `insurant.spec.ts`
  - `product.spec.ts`
  - `price.spec.ts`
  - `quote.spec.ts`

- Each test file individually verifies the functionality of its respective page.
- The `quote.spec.ts` file acts as an integration test, validating the entire user flow from start to finish.

#### Fixtures

- Inside the `tests/fixtures` folder, the `tricentis-fixtures.ts` file defines custom Playwright fixtures.
- These fixtures inject data into the tests by reading from the `.json` file using a categorized schema, where each top-level key represents a page (e.g., `Vehicle`, `Insurant`, etc.).

#### Page Objects

- The `pages` folder contains five Page Object modules, each representing a form page.
- Each module exports a `fill` function that:
  - Accepts a Playwright `Page` object and a data object.
  - Uses locators to populate the unique fields on that page.

#### Test Execution Flow

- The `.spec.ts` test files:
  - Use the custom fixtures to access test data and call the corresponding `fill` functions from the Page Object modules.
  - End with an assertion to verify that the page either:
    - Successfully transitions to the next step, or
    - Submits the form (in the case of the final page).
