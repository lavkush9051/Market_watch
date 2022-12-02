import Card from "../UI/Card";

const SideBar =()=>{
    const stocks = [
        {
            id: 1,
            symbol:"NIFTY50", 
            val:"18,329.15",
            change: "-20.55(-0.11%)"
        },
        {
            id: 2,
            symbol:"SENSEX", 
            val:"62,887.02",
            change: "−382.44 (0.60%)"
        },
        {
            id: 3,
            symbol:"NIFTY BANK", 
            val:"43,056.45",
            change: "−208.25 (0.48%)"
        }
    ]
    return stocks.map(stock=><Card {...stock} key={stock.id}/>)     
    
}

export default SideBar;