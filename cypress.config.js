const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here

            // Example: Log when a test starts
            on('before:run', (details) => {
                console.log(`Starting test: ${details.title}`);
            });

            // Example: Log when a test finishes
            on('after:run', (details) => {
                console.log(`Finished test: ${details.title}`);
            });
        },
        baseUrl: 'http://localhost:3000',       // Update this to your application's base URL
        supportFile: './cypress/e2e/e2e.js',    // Include the support file
    },
});