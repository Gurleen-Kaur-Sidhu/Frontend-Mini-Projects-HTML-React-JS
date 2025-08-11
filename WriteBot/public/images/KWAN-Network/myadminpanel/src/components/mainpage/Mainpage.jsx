import React from 'react'
import './Mainpage.css'
import Maintitle from './Maintitle.jsx'

import Dashboard from './dashboard/Dashboard.jsx'

const Mainpage = () => {
  return (
    <main id='main' className='main'>
    {/* <Maintitle page="Dashboard"></Maintitle> */}
    <Dashboard></Dashboard>

    </main>
  )
}

export default Mainpage
