/* eslint-disable */
const reporter = require("cucumber-html-reporter");
const path = require("path");
const fs = require("fs");

const reportJson = path.resolve("reports", "report.json");
const reportOut = path.resolve("reports", "html", "cucumber-report.html");

// ensure folder exists
const reportDir = path.dirname(reportOut);
if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

const options = {
  theme: "bootstrap",
  jsonFile: reportJson,
  output: reportOut,
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    App: "SauceDemo",
    Platform: process.platform,
    Browser: "Chrome (Headless)",
    Parallel: "Scenarios",
    Executed: process.env.CI ? "CI" : "Local",
  },
};

reporter.generate(options);
console.log(`\nHTML report generated at: ${reportOut}\n`);
