import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  //accepts single or can run multiple file 
  testMatch: ["tests/login.test.ts"],
  use: {
    headless: true,
    screenshot: "on",
    video: "on",
    launchOptions: {slowMo: 1000}
  },
  retries: 0,
  reporter: [
    ["dot"], 
    ["json", {outputFile: "jsonReports/jsonReports.json"}], 
    ["html", {open: "never"}]]
};
export default config;