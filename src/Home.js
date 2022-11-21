import React, {useState} from 'react';
import './Home.css';
import SideBar from './components/SideBar/SideBar'
import Header from './components/layout/Header'
import Autocomplete from './components/Autocomplete';
import SeachResult from './components/SearchResult';
require("./styles.css");

let searchedStock = '';
function Home() {
  const [data, setData] = useState(searchedStock);

  const searchHandler =(val)=>{
    console.log(val);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      return response.json()})
    .then(value => {
      console.log(value)
      searchedStock = value;
      setData(value);

    })
  }
  return (


    <div className='home' >
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

export default Home;
