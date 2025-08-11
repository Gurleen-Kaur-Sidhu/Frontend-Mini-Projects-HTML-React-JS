import React,{useState} from 'react'
import './Nav.css'

const Nav = () => {

    const handleTheme =()=>{
    var element = document.body;
    document.body.classList.toggle("dark-mode");
  }

  return (
    <div className='my-nav'>
    <button className='btn' ><i class="bi bi-gear"></i></button>
    <button className='btn'><i class="bi bi-brightness-high"  onClick={handleTheme}></i></button>
    <button className='btn'><i class="bi bi-bell"></i></button>
    <button className='btn'><i class="bi bi-person"></i>
    </button>

    </div>
  )
}

export default Nav

