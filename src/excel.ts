import * as Excel from "exceljs";

type Workbook = Excel.Workbook;
class Xlsx {
    private workbook: Workbook;
    constructor(public path: string) {
        this.workbook = new Excel.Workbook();
    }
    async read() {
        var excel = await this.workbook.xlsx.readFile(this.path);
        if (excel) {
            // get each worksheet
            excel.eachSheet((worksheet, sheetId) => {
                //get definition cell 
                let row = worksheet.getRow(6);

                //get each row 
                row.eachCell((cell, colNumber) => {

                     console.log('====================================');
                     console.log(cell.value);
                    
                })



            })
        } else {
            console.error(excel);
            console.error("error~~~~~~~~~~~");
        }
    }

}


// var x = new Xlsx(`${__dirname}\\alipay.xlsx`);
// x.read();
