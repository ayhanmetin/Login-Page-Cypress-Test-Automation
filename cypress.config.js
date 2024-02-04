const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     // Enable video recording
//     video: true,
//     // Set video compression. Set to true for default compression, or specify a CRF value
//     videoCompression: 32, // Default, or use your preferred CRF value like 15 for higher quality
//     setupNodeEvents(on, config) {
//       // No need to implement node event listeners for deleting videos
//     },
//     // Optionally, if you want to prevent Cypress from clearing videos before runs:
//     trashAssetsBeforeRuns: false,
//   },
// });
