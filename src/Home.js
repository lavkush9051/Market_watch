import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import "./Home.css";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/layout/Header";
import Autocomplete from "./components/Autocomplete";
import SeachResult from "./components/SearchResult";
require("./styles.css");
//let searchedStock = '';
function Home() {
  const [suggestionList, setSuggestion] = useState([]);
  const [data, setData] = useState([]);
  const header={heading:"Welcome To Market Watch App"}

  const apiGet = () => {
    fetch("http://localhost:9090/getAllStocks")
      .then((response) => response.json())
      .then((res) => {
        const stocks = res.map(function (elm) {
          return elm.symbol;
        });
        console.log(stocks);
        setSuggestion(stocks);
        //setData(res);
        //return json
      });
  };
  useEffect(apiGet, []);

  const searchHandler = (val) => {
    console.log(val);
    const url = "http://localhost:9090/getAllStocks/" + val;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((value) => {
        console.log(value);
        //searchedStock = value;
        setData(value);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  return (
    <div className="home">
      <Header items={[header.heading]} />
      <Marquee style={{marginTop:"95px"}}>
      Welcome to Market Watch! We provide information regarding all leading stocks listed on NSE. Get OHLC data for any stock at the click of a button!
</Marquee>
      <div className="row">
        <div className="card-column">
          <SideBar />
        </div>
        <div className="searcharea-column">
          <div className="autocomplete-wrapper">
            <Autocomplete
              onSearch={searchHandler}
              suggestions={suggestionList}
            />
          </div>
          <div
            className="autocomplete-wrapper-table"
            style={{ marginTop: "20px" }}
          >
            <SeachResult stock={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
