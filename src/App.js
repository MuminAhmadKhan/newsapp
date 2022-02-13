

import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress:0
  }
  setProgress = (progress) => {this.setState({progress:progress})}
  render() {
    return (
      <div>
    
    <BrowserRouter>
    <LoadingBar
        color='grey'
        progress={this.state.progress}
        height={4}
        
      />
    <Navbar/>
    <Routes>
      <Route exact path="/"  element={<News setProgress={this.setProgress}   country='in' key= 'general' category='general' pageSize={6}/>} />
      <Route exact path="/general"  element={<News setProgress={this.setProgress}   country='in' key = 'general' category='general' pageSize={6}/>} />
      <Route exact path="/business"element={<News setProgress={this.setProgress}   country='in'  key='business'  category='business' pageSize={6}/>} />
      <Route exact path="/entertainment"  element={<News setProgress={this.setProgress}   country='in' key='entertainment' category='entertainment' pageSize={6}/>} />
      <Route exact path="/health"  element={<News setProgress={this.setProgress}   country='in' key='health' category='health' pageSize={6}/>} />
      <Route exact path="/science"  element={<News setProgress={this.setProgress}   country='in' key='science' category='science' pageSize={6}/>} />
      <Route exact path="/technology" element={<News setProgress={this.setProgress}   country='in' key='technology' category='technology' pageSize={6}/>} />
      <Route exact path="/sports" element={<News setProgress={this.setProgress}   country='in' key='sports' category='sports' pageSize={6}/>} />
    </Routes>
  </BrowserRouter>,
        
       

      </div>
    )
  }
}



