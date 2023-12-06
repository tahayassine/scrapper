import puppeteer, { Browser } from 'puppeteer';
import envConfig from '../config/envConfig';

// Create a global browser variable so puppeteer can run in the background and be accessed by other scripts (ie - puppeteer.js)
let browser: Browser | undefined;
const headless = envConfig.BROWSER_HEADLESS;

async function launchBrowser(): Promise<Browser> {
  if (!browser) {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
      headless: headless ? 'new' : false, // Enable new Headless mode
    });
  }

  return browser;
}

export default launchBrowser;
