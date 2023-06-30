import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  //accepts single or can run multiple file 
  testMatch: ["tests/basicInterActions.test.ts"],
  use: {
    headless: false,
    screenshot: "on",
    video: "on"
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReports.json"
  }], ["html", {
    open: "never"
  }]]
};
export default config;