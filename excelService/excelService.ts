import * as XLSX from 'xlsx';
import * as fs from 'fs';

// create class to read xls file and return json data
class XlsService {
  constructor() {}
  async readXlsToJson(filePath: string) {
    // filePath = './download/export.xls';
    try {
      const workbook = XLSX.readFile(filePath);
      const sheetNameList = workbook.SheetNames;
      const jsonData = XLSX.utils.sheet_to_json(
        workbook.Sheets[sheetNameList[0]]
      );
      console.log(jsonData);
      return jsonData;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteFile(filePath: string) {
    // filePath = './download/export.xls';
    try {
      fs.unlinkSync(filePath);
      //file removed
    } catch (err) {
      console.error(err);
    }
  }
}

export default XlsService;
