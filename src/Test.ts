import * as csvParse from "csv-parser";
import * as fs from "fs";

export class Test {

  public show(): void {
    console.log('Hello ...');
  }

  public parseCSV(): void {
      console.log("........ Going to parse the CSV ......");
      const filepath = './example_data.csv';
      let results: any[] = []; 

      fs.createReadStream("data.csv")
      .pipe(csvParse())
      .on('data', (data: any) => results.push(data))
      .on('end', () => {
        console.log(results);
        // [
        //   { NAME: 'Daffy Duck', AGE: '24' },
        //   { NAME: 'Bugs Bunny', AGE: '22' }
        // ]
      });


  }
}

const test = new Test();
test.show();
test.parseCSV();
