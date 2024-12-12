import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  api_key = process.env.REACT_APP_API_KEY
  state = {
    progress : 0}

 setProgress = (num)=>{
     this.setState({progress : num})
    }
  render() {

    return (
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
        <Route path="/" element={ <News Api_Key={this.api_key} SetProgress={this.setProgress} key="general" category="general"/> } />
        <Route path="/business" element={ <News Api_Key={this.api_key} SetProgress={this.setProgress} key="business" category="business"/> } />
        <Route path="/entertainment" element={ <News Api_Key={this.api_key} SetProgress={this.setProgress} key="entertainment" category="entertainment"/> } />
        <Route path="/science" element={ <News Api_Key={this.api_key} SetProgress={this.setProgress} key="science" category="science"/> } />
        <Route path="/health" element={ <News Api_Key={this.api_key} SetProgress={this.setProgress} key="health" category="health"/> } />
        <Route path="/sports" element={ <News Api_Key={this.api_key} SetProgress={this.setProgress} key="sports" category="sports"/> } />
        <Route path="/technology" element={ <News Api_Key={this.api_key} SetProgress={this.setProgress} key="technology" category="technology"/> } />
        
      </Routes>
        
      </div>
    )
  }
}

