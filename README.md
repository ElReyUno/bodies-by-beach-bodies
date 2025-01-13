# Bodies By Beach Bodies

This document outlines the development details for Bodies By Beach Bodies following best practices for a Single-Page Application (SPA) built with a modern JavaScript tool stack.

## Table of Contents

*   [Project Overview](#project-overview)
*   [Technologies Used](#technologies-used)
    *   [Core Technologies](#core-technologies)
    *   [Development and Build Tools](#development-and-build-tools)
    *   [Development Environment](#development-environment)
    *   [Wireframing and Design Tools](#wireframing-and-design-tools)
        *   [Image Formats](#image-formats)
*   [Design Documentation](#design-documentation)
    *   [Visual Aids](#visual-aids)
        *   [Flowchart](#flowchart)
        *   [Wireframes](#wireframes)
    *   [Mock-up Creation](#mock-up-creation)
        *   [Creating a Mock-up with HTML](#creating-a-mock-up-with-html)
*   [Project Structure](#project-structure)
    *   [HTML Components](#html-components)
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
    *   **React with Next.js** (Recommended) *or* **Vue.js with Nuxt.js**
        *   For building the user interface with server-side rendering (SSR) and static site generation (SSG).
*   **Styling:**
    *   **Tailwind CSS** (Recommended) *or* Styled Components, CSS Modules.
        *   For modern, responsive, and customizable styling.
*   **Version Control:**
    *   **Git** with **GitHub**
        *   For managing code changes, collaboration, and project history.
*   **Testing:**
    *   **Jest** (If using React) or **Vitest** (If using Vue) for unit and integration testing.
    *   **Cypress** for end-to-end testing.

### Development and Build Tools

*   **Node.js** and **npm/yarn/pnpm:**
    *   For package management and running JavaScript tools.
*   **VS Code (Visual Studio Code):**
    *   Code editor with robust features and extensive extensions.
*  **Storybook:**
     *  Used for UI component development, testing, and documentation.
     *   To install use `npx sb init --type react` (if using React with Next.js) or `npx sb init --type vue3` (if using Vue with Nuxt.js). When prompted to choose a bundler, choose **`webpack5`** if you are using React, or **`vite`** if you are using Vue.
*   **Bundler:**
        *  **Webpack 5** (used by Next.js internally) *or* **Vite** (used by Nuxt.js internally).
         * Used to bundle all of the JavaScript files into optimized files for the application.
*    **Chrome DevTools:**
        *   Used to debug and inspect your website in the browser.
*   **CI/CD:**
    *   **Vercel** or **Netlify:** (Recommended) for Next.js and Nuxt.js projects
    *   **GitHub Actions:** For continuous integration and deployment.

### Development Environment

*   **Windows Subsystem for Linux (WSL)**: Used to run a genuine Linux environment in Windows.
*   **Ubuntu (or other Linux Distribution):** The Linux operating system that is being used to develop the app.

### Wireframing and Design Tools

*   **wireframe.cc:** Initial quick wireframing tool.
*   **Figma:** For detailed wireframes and UI design.
*  **Canva:** For creating mockups, social media graphics, and other visual assets.
    *   **Image Formats:**
        *   **`.WEBP`**: As the primary image format for web.
        *   **`.PNG`**: For logos, icons, and images with sharp lines or transparency.
        *  **`.SVG`**: For icons and simple illustrations.
        *   **`.JPG`**: Use only when needed.

## Design Documentation

This section outlines the planning and design documentation that has been used for the project.

### Visual Aids

*   #### Flowchart

     *   [Website Layout Design Hierarchical Flowchart](./docs/img/flowchart_wireframes/Flowchart.png)
*   #### Wireframes
    *   **Cell Phone:** [Website Cell Phone Layout Design](./docs/img/flowchart_wireframes/Cell.png)
    *   **Tablet:** [Website Tablet Layout Design](./docs/img/flowchart_wireframes/Tablet.png)
    *   **Desktop:** [Website Desktop Layout Design](./docs/flowchart_wireframes/img/Desktop.png)
*   #### Mock-up Creation
     *   Use wireframes and UI design files (Figma) to create a visual representation of the website.
     *   Export your mock-ups into a set of `png` files for easy sharing.
         *   [Link to Home Mockup](link-to-home-mockup.png)
         *   [Link to Services Mockup](link-to-services-mockup.png)
         *   [Link to About Mockup](link-to-about-mockup.png)
         *   [Link to Contact Mockup](link-to-contact-mockup.png)
*   #### Creating a Mock-up with HTML
     *   Use HTML elements to create a mock-up of the UI structure using the wireframes and `png` files as a reference. This can help visualize the structure of the web site before diving deep into the components.
         *   Use the HTML elements listed below under the "HTML Components" section to create the structure.

## Project Structure

This project uses a Single-Page Application (SPA) architecture, with route-based content loading. The core structure revolves around a single page that dynamically loads components with client-side routing.

### HTML Components

*   `<!DOCTYPE html>`
    *   Declares the HTML5 document type
*   `<html>`
    *   The root element of the HTML document
*   `<head>`
    *   Contains meta-information
*   `<body>`
    *   Contains all the visible content
*   `<header>`
    *   Used for navigation
        *   `<img>` or `<div>` to display the logo.
        *   `<nav>` for the navigation.
        *   `<button>` for the hamburger menu.
*   `<main>`
    *   Used for displaying the content
*   `<footer>`
    *   Used for footer
        *   `<nav>` for the secondary navigation.
        *   `<p>` for the copyright information.
*   `<section>`
    *   Used for a thematic grouping of content.
*   `<article>`
    *   Used for self-contained content.
*   `<h1>`, `<h2>`, `<h3>`, etc.
    *   Heading tags to define the hierarchy of content
*   `<img>`
    *   Displays images.
*   `<p>`
    *   Represents a paragraph of text.
*   `<ul>` and `<li>`
    *   Unordered list and list items.
*   `<a>`
    *   Creates links
*   `<form>`
    *   Creates a form.
*   `<button>`
    *   Used for actions and interactions.
*   `<video>` and `<audio>`
    *   Used to display media.
*   `<div>`
    *   A general container element.

### Application Shell

*   `Header`: Contains logo, navigation menu, and global settings
*   `Main`: Displays the view based on the current route
*   `Footer`: Contains secondary navigation, copyright, social media links.

### Route Based Components

The following will be loaded within the `<main>` element of the SPA.

*   `Home Component` (`/` or `/home`): Main landing page.
*   `About Component` (`/about`): Information about Wayne Bashay, the company, and their partnership.
*   `Contact Component` (`/contact`): Contact form and contact information.
*   `Services Component` (`/services`): A list of all services
    *   `Fitness Sub-Component` (`/services/fitness`):
        *   `Boot Camp Sub-Component` (`/services/fitness/bootcamp`): Boot camp information, schedule and sign up.
        *   `Indoor Fitness Sub-Component` (`/services/fitness/classes`): Indoor Fitness Classes information and scheduling.
        *   `Personal Training Sub-Component` (`/services/fitness/personal-training`): Personal training information and sign up.
        *   `Online Coaching Sub-Component` (`/services/fitness/online-coaching`): Online Coaching information and sign up.
        *   `24/7 Access Sub-Component` (`/services/fitness/24-7-access`): 24/7 access information and sign up.
    *   `Physical Therapy Sub-Component` (`/services/physical-therapy`): Physical Therapy information and sign up.
    *   `Spa Services Sub-Component` (`/services/spa`): Spa Services information and sign up.
    *   `Boxing Lessons Sub-Component` (`/services/boxing`): Boxing lessons information and sign up.
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
    *   Install `cwebp` using `sudo apt install webp`.
2.   **Image Optimization:**
    *   Create `.webp` versions of all your main images using an image optimization program or use a command like `cwebp input.jpg -o output.webp`.
        *   Make sure to also optimize the original image file and to scale down the resolution as needed.
3.  **Wireframing:**
    *   Use wireframe.cc for initial low-fidelity sketching.
    *   Use Figma for detailed, collaborative wireframes.
4.  **Mock-up Creation:**
    *   Use wireframes and UI design files (Figma) to create a visual representation of the website.
    *   Export your mock-ups into a set of `png` files for easy sharing.
        *   [Link to Home Mockup](link-to-home-mockup.png)
        *   [Link to Services Mockup](link-to-services-mockup.png)
        *   [Link to About Mockup](link-to-about-mockup.png)
        *   [Link to Contact Mockup](link-to-contact-mockup.png)
5.   **Creating a Mock-up with HTML:**
         *   Use HTML elements to create a mock-up of the UI structure using the wireframes and `png` files as a reference. This can help visualize the structure of the web site before diving deep into the components.
         *   Use the HTML elements listed above under the "HTML Components" section to create the structure.
6.  **Component Development:**
    *   Use a component-based approach with reusable UI components.
    *   All components must be fully responsive and accessible.
    *   Use Storybook to view, develop, and test UI components. Each UI component must have a corresponding story. To start Storybook use the command `npm run storybook` or `yarn storybook` or `pnpm storybook`. When prompted to choose a bundler, choose **`webpack5`** if you are using React, or **`vite`** if you are using Vue.
7.  **Styling:**
    *   Implement mobile-first design with responsive layouts.
    *   Use Tailwind CSS, Styled Components, or CSS modules for styling.
8.   **Testing:**
    *   Write unit and integration tests for all core components and functionality using Jest or Vitest.
    *   Implement end-to-end tests with Cypress.
9.  **Code Management:**
    *   Use Git and GitHub for version control.
    *   Follow best practices for branching and code commits.
10.  **Continuous Integration/Deployment:**
    *   Use GitHub Actions, Vercel, or Netlify for automatic build and deployment.
11.  **Chrome DevTools:**
        *   Use Chrome DevTools (or equivalent for other browsers) to debug your CSS, test for responsive behavior, and to diagnose performance issues.

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

*   Please use the GitHub issue tracker to suggest features or report bugs.

## License

*   This project is licensed under the [MIT License](./LICENSE).

## Getting Started

1.  Clone the repository

    ```bash
    git clone [[your repository]](https://github.com/ElReyUno/bodies-by-beach-bodies.git)
    ```

2.  Install the dependencies with your package manager

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