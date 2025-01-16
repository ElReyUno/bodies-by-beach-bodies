# Test Documentation

This file explains how to execute unit, integration, and end-to-end tests, and describes their respective purposes.

## Test-Driven Development (TDD) Framework

This project prioritizes best practices using React with Next.js, Tailwind CSS, Jest, Cypress, and Postman.

### Understanding Test-Driven Development

*   **Red-Green-Refactor Cycle:**
    1.  **Red:** Write a failing test.
    2.  **Green:** Write code to pass the test.
    3.  **Refactor:** Improve the code while ensuring all tests pass.
*   **Benefits:** Enhanced code, requirement clarity, fewer bugs, improved maintenance.

### Home Page Files

*   **React Component:**
    *   `src/pages/index.jsx`
*   **CSS (Tailwind CSS):**
    *   Styles use Tailwind CSS utility classes.
*   **Unit/Integration Tests:**
    *   `src/__tests__/index.test.jsx` (React, Jest)
*   **End-to-End Tests (Cypress):**
    *   `cypress/e2e/home.cy.js`

### Test Implementation

TDD cycle:

**1. Red (Failing Tests):**

*   **Unit/Integration (Jest):**
    *   Test component logic and rendering.
    *   `src/__tests__/index.test.jsx` (React, Jest Example):

    ```jsx
    // src/__tests__/index.test.jsx
    import { render, screen } from '@testing-library/react';
    import Home from '../index';

    describe('Home Component', () => {
        it('renders the main heading', () => {
        render(<Home />);
        const headingElement = screen.getByRole('heading', { level: 1 });
        expect(headingElement).toBeInTheDocument();
        });

        it('renders a button', () => {
            render(<Home/>);
            const buttonElement = screen.getByRole('button');
            expect(buttonElement).toBeInTheDocument();
       })
       it('has the correct title', () => {
            render(<Home />);
            const titleElement = document.querySelector('head title');
            expect(titleElement).toHaveTextContent("Bodies By Beach Bodies")
        })
       it('includes an SEO description', () => {
            render(<Home />);
           const metaDescription = document.querySelector('head meta[name="description"]');
            expect(metaDescription).toBeInTheDocument();
        });
    });
    ```

    *   These tests will initially fail.
*   **End-to-End (Cypress):**
    *   Test user interaction and flow.
    *   `cypress/e2e/home.cy.js`:
       ```javascript
        // cypress/e2e/home.cy.js
       describe('Home Page', () => {
         it('loads the home page', () => {
           cy.visit('/');
           cy.contains('Transform Your Body & Mind').should('be.visible');
         });

        it('has a clickable button', () => {
         cy.visit('/');
        cy.get('button').should('be.visible').click()
       })
       });
        ```
    *   This test will initially fail.

**2. Green (Make Tests Pass):**

*   **React Component (`src/pages/index.jsx`):**

    ```jsx
    // src/pages/index.jsx
    import Head from 'next/head';

    function Home() {
      return (
       <>
          <Head>
          <title>Bodies By Beach Bodies</title>
             <meta
               name="description"
             content="Transform your body with the Bodies by Beach Bodies Personal Training website, with bootcamps, one-on-one sessions, and online coaching."
            />
        </Head>
          <div className={styles.container}>
            <h1 className={styles.heading}>Transform Your Body & Mind.</h1>
            <button className={styles.button} onClick={() => alert("clicked!")}>Click Me</button>
          </div>
        </>
      );
    }

    export default Home;

    ```

*   **CSS (Modules):**
     *   `src/pages/index.module.css` (CSS Module styles, directly or with Tailwind classes).

**3. Refactor (Improve & Retain Passing Tests):**

*   Improve accessibility with ARIA attributes and semantic HTML.
*   Add meta descriptions and keywords for SEO.
*   Create responsive layouts using Tailwind or custom CSS.
*   Add component logic and test for all different features.

**Testing:**

1.  **Unit/Integration:**
    *   Use `npm run test` or `yarn test`.
