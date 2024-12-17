import './App.css';
import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {

 const api_key = process.env.REACT_APP_API_KEY

 const [progress,setprogress] = useState(0)
 const [Search,setSearch] = useState("")
 const [Key,setKey] = useState("")
 const setProgress = (num)=>{
     setprogress({progress : num})
    }

    return (
      <div>
        <Navbar Search={Search} setSearch={setSearch} setKey={setKey}/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
        <Route exct path="/NewsMonkey" element={ <News Api_Key={api_key} country="us"  SetProgress={setProgress} key="top" category="top"/> } />
        <Route exct path="/NewsMonkey/Business" element={ <News Api_Key={api_key} country="us"  SetProgress={setProgress} key="business" category="business"/> } />
        <Route exct path="/NewsMonkey/Entertainment" element={ <News Api_Key={api_key} country="us"  SetProgress={setProgress} key="entertainment" category="entertainment"/> } />
        <Route exct path="/NewsMonkey/Science" element={ <News Api_Key={api_key} country="us"  SetProgress={setProgress} key="science" category="science"/> } />
        <Route exct path="/NewsMonkey/Health" element={ <News Api_Key={api_key} country="us"  SetProgress={setProgress} key="health" category="health"/> } />
        <Route exct path="/NewsMonkey/Food" element={ <News Api_Key={api_key} country="us"  SetProgress={setProgress} key="food" category="food"/> } />
        <Route exct path="/NewsMonkey/Crime" element={ <News Api_Key={api_key} country="us"  SetProgress={setProgress} key="crime" category="crime"/> } />
        <Route exct path="/NewsMonkey/Education" element={ <News Api_Key={api_key} country="us"  SetProgress={setProgress} key="education" category="education"/> } />
        <Route exct path="/NewsMonkey/Politics" element={ <News Api_Key={api_key} country="us"  SetProgress={setProgress} key="politics" category="politics"/> } />
        <Route exct path="/NewsMonkey/Sports" element={ <News Api_Key={api_key} country="us"  SetProgress={setProgress} key="sports" category="sports"/> } />
        <Route exct path="/NewsMonkey/Technology" element={ <News Api_Key={api_key} country="us"  SetProgress={setProgress} key="technology" category="technology"/> } />
        <Route path="/NewsMonkey/Topic/*" element={ <News Api_Key={api_key} country="us" q={Search}  SetProgress={setProgress} key={Key} category="technology"/> } />
      </Routes>
        
      </div>
    )
  }

  export default App


