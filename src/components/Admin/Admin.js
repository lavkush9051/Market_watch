import * as XLSX from "xlsx";
import "../layout/Header.css";
import "./admin.css";
import Header from "../layout/Header";
import Button from "../UI/Button";
import { useState } from "react";

const Admin = () => {
  const [data, setData] = useState([]);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    const jsonParsedData = jsonData.map(function (elm) {
      return {
        SYMBOL: elm.SYMBOL,
        OPEN: elm.OPEN,
        HIGH: elm.HIGH,
        LOW: elm.LOW,
        CLOSE: elm.CLOSE,
      };
    });
    console.log("-----filtered data---------");
    //console.log(jsonParsedData);
    setData(jsonParsedData);
  };
  const submitFile = () => {
    console.log(data);
    if(data.length===0){
        alert("Choose excel file");
        return;
    }
    const url = 'http://localhost:9090/stocks';
    const stocks = {...data};
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(stocks),
    })
      .then((response) => {
        console.log("response", response);
        if (response.state === 200) {
          console.log("success");
        }
      })
      .catch((error) => {
        console.log("Catch block error: ", error);
      });
  };

  return (
    <div className="container">
      <Header />
      <div className="row">
        <p style={{ width: "200px", fontWeight: "bold" }}>
          Choose file to upload
        </p>
      </div>
      <div className="row" style={{ margin: "50px" }}>
        <input
          style={{ width: "260px" }}
          type="file"
          onChange={(e) => handleFile(e)}
        />
      </div>
      <div className="row">
        <Button onClick={submitFile}>Update db </Button>
      </div>
    </div>
  );
};

export default Admin;
