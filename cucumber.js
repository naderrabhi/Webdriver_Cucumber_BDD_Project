module.exports = {
default: [
"--require ./step-definitions/*.js",
"--require ./support/*.js",
"--format progress",
"--format json:reports/report.json",
"features/**/*.feature"
].join(" ")
};