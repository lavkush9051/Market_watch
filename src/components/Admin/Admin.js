import * as XLSX from "xlsx";
// import "../layout/Header.css";
import "./admin.css";
import AdminHeader from "../layout/AdminHeader";
import { useState } from "react";
import AuthUser from "../AuthUser";


const Admin = () => {
  const [data, setData] = useState([]);
  const {getToken} = AuthUser()
  const [disable, setDisable] = useState(true);

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
          }
        })
        .catch((error) => {
          console.log("Catch block error: ", error);
        });
    }
  };

  return (
    <div className="container">
      <AdminHeader />
      {/* <div className="row">
        <p style={{ width: "auto", fontWeight: "bold",fontSize:"large" }}>
          Choose file to upload
        </p>
      </div> */}
      <div className="row" style={{ margin: "50px" }}>
        <input
          style={{ width: "500px" }}
          type="file"
          onChange={(e) => handleFile(e)}
        />
      </div>
      <div className="button">
        <span className="clear">
        <button className="update-btn-admin" disabled={disable} onClick={clearFile} >Clear</button>
        </span>
        <button className="update-btn-admin" disabled={disable} onClick={submitFile} >Upload</button>
      </div>
    </div>
  );
};

export default Admin;
