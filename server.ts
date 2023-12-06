import express from 'express';
import getNewInters from './scrapingSciptes/getNewInter';
import envConfig from './config/envConfig';
import XlsService from './excelService/excelService';

const port = envConfig.PORT;

const app = express();

app.get('/test', (req, res) => {
  test(req, res);
});

async function test(req: express.Request, res: express.Response) {
  await getNewInters();
  const excelService = new XlsService();
  let excelData = await excelService.readXlsToJson('./download/export.xls');
  console.log('test4');
  console.log(excelData);
  console.log('test5');
  res.send(excelData);
  // res.send('This is a test');
}

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
