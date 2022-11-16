import React,{Fragment} from "react";
import classes from './SearchResult.module.css';


const SeachResult =(props)=>{
    //userId: 1, id: 1, title: 'delectus aut autem', completed: false
    return(
        <div >
        {/* <caption className={classes.caption}>Britania</caption> */}
        <p>Caption</p>
            <table className={classes.wrap}>
                
                <thead className={classes.tbody} >
                <tr className={classes.th}>
                    <th style={{width:"200px",padding:"0px"}}>Symbol</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                    {/* <thead>open</thead>
                    <thead>high</thead>
                    <thead>low</thead>
                    <thead>close</thead> */}

                </tr>
                </thead>
                <tbody>
                <tr className={classes.tres}>
                    <td style={{padding:"20px"}}>Britania</td>
                    <td>{props.stock.userId}</td>
                    <td>{props.stock.id}</td>
                    <td>{props.stock.title}</td>
                    <td>dummy_val</td>

                </tr>
                </tbody>
            </table>
        </div>
            
    )
}

export default SeachResult;