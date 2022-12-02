import * as XLSX from "xlsx";
// import "../layout/Header.css";
import "./admin.css";
import Header from "../layout/Header";
import { useState } from "react";
import AuthUser from "../AuthUser";


const Admin = () => {

  const [data, setData] = useState([]);
  const {getToken} = AuthUser()
  const [disable, setDisable] = useState(true);

  const header = {
    heading:"Update",
    logout:"Logout"
  }

  //select file
  const handleFile = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    const jsonParsedData = jsonData.map(function (elm) {
      return {
        symbol: elm.SYMBOL,
        open: elm.OPEN,
        high: elm.HIGH,
        low: elm.LOW,
        close: elm.CLOSE,
      };
    });
    console.log("-----filtered data---------");
    //console.log(jsonParsedData);
    setData(jsonParsedData);
    setDisable(false)
  };

// clear
  const clearFile =() =>{
    if(data.length===0){
      alert("Choose excel file")
      return
    }
    window.location.reload(false);
  }

// update
  const submitFile = () => {
    console.log(data);
    if (data.length === 0) {
      alert("Choose excel file");
      return;
    }
    const url = "http://localhost:9090/stocks";
    for(let i=0; i<data.length; i++){
      console.log("converted data..",JSON.stringify(data[i]));

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          'Authorization': 'Bearer ' + getToken()
        },
        body: JSON.stringify(data[i]),
      })
        .then((response) => {
          console.log("response", response);
          if (response.state === 200) {
            console.log("success");
            alert("Stocks added successfully")
          }
        })
        .catch((error) => {
          console.log("Catch block error: ", error);
        });
    }
  };

  return (
    <div>
    <Header items={[header.heading, header.logout]} />
    <div className="container">
      <div className="row" style={{ margin: "50px" }}>
        <input
          style={{ width: "500px" }}
          type="file"
          onChange={(e) => handleFile(e)}
        />
      </div>
      <div style={{marginTop:"70px"}} >
        <span className="clear">
        <button className="update-btn-admin" disabled={disable} onClick={clearFile} >Clear</button>
        </span>
        <button className="update-btn-admin" disabled={disable} onClick={submitFile} >Upload</button>
      </div>
    </div>
    </div>
  );
};

export default Admin;
