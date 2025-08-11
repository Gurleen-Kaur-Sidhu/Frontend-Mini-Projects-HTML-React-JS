import React from 'react'
import Homepage from './components/Homepage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css' 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.min.js';
import Aboutpage from './components/aboutpage/Aboutpage';
import Blog1 from './components/blogpage/Blog1';


const App = () => {
  return (
    <div>
      {/* <Homepage></Homepage> */}

      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/about" element={<Aboutpage />} />
    <Route path="/blog" element={<Blog1 />} />


        </Routes></BrowserRouter>
    </div>
  )
}

export default App

