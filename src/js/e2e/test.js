import puppeteer from 'puppeteer';

jest.setTimeout(30000);
describe('Test', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppeteer.launch(
    /*{
      headless: false,
      slowMo: 50,
      devtools: true,
    }*/);
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  test('Check Hide/Open Popover', async () => {
    await page.goto(baseUrl);
    const widjet = await page.$('.widjet');
    const button = await widjet.$('.button');
    await button.click();
    await button.click();
  });
});
