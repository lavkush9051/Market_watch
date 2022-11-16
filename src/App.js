import React, {Fragment, useState, useEffect} from 'react';
// we will useEffect for card data so that it would change only if any updation in db.
import './App.css';
import SideBar from './components/SideBar/SideBar'
import Header from './components/layout/Header'
import Autocomplete from './components/Autocomplete';
import SeachResult from './components/SearchResult';
require("./styles.css");


let searchedStock = '';
function App() {
  const [data, setData] = useState(searchedStock);
  //console.log(data);

  const searchHandler =(val)=>{
    console.log(val);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      return response.json()})
    .then(value => {
      console.log(value)
      searchedStock = value;
      setData(value);
      //console.log(searchedStock);
    })
  }
  return (

    // <Fragment>
    //   <section>
    //     <Header/>
    //   </section>      
      
    //   <section>
    //     <div>
    //     <SideBar/>
    //     </div>
    //     <div>
    //     <Autocomplete onSearch = {searchHandler} suggestions={['TATA STEEL LIMITED','TATA CONSULTENCY SERVICE', 'TATA MOTORS']}/>

    //     </div>
    //   </section>
    //   <section>
    //   {/* <Autocomplete onSearch = {searchHandler} suggestions={['TATA STEEL LIMITED','TATA CONSULTENCY SERVICE', 'TATA MOTORS']}/> */}

    //   </section>
      
    //   <div className={classes.flexautodiv} style={{marginTop:"6%"}}>
        
    //       <div><Card symbol={"NIFTY50"} val={"18,329.15"} change={"-20.55(-0.11%)"}/>
    //       </div>

    //       <div className={classes.flexauto}>
    //     <Autocomplete onSearch = {searchHandler} suggestions={['TATA STEEL LIMITED','TATA CONSULTENCY SERVICE', 'TATA MOTORS']}/>
    //     </div>
    //     {/* <span>
    //     <Autocomplete onSearch = {searchHandler} suggestions={['TATA STEEL LIMITED','TATA CONSULTENCY SERVICE', 'TATA MOTORS']}/>
    //     </span> */}
    //   </div>
    //   <div className={classes.flexautodiv}>
    //     <span>  
    //       <Card symbol={"NIFTY NEXT50"} val={"43,419.90"} change={"230.99(0.53%)"}/>
    //     </span>
    //     <span className={classes.flexauto}>
    //       < SeachResult stock={searchedStock}/>
    //     </span>
        
    //   </div>
    //   <div className={classes.flexautodiv} style={{marginLeft:"0.3%"}}>
    //     <Card symbol={"NIFTY BANK"} val={"42,076"} change={"-60.30(-0.14%)"}/>
    //   </div>
    // </Fragment>
    <div className='app' >
      <Header/>
      <div className='row'>
        <div className='card-column'>
          <SideBar/>
        </div>
        <div className='searcharea-column'>
          <div className='autocomplete-wrapper' >
            <Autocomplete onSearch = {searchHandler} suggestions={['TATA STEEL LIMITED','TATA CONSULTENCY SERVICE', 'TATA MOTORS']}/>
          </div>
          <div className='autocomplete-wrapper-table'style={{marginTop:"20px"}}>
            <SeachResult stock={searchedStock}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
