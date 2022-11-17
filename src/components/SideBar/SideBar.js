import React, {useState} from "react";
import Card from "../UI/Card";

const SideBar =()=>{
    const [stocks, setStocks] = useState([
        {
            id: 1,
            symbol:"NIFTY50", 
            val:"18,329.15",
            change: "-20.55(-0.11%)"
        },
        {
            id: 2,
            symbol:"NIFTY50", 
            val:"18,329.15",
            change: "-20.55(-0.11%)"
        },
        {
            id: 3,
            symbol:"NIFTY50", 
            val:"18,329.15",
            change: "-20.55(-0.11%)"
        }
    ])
    return stocks.map(stock=><Card {...stock} key={stock.id}/>)     
    
}

export default SideBar;