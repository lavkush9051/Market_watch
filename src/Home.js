import React, {useState, useEffect} from 'react';
import './Home.css';
import SideBar from './components/SideBar/SideBar'
import Header from './components/layout/Header'
import Autocomplete from './components/Autocomplete';
import SeachResult from './components/SearchResult';
require("./styles.css");

let searchedStock = '';
function Home() {
  const [suggestionList, setSuggestion] = useState([]);
  const [data, setData] = useState('');

  // getting list of all stocks
  useEffect(() => {
    const url= 'https://localhost:8080/getAllstocks';
    fetch(url)
    .then(response =>{
      return response.json()
    })
    .then(val => {
      console.log(val)
      setSuggestion(val);
    })
  },[])

  // search for particular stock
  const searchHandler =(val)=>{
    console.log(val);
    //const url = 'https://localhost:8080/getAllstocks' + val;
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(val)
    })
    .then(response => {
      return response.json()})
    .then(value => {
      console.log(value)
      searchedStock = value;
      setData(value);
    }).catch(error => {
      console.log("Error: ",error);
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
            <Autocomplete onSearch = {searchHandler} suggestions={suggestionList}/>
            {/* ['TATA STEEL LIMITED','TATA CONSULTENCY SERVICE', 'TATA MOTORS'] */}
          </div>
          <div className='autocomplete-wrapper-table'style={{marginTop:"20px"}}>
            <SeachResult stock={data}/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
