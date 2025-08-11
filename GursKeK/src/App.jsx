import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Product from './components/Product';
import AddCart from './components/AddCart';

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/product' element={<Product></Product>}></Route>
    <Route path='/cart' element={<AddCart></AddCart>}></Route>   
   </Routes>
   </BrowserRouter>
  )
}

export default App

