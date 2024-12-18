import './App.css';
import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {

 const api_key = process.env.REACT_APP_API_KEY

 const [progress,setprogress] = useState(0)
 const [country,setCountry] = useState("")
 const [countryname,setCountryname] = useState("")
 const [Search,setSearch] = useState("")
 const [Key,setKey] = useState("")
 const setProgress = (num)=>{
     setprogress({progress : num})
    }

    return (
      <div>
        <Navbar Search={Search} setSearch={setSearch} setKey={setKey} setCountry={setCountry} setCountryname={setCountryname}/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
        <Route exct path="/NewsMonkey" element={ <News Api_Key={api_key} country={country}  SetProgress={setProgress} key="top" category="world" countryname={countryname}/> } />
        <Route exct path="/NewsMonkey/Business" element={ <News Api_Key={api_key} country={country}  SetProgress={setProgress} key={`business/${country}`} category="business" countryname={countryname}/> } />
        <Route exct path="/NewsMonkey/Entertainment" element={ <News Api_Key={api_key} country={country}  SetProgress={setProgress} key={`entertainment/${country}`} category="entertainment" countryname={countryname}/> } />
        <Route exct path="/NewsMonkey/Science" element={ <News Api_Key={api_key} country={country}  SetProgress={setProgress} key={`science/${country}`} category="science" countryname={countryname}/> } />
        <Route exct path="/NewsMonkey/Health" element={ <News Api_Key={api_key} country={country}  SetProgress={setProgress} key={`health/${country}`} category="health" countryname={countryname}/> } />
        <Route exct path="/NewsMonkey/Food" element={ <News Api_Key={api_key} country={country}  SetProgress={setProgress} key={`food/${country}`} category="food" countryname={countryname}/> } />
        <Route exct path="/NewsMonkey/Crime" element={ <News Api_Key={api_key} country={country}  SetProgress={setProgress} key={`crime/${country}`} category="crime" countryname={countryname}/> } />
        <Route exct path="/NewsMonkey/Education" element={ <News Api_Key={api_key} country={country}  SetProgress={setProgress} key={`education/${country}`} category="education" countryname={countryname}/> } />
        <Route exct path="/NewsMonkey/Politics" element={ <News Api_Key={api_key} country={country}  SetProgress={setProgress} key={`politics/${country}`} category="politics" countryname={countryname}/> } />
        <Route exct path="/NewsMonkey/Sports" element={ <News Api_Key={api_key} country={country}  SetProgress={setProgress} key={`sports/${country}`} category="sports" countryname={countryname}/> } />
        <Route exct path="/NewsMonkey/Technology" element={ <News Api_Key={api_key} country={country}  SetProgress={setProgress} key={`technology/${country}`} category="technology" countryname={countryname}/> } />
        <Route path="/NewsMonkey/Topic/*" element={ <News Api_Key={api_key} q={Search} topic={Key} SetProgress={setProgress} key={Key} /> } />
      </Routes>
        
      </div>
    )
  }

  export default App


