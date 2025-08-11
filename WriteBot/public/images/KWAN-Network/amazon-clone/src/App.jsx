import React from 'react'

import "react-bootstrap-icons";

import 'bootstrap-icons/font/bootstrap-icons.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';



import Home from './components/Home';
import Signin from './components/navbar/Signin.jsx';
import Account from './components/navbar/Account.jsx';
import Bestseller from './components/mainpage/Bestseller.jsx';
import Otp from './components/navbar/Otp.jsx';
import Product from './components/mainpage/Product.jsx';
import Product4 from './components/mainpage/Product4.jsx';

import Cart from './components/mainpage/Cart.jsx';






const App = () => {
  return (
    <div>

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />



    <Route path="/signin" element={<Signin />} />
    <Route path="/location" element={<Location />} />
    <Route path="/account" element={<Account />} />     
    <Route path="/bestseller" element={<Bestseller />} />   
    <Route path="/otp" element={<Otp />} />   
    <Route path="/product/:id" element={<Product />} />
    <Route path="/product4/:id" element={<Product4 />} /> 
    <Route path='/cart' element ={<Cart></Cart>}/>
    



    
    </Routes>
  
    </BrowserRouter>
    <ToastContainer/>

    </div>
  )
}

export default App