2.  **End-to-End:**
    *  Use `npx cypress open` to start Cypress.
3. **Postman:**
    *   Use for API Requests (not needed just for home page tests).

**Code Example with Enhancements:**

*   **React with Next.js**

    ```jsx
    // src/pages/index.jsx
    import Head from 'next/head';
    import styles from '';
    function Home() {
        return (
          <>
            <Head>
            <title>Bodies By Beach Bodies</title>
            <meta
              name="description"
             content="Transform your body with the Bodies by Beach Bodies Personal Training website, with bootcamps, one-on-one sessions, and online coaching."
              />
            </Head>
            <div className={styles.container}>
              <h1 className={styles.heading}>Transform Your Body & Mind.</h1>
              <button className={styles.button} onClick={() => alert("clicked!")}>Click Me</button>
            </div>
           </>
        );
      }
    export default Home;
    ```

    ```css
    // src/pages/index.module.css
    .container {
      display: flex;
      flex-direction: column;
    }

    .heading {
      font-size: 2rem;
    }
    .button {
      background-color: #4CAF50;
      border: none;
      color: white;
      padding: 10px 22px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }
    ```

**Key Points:**

*   Test implementation before writing code.
*   Implement small code segments.
*   Ensure accessibility, SEO, performance.
*   Code must pass all tests to move forward.

## Test Runner Commands

*   **Test Runners:** Tools that execute and report test results. Jest and Cypress are examples.
*   **Test Files:** These reside in a directory with files that define tests.
*   **Execution:** Use commands to tell test runners where the tests are and to run them.
*   **Script Commands:** Commonly called in `package.json` as scripts.

### Execution Commands:

1.  **Jest (Unit/Integration):**

    *   **Command:**
        ```bash
          npm run test
          #or
          yarn test
          #or
          pnpm test
        ```
          or
        ```bash
           npm run test:unit
           #or
           yarn test:unit
           #or
           pnpm test:unit
        ```
    *   **Explanation:** These tell `npm`, `yarn`, or `pnpm` to run the script with the name `test` or `test:unit` defined in `package.json`. Uses the test script, usually with Jest.

    *   **`package.json` Example:**
          ```json
          "scripts": {
           "test": "jest",
           "test:unit": "jest src/__tests__/index.test.jsx"
           "test:e2e": "cypress run"
           "dev": "next dev",
           "build": "next build",
           "start": "next start"
         }
          ```
          The `test` script runs all available tests, `test:unit` is for a specific file.

2.  **Cypress (End-to-End):**

    *   **Interactive Mode:** To open the Cypress Test Runner with a graphical interface:

    ```bash
      npx cypress open
      #or
      yarn cypress open
    ```
        The command `npx cypress open` or `yarn cypress open` starts the cypress program in browser mode.

    *   **Headless Mode:** To run tests on the command line:
        ```bash
           npm run test:e2e
           #or
           yarn test:e2e
           #or
           pnpm test:e2e
        ```
      This command executes tests with `cypress run`, and outputs results to the terminal.

    *   **`package.json` Example:**
          ```json
          "scripts": {
           "test": "jest",
           "test:unit": "jest src/__tests__/index.test.jsx"
           "test:e2e": "cypress run"
           "dev": "next dev",
           "build": "next build",
           "start": "next start"
         }
          ```
          `test:e2e` runs all Cypress tests.

**Note:**

*   Do not run `jest` with a file path from the command line. Use the `test` or `test:unit` script.
*   Cypress files are not executable JavaScript. Use the `cypress open` or `cypress run` commands.

## Commands

Use the `npm run` command with the script name.
*   `npm run test` - runs all tests
*   `npm run test:unit` - runs unit tests for `src/__tests__/index.test.jsx`
*   `npm run test:e2e` - runs Cypress tests
*   `npm run storybook` - starts Storybook
*   `npm run build-storybook` - builds Storybook
*   `npm run dev` - starts Next.js in development
*   `npm run build` - builds Next.js for production
*   `npm run start` - starts Next.js in production.