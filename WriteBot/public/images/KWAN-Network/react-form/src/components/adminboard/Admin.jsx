import React ,{useState, useEffect}from 'react'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import Dashboard from './Dashboard.jsx'
import { Routes , Route, Outlet} from 'react-router-dom'
import Login from '../loginsignin/Login.jsx'

const Admin = () => {
  const [token, setToken] = useState(localStorage.getItem("access_token") || null);

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    console.log("sXDCzvfxbgv",storedToken);
    setToken(storedToken);
  }, []);
 
  if (!token) {
    console.log("no token")
    return <Login />;
  }
  
  return (
    <div className='admin-container'>
      <Header></Header>
      <Sidebar></Sidebar>
      <Dashboard>
        <Outlet></Outlet>
      </Dashboard>     
    </div>
  )
}

export default Admin
