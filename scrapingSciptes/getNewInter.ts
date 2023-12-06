import path from 'path';
import launchBrowser from './launchBrowser';

// get env variables
 
const prestinfoUrl =
  'https://web.prestinfo.eu/WD120AWP/WD120Awp.exe/CONNECT/Pre_Extranet';

const userName = 'INITIELY001';
const password = 't63ia63GFFUp';
const downloadPath = path.resolve('./download');

const getNewInters = async () => {
  const browser = await launchBrowser();
  console.log('browser', browser);
  // Open a new page
  const page = await browser.newPage();

  // On this new page:
  // - wait until the dom content is loaded (HTML is ready)
  await page.goto(prestinfoUrl, {
    waitUntil: 'networkidle2',
  });

  // await page.click('.col-md-4 a');
  await page.focus('#A15');
  await page.keyboard.type(userName);
  await page.focus('#A16');
  await page.keyboard.type(password);
  await page.keyboard.press('Enter');

  // waiting new page
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
  const client = await page.target().createCDPSession();
  await client.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: downloadPath,
  });

  // select the first image and click
  // src="/PRE_EXTRANET_WEB/res/ConversionTable.GIF"
  await page.click('img[src="/PRE_EXTRANET_WEB/res/ConversionTable.GIF"]');

  // Option1
  await page.click('#Option1');
  console.log('before waitForTimeout');
  await page.waitForTimeout(5000);
  console.log('after waitForTimeout');
  // close the browser
  console.log('before close');
  browser.close().catch((err) => console.log(err));
  console.log('after close');
};

export default getNewInters;
