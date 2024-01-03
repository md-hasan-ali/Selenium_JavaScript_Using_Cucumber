const assert = require('assert');
const { Given, When, Then, AfterAll } = require('cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();


Given('I am on the Google search page', async function () {
    await driver.get("https://google.com/")
});


AfterAll(async function () {
    await driver.quit();
});