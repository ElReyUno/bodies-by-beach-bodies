# Bodies By Beach Bodies

This document outlines the development details for Bodies By Beach Bodies following best practices for a Single-Page Application (SPA) built with a modern JavaScript tool stack.

## Table of Contents

*   [Project Overview](#project-overview)
*   [Technologies Used](#technologies-used)
    *  [Core Technologies](#core-technologies)
    *  [Development and Build Tools](#development-and-build-tools)
    *  [Development Environment](#development-environment)
    *  [Wireframing and Design Tools](#wireframing-and-design-tools)
*   [Project Structure](#project-structure)
    * [HTML Components](#html-components)
    *   [Application Shell](#application-shell)
    *   [Route Based Components](#route-based-components)
    *   [UI Components](#ui-components)
*   [Development Workflow](#development-workflow)
*   [Accessibility](#accessibility)
*   [SEO](#seo)
*   [Responsive Design](#responsive-design)
*   [Contributing](#contributing)
*   [License](#license)
*   [Getting Started](#getting-started)

## Project Overview

This project is a single-page application designed for a personal trainer at `Bodies By Beach Bodies` to help attract clients and showcase their expertise. It includes a focus on a mobile-first design, performance optimization, and accessibility, with global reach in mind. It has an emphasis on making a client feel comfortable using the site as well as providing information about all offerings. It includes an extensive partnership page designed to recruit stakeholders. The project is designed to be test-driven and object oriented, making it easy to debug and scale in the future.

## Technologies Used

### Core Technologies

*   **Front-End Framework:**
    *   **React with Next.js**
        *   For building the user interface with server-side rendering (SSR) and static site generation (SSG)
*   **Styling:**
    *   **Tailwind CSS**
        *   For modern, responsive, and customizable styling.
*   **Version Control:**
    *   **Git** with **GitHub**
        *   For managing code changes, collaboration, and project history.
*   **Testing:**
    * **Browser Testing:** Manually test site in different browsers and viewport sizes.
    * **Cypress:** For end-to-end testing.
    *  **Jest** For unit and integration testing.
    * **Postman:** To test any back-end API endpoints.
    

### Development and Build Tools

*   **Node.js** and **npm/yarn/pnpm:**
    *   For package management and running JavaScript tools.
*   **VS Code (Visual Studio Code):**
    *   Code editor with robust features and extensive extensions.
* **Bundler**
   *   Webpack (if using React, Next.js does it for you) or Vite (if using Vue, Nuxt.js does it for you).
   *   To bundle all of the javascript files into an optimized file.
*   **CI/CD:**
    *   **Vercel** and **Netlify** for Next.js and Nuxt.js projects
    *   **GitHub Actions:** For continuous integration and deployment.

### Development Environment

*   **Windows Subsystem for Linux (WSL)**: Used to run a genuine Linux environment in Windows.
*   **Ubuntu (or other Linux Distribution):** The Linux operating system that is being used to develop the app.

### Wireframing and Design Tools

*   **wireframe.cc:** Initial quick wireframing tool.
*   **Figma:** For detailed wireframes and UI design.

## Design Documentation

This section outlines the planning and design documentation that has been used for the project.

### Visual Aids

*   **Flowchart:**          [Website Layout Design Hierarchical Flowchart](./docs/img/Flowchart.png)
*   **Wireframes:**
    *   **Cell Phone:**     [Website Cell Phone Layout Design](./docs/img/Cell.png)
    *   **Tablet:**         [Website Tablet Layout Design](./docs/img/Tablet.png)
    *   **Desktop:**        [Website Desktop Layout Design](./docs/img/Desktop.png)

## Project Structure

This project uses a Single-Page Application (SPA) architecture, with route-based content loading. The core structure revolves around a single page that dynamically loads components with client-side routing.

### HTML Components
* `<!DOCTYPE html>`
    * Declares the HTML5 document type
* `<html>`
   * The root element of the HTML document
*   `<head>`
    *  Contains meta-information
*   `<body>`
    *  Contains all the visible content
*   `<header>`
    *   Used for navigation
        *   `<img>` or `<div>` to display the logo.
        *   `<nav>` for the navigation.
        *   `<button>` for the hamburger menu.
*   `<main>`
    *  Used for displaying the content
*   `<footer>`
     *  Used for footer
         *    `<nav>` for the secondary navigation.
         *     `<p>` for the copyright information.
*   `<section>`
    *   Used for a thematic grouping of content.
*  `<article>`
      * Used for self contained content.
*  `<h1>`, `<h2>`, `<h3>`, etc.
      * Heading tags to define the hierarchy of content
*  `<img>`
     * Displays images.
*   `<p>`
       * Represents a paragraph of text.
*  `<ul>` and `<li>`
       * Unordered list and list items.
*  `<a>`
        *   Creates links
*   `<form>`
        *   Creates a form.
* `<button>`
        *  Used for actions and interactions.
*  `<video>` and `<audio>`
        *  Used to display media.
*   `<div>`
        *  A general container element.

### Application Shell
*   `Header`: Contains logo, navigation menu, and global settings
*  `Main`: Displays the view based on the current route
*  `Footer`: Contains secondary navigation, copyright, social media links.

### Route Based Components

The following will be loaded within the `<main>` element of the SPA.
*   `Home Component` (`/` or `/home`): Main landing page.
*   `About Component` (`/about`): Information about Wayne Bashay, the company, and their partnership.
*   `Contact Component` (`/contact`): Contact form and contact information.
*  `Services Component` (`/services`): A list of all services
    *    `Fitness Sub-Component` (`/services/fitness`):
        *   `Boot Camp Sub-Component` (`/services/fitness/bootcamp`): Boot camp information, schedule and sign up.
        *   `Indoor Fitness Sub-Component` (`/services/fitness/classes`): Indoor Fitness Classes information and scheduling.
        *    `Personal Training Sub-Component` (`/services/fitness/personal-training`): Personal training information and sign up.
        *  `Online Coaching Sub-Component` (`/services/fitness/online-coaching`): Online Coaching information and sign up.
        *   `24/7 Access Sub-Component` (`/services/fitness/24-7-access`): 24/7 access information and sign up.
    *  `Physical Therapy Sub-Component` (`/services/physical-therapy`): Physical Therapy information and sign up.
    *  `Spa Services Sub-Component` (`/services/spa`): Spa Services information and sign up.
    *  `Boxing Lessons Sub-Component` (`/services/boxing`): Boxing lessons information and sign up.
*   `Facilities Component` (`/facilities`): Information and images of the facilities.
*   `Testimonials Component` (`/testimonials`): Client testimonials.
*   `Blog Component` (`/blog`): Blog posts.
*   `Partnerships Component` (`/partnerships`): Information for potential investors and partners.

### UI Components

Components will be built using re-usable UI elements:
*   Buttons, Text Fields, Lists, Dropdowns, Images, Videos.

## Development Workflow

1.  **Setup:**
    *   Install Node.js, Git, and VS Code.
    *   Set up WSL with Ubuntu (or other Linux distribution).
    *   Install all necessary dependencies.
2.  **Wireframing:**
    *   Use wireframe.cc for initial low-fidelity sketching.
    *   Use Figma for detailed, collaborative wireframes.
3.  **Component Development:**
    *   Use a component-based approach with reusable UI components.
    *  All components must be fully responsive and accessible.
4.  **Styling:**
    *   Implement mobile-first design with responsive layouts.
    *   Use Tailwind CSS, Styled Components, or CSS modules for styling.
5.  **Testing:**
    *   Write unit and integration tests for all core components and functionality using Jest or Vitest.
    *   Implement end-to-end tests with Cypress.
6.  **Code Management:**
    *   Use Git and GitHub for version control.
    *   Follow best practices for branching and code commits.
7.  **Continuous Integration/Deployment:**
    *  Use GitHub Actions, Vercel, or Netlify for automatic build and deployment.

## Accessibility

*   Use semantic HTML to improve accessibility.
*   Include ARIA attributes where appropriate.
*   Ensure keyboard navigation is fully functional.
*   Provide `alt` tags for all images.
*   Provide sufficient color contrast.
*   Test thoroughly with screen readers.

## SEO

*   Implement server-side rendering (SSR) or static site generation (SSG) with Next.js or Nuxt.js to ensure search engines can crawl the application.
*   Provide detailed metadata for pages.
*   Create and submit a `sitemap.xml`.
*   Follow other SEO best practices.

## Responsive Design

*   Use a mobile-first approach to ensure a responsive design.
*   Use CSS Flexbox or Grid for layouts that are flexible across different screen sizes.
*   Test the layouts on various devices and viewport sizes.

## Contributing
*  Please use the GitHub issue tracker to suggest features or report bugs.

## License
*   This project is licensed under the [MIT License](./LICENSE).

## Getting Started

1. Clone the repository
    ```bash
    git clone [[your repository]](https://github.com/ElReyUno/bodies-by-beach-bodies.git)
    ```
2. Install the dependencies with your package manager
    ```bash
    npm install
    #or
    yarn install
    #or
    pnpm install
    ```
3.  Run your development server
    ```bash
    npm run dev
    #or
    yarn dev
    #or
    pnpm dev
    ```

---
By following this guide, we will ensure a quality end result that is performant, accessible, and ready for future growth.