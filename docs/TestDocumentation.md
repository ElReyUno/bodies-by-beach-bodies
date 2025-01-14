# Test Documentation

This file explains how to run different tests (unit, integration, end-to-end) and what the different tests test.

## **Understanding Test Runner Commands:**

*   **Test Runners:** These are tools that execute tests and report results. Jest and Cypress are two different test runners with their own command structures.
*   **Test Files:** Test files are organized into a directory hierarchy with files that define and specify the tests that you want to run.
*   **Running the Tests:** You will need to use commands that tell the test runners where the tests are to find them and to execute those tests.
*  **Script commands:** Usually these commands will be called from the package.json file as a set of scripts.

### **Commands to Run Tests:**

1.  **Jest (Unit and Integration Tests):**

    *   **Command:**
        ```bash
          npm run test
          #or
          yarn test
          #or
          pnpm test
        ```
    *  Or if your test command is `test:unit` then:
         ```bash
           npm run test:unit
           #or
           yarn test:unit
           #or
           pnpm test:unit
        ```
    *   **Explanation:**
        *  This command tells `npm`, `yarn`, or `pnpm` to execute the script with the name `test` or `test:unit` that is defined in the `package.json` file.
        * This command uses the test script (usually with Jest) that was automatically created when you installed your Javascript framework (React, Vue, etc.).

    *   **`package.json` Example (scripts section):**
          ```json
          "scripts": {
           "test": "jest",
           "test:unit": "jest src/pages/__tests__/index.test.jsx"
           "test:e2e": "cypress run"
           "dev": "next dev",
           "build": "next build",
           "start": "next start"
         }
          ```
           *  The `test` script will generally run all tests that can be found.
           *  The `test:unit` script will run the specific file you pass to it, or test files in a directory.

2.  **Cypress (End-to-End Tests):**

    *   **Interactive Mode:** To open the Cypress Test Runner in an interactive mode with a graphical user interface:

    ```bash
      npx cypress open
      #or if you don't have npm use this
      yarn cypress open
    ```
     *  **Explanation**: The command `npx cypress open` or `yarn cypress open` starts the cypress program, which you can use to view the tests and run them in the browser.

    *   **Headless Mode:** To run tests from the command line in headless mode and generate results:
        ```bash
           npm run test:e2e
           #or
           yarn test:e2e
           #or
           pnpm test:e2e
        ```
      *  **Explanation**:  The command will execute the tests using the `cypress run` script, in the `package.json` file. It will output the results to the terminal as the tests are run.
       *  You can use this command for continuous integration and deployment.

   *     **`package.json` Example (scripts section):**
          ```json
          "scripts": {
           "test": "jest",
           "test:unit": "jest src/pages/__tests__/index.test.jsx"
           "test:e2e": "cypress run"
           "dev": "next dev",
           "build": "next build",
           "start": "next start"
         }
          ```
           *   The `test:e2e` script runs all tests that can be found by cypress.

**Note:**

*   **Directly Invoking Jest:** Do **NOT** run `jest src/pages/__tests__/index.test.jsx` or `jest cypress/e2e/home.cy.js` directly on the command line. The `test` script usually hides the complexity of the test execution by using environment variables or custom configurations.
*   **Cypress Files are Not Executable:** Cypress test files (e.g., `home.cy.js`) are not executable JavaScript files, they are intended to be run by the Cypress runner. This is why the `cypress open` or `cypress run` command is needed.


## Commands

Use the `npm run` command followed by the name of any of the scripts:

*   `npm run test` - runs all the tests using Jest
*   `npm run test:unit` - runs unit tests for the `src/pages/__tests__/index.test.jsx` file
*   `npm run test:e2e` - runs end-to-end tests with Cypress
*   `npm run storybook` - starts the Storybook development server
*   `npm run build-storybook` - builds a static Storybook site
*   `npm run dev` - starts the Next.js development server
*   `npm run build` - builds a production-ready Next.js application
*  `npm run start` - starts a Next.js application in production.