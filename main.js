import xlsx from "node-xlsx";

// Or var xlsx = require('node-xlsx').default;

// Parse a buffer
// const workSheetsFromBuffer = xlsx.parse(
//   fs.readFileSync(`${__dirname}/files/Contact_list.xlsx`)
// );
// Parse a file
const workSheetsFromFile = xlsx.parse(`./files/Contact_list.xlsx`);
workSheetsFromFile.
