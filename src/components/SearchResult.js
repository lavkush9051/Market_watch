import "./SearchResult.css";
const SeachResult = (props) => {
  return (
    <div>
      <table className="table table-border ">
        <thead className="thead-dark space" style={{ height: "" }}>
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col">Open</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
            <th scope="col">Close</th>
          </tr>
        </thead>
        {typeof props.stock.symbol == "undefined" ? (
          <>
            <tbody className="tbody">
              <tr>                
                <td style={{fontSize:18}} colSpan={"5"}>No records found</td>
              </tr>
            </tbody>
          </>
        ) : (
          <>
            <tbody className="tbody">
              <tr>
                <td>{props.stock.symbol}</td>
                <td>{props.stock.open}</td>
                <td>{props.stock.high}</td>
                <td>{props.stock.low}</td>
                <td>{props.stock.close}</td>
              </tr>
            </tbody>
          </>
        )}
      </table>
    </div>
  );
};

export default SeachResult;
