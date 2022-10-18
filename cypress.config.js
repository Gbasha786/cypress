{
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports/mochawesome-report",
    "overwrite": false,
    "html": false,
    "json": true,
    "timestamp": "mmddyyyy_HHMMss"
  },
  "projectId": "rfqiuc"
}
e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
}) 
