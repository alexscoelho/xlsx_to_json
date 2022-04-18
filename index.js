import XLSX from "xlsx";
import axios from "axios";

const parse = (filename) => {
  const excelData = XLSX.readFile(filename);

  return Object.keys(excelData.Sheets).map((name) => ({
    name,
    data: XLSX.utils.sheet_to_json(excelData.Sheets[name], {
      header: 1,
      blankrows: false,
    }),
  }));
};

const customers = parse("./files/Contact_list.xlsx").forEach(
  ({ data }, index) => {
    const customers = [];
    for (let i = 0; i < 1; i++) {
      const customer = data[i];
      // const customerDto = {
      //   name: customer[4] || "",
      //   address: customer[5] || "",
      //   phone: customer[2] || "",
      //   email: customer[3] || "",
      //   tierLevel: "1" || "",
      //   company: customer[1] || "",
      //   address2: "",
      //   city: "",
      //   state: "",
      //   zipCode: 0,
      // };
      const customerDto = {
        name: "jose",
        address: "223 sw 89st",
        phone: "305-654-8899",
        email: "jose@mail.com",
        tierLevel: "2",
        company: "Stable factory",
        address2: "111",
        city: "MIami",
        state: "FL",
        zipCode: 33123,
      };
      axios
        .post("https://stepsolutionapi.herokuapp.com/customers", customerDto)
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error));
    }
  }
);
