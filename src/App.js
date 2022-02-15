

import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const  App =()=> {
  const [progress,setProgress]=useState(0)

  const apiKey = process.env.REACT_APP_API
  //setProgress = (progress) => {setState({progress:progress})}
  

    
    return (
      <div>
    
    <BrowserRouter>
    <LoadingBar
        color='grey'
        progress={progress}
        height={4}
        
      />
    <Navbar/>
    <Routes>
      <Route exact path="/"  element={<News apiKey={apiKey} setProgress={setProgress}   country='in' key= 'general' category='general' pageSize={6}/>} />
      <Route exact path="/general"  element={<News apiKey={apiKey} setProgress={setProgress}   country='in' key = 'general' category='general' pageSize={6}/>} />
      <Route exact path="/business"element={<News apiKey={apiKey} setProgress={setProgress}   country='in'  key='business'  category='business' pageSize={6}/>} />
      <Route exact path="/entertainment"  element={<News apiKey={apiKey} setProgress={setProgress}   country='in' key='entertainment' category='entertainment' pageSize={6}/>} />
      <Route exact path="/health"  element={<News apiKey={apiKey} setProgress={setProgress}   country='in' key='health' category='health' pageSize={6}/>} />
      <Route exact path="/science"  element={<News apiKey={apiKey} setProgress={setProgress}   country='in' key='science' category='science' pageSize={6}/>} />
      <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress}   country='in' key='technology' category='technology' pageSize={6}/>} />
      <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress}   country='in' key='sports' category='sports' pageSize={6}/>} />
    </Routes>
  </BrowserRouter>,
        
       

      </div>
    )
  
}



export default App