import { defineConfig } from "cypress";

export default defineConfig({
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: "cypress/reports",
        overwrite: false,
        html: false,
        json: true,
        video: false
    },
    e2e: {
        setupNodeEvents(on, config) {
            return config;
        }
    }
});