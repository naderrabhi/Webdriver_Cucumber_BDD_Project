Project Title: WebDriver Cucumber BDD Automation
A Behavior-Driven Development (BDD) automation framework using Selenium WebDriver, Cucumber.js, and Node.js. This project is designed to test web applications in a structured and maintainable way.

🚀 Getting Started
Follow these steps to set up and run the project on your local machine.

Prerequisites
Node.js: Ensure you have Node.js (v14 or higher) and npm installed.

Web Browser: Google Chrome is required to run the tests.

Installation
Clone this repository to your local machine:

Bash
git clone [https://github.com/naderrabhi/Webdriver_Cucumber_BDD_Project.git]
Navigate to the project directory:

Bash
cd [Webdriver_Cucumber_BDD_Project]
Install all required npm dependencies:

Bash
npm install

⚙️ Project Structure
This framework uses a standard Cucumber.js directory structure to separate features, step definitions, and supporting files.
.
├── features/                 # Contains .feature files for high-level test scenarios
│   └── login.feature
├── pages/                    # Implements the Page Object Model (POM) for reusability
│   ├── HomePage.js
│   └── LoginPage.js
├── reports/                  # Stores generated test reports
│   └── cucumber-report.html
├── step-definitions/         # Contains the code that defines each step from the .feature files
│   └── login.steps.js
├── support/                  # Holds configuration and utility files
│   ├── config.js
│   ├── hooks.js              # For before/after hooks and browser setup
│   └── world.js
├── .gitignore
├── cucumber.js               # Main Cucumber configuration file
├── package.json              # Manages project dependencies and scripts
└── ...

📝 Usage
Running Tests
Use the npm test command to execute your Cucumber tests.

Bash
npm run test
This command will:

Read the test scenarios from your .feature files.

Execute the corresponding steps defined in the step-definitions directory.

Generate a test report.

Generating Reports
After running the tests, an HTML report is automatically generated in the reports directory, providing a detailed summary of the test results.

🛠️ Key Technologies
Selenium WebDriver: Automates browser interactions.

Cucumber.js: Provides the BDD framework for writing tests in plain language.

Page Object Model (POM): A design pattern used in the pages directory to create an object repository for UI elements, improving code readability and maintainability.

🛡️ Known Issues
Chrome Password Manager Pop-up: This framework includes configurations to handle the Chrome password manager pop-up that may appear during login. The support/hooks.js or a similar file is configured with Chrome options to prevent these interruptions and ensure stable test execution.
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

