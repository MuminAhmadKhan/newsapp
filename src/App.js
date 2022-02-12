

import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/"  element={<News country='in' key= 'general' category='general' pageSize={6}/>} />
      <Route exact path="/general"  element={<News country='in' key = 'general' category='general' pageSize={6}/>} />
      <Route exact path="/business"element={<News country='in'  key='business'  category='business' pageSize={6}/>} />
      <Route exact path="/entertainment"  element={<News country='in' key='entertainment' category='entertainment' pageSize={6}/>} />
      <Route exact path="/health"  element={<News country='in' key='health' category='health' pageSize={6}/>} />
      <Route exact path="/science"  element={<News country='in' key='science' category='science' pageSize={6}/>} />
      <Route exact path="/technology" element={<News country='in' key='technology' category='technology' pageSize={6}/>} />
      <Route exact path="/sports" element={<News country='in' key='sports' category='sports' pageSize={6}/>} />
    </Routes>
  </BrowserRouter>,
        
       

      </div>
    )
  }
}



