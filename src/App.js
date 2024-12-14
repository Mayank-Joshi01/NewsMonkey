import './App.css';
import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {

 const api_key = process.env.REACT_APP_API_KEY
  const [progress,setprogress] = useState(0)

 const setProgress = (num)=>{
     setprogress({progress : num})
    }

    return (
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
        <Route path="/" element={ <News Api_Key={api_key} country="us" pageSize={6} SetProgress={setProgress} key="general" category="general"/> } />
        <Route path="/business" element={ <News Api_Key={api_key} country="us" pageSize={6} SetProgress={setProgress} key="business" category="business"/> } />
        <Route path="/entertainment" element={ <News Api_Key={api_key} country="us" pageSize={6} SetProgress={setProgress} key="entertainment" category="entertainment"/> } />
        <Route path="/science" element={ <News Api_Key={api_key} country="us" pageSize={6} SetProgress={setProgress} key="science" category="science"/> } />
        <Route path="/health" element={ <News Api_Key={api_key} country="us" pageSize={6} SetProgress={setProgress} key="health" category="health"/> } />
        <Route path="/sports" element={ <News Api_Key={api_key} country="us" pageSize={6} SetProgress={setProgress} key="sports" category="sports"/> } />
        <Route path="/technology" element={ <News Api_Key={api_key} country="us" pageSize={6} SetProgress={setProgress} key="technology" category="technology"/> } />
        
      </Routes>
        
      </div>
    )
  }

  export default App


