import  './SearchResult.css';
const SeachResult =(props)=>{
    return(
        <div>
            <table className="table table-border ">
                <thead className="thead-dark space" style={{height:""}}>
                    <tr>
                    <th scope="col">Symbol</th>
                    <th scope="col">Open</th>
                    <th scope="col">High</th>
                    <th scope="col">Low</th>
                    <th scope="col">Close</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    <tr>
                    <td>StockName</td>
                    <td>{props.stock.userId}</td>
                    <td>{props.stock.id}</td>
                    <td>{props.stock.title}</td>
                    <td>12,348.12</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
            
    )
}

export default SeachResult;