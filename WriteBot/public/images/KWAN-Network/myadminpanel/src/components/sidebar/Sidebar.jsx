import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'


const Sidebar = () => {
   return (
      <div>
         <aside id='mysidebar' className='sidebar'>
            <ul className='sidebar-nav' id='sidebar-nav'>

               <li className='nav-item'>
                  <div className='nav-link collapsed'>
                     <i className="bi bi-speedometer2"></i>
                     <Link to='/dashboard' style={{ color: "white" }}>Dashboard</Link>
                     {/* <i className='bi bi-chevron-down ms-auto'></i> */}
                  </div>

                
               </li>
               <p className='para'>Data </p>
               <li className='nav-item'>

                  <div className='nav-link collapsed'>
                     <i class="bi bi-people"></i>
                     <Link to='/team' style={{ color: "white" }}>Manage Team</Link>

                  </div>

               </li>

               <li className='nav-item'>
                  <div className='nav-link collapsed'>
                     <i class="bi bi-person-rolodex"></i>
                     <Link to='/contact' style={{ color: "white" }}>Contacts Info</Link>

                  </div>

               </li>

               <li className='nav-item'>
                  <div className='nav-link collapsed'>
                     <i class="bi bi-bag"></i>
                     <Link to='/faq' style={{ color: "white" }}>Faq Question</Link>

                  </div>


               </li>


               <p className='para'>Pages </p>
               <li className='nav-item'>
                  <a className='nav-link collapsed'>
                     <i class="bi bi-person-bounding-box"></i>
                     <Link to='/profile' style={{ color: "white" }}>Profile-Info</Link>
                  </a>

               </li>

               <li className='nav-item'>
                  <a className='nav-link collapsed'>
                  <i class="bi bi-calendar-minus"></i>
                     <Link to='/calendar' style={{ color: "white" }}>Calendar</Link>
                  </a>

               </li>




               <p className='para'>Graphs</p>
               <li className='nav-item'>
                  <Link to='/bar' className='nav-link'>
                     Bar Graph
                  </Link>
               </li>

               <li className='nav-item'>
                  <a className='nav-link' href='#'>
                     <Link to='/linechart' style={{ color: "white" }}>Line Chart</Link>
                  </a>
               </li>

               {/* <li className='nav-item'>
                  <a className='nav-link' href='#'>
                     <span>Pie Chart</span>
                  </a>
               </li>

               <li className='nav-item'>
                  <a className='nav-link' href='#'>
                     <span>Geography Chart</span>
                  </a>
               </li> */}

            </ul>

         </aside>
      </div>

   )
}

export default Sidebar















