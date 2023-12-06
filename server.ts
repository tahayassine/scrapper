import express from 'express';
import * as dotenv from 'dotenv';
import getNewInters from './scrapingSciptes/getNewInter';

dotenv.config();

const port: number = parseInt(process.env.PORT || '3000', 10);

const app = express();

app.get('/test', (req, res) => {
  test(req, res);
});

function test(req: express.Request, res: express.Response) {
  getNewInters();
  res.send('This is a test');
}

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
