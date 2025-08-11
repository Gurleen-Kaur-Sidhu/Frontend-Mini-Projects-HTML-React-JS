import React from 'react'
import './Maintitle.css'

const Maintitle = ({page}) => {
  return (
    <div className='title'>
        <h1>{page}</h1>
        <nav>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <a href='/' >
                    <i  class="bi bi-house" id='icon'></i></a>
                </li>
                <li className='breadcrumb-item active'>{page}</li>
            </ol>
        </nav>
      
    </div>
  )
}

export default Maintitle
