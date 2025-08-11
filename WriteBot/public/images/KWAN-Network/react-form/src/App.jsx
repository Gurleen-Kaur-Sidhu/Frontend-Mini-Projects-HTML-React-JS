import React from "react";
import Login from "./components/loginsignin/Login.jsx";
import "bootstrap/dist/js/bootstrap.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/loginsignin/Signup.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./components/mainpage/Mainpage.jsx";
import Footer from "./components/mainpage/Footer.jsx";
import Section3 from "./components/mainpage/Section3.jsx";

// import Section6 from "./components/Section6.jsx";
import Plans from "./components/mainpage/Plans.jsx";
import Admin from "./components/adminboard/Admin.jsx";
import Transcription from "./components/adminboard/dashboard/Transcription.jsx";
import Dashboard from "./components/adminboard/Dashboard.jsx";
import Subtitle from './components/adminboard/dashboard/Subtitle.jsx';
import Userslist from './components/adminboard/dashboard/Userslist.jsx';
import RolesPage from './components/adminboard/dashboard/RolesPage.jsx';
import Forgetpassword from "./components/loginsignin/Forgetpassword.jsx";


const App = () => {
  


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/footer" element={<Footer />} />
        
          <Route path="/section3" element={<Section3 />} />
        
         
          
          <Route path="/forgetpassword" element={<Forgetpassword />} />

          <Route path="/plans" element={<Plans />} />

          <Route path="/admin" element={<Admin />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />     
            <Route path="transcription" element={<Transcription />} />
            <Route path="subtitle" element={<Subtitle />} />
            <Route path="userlist" element={<Userslist />} />
            <Route path="rolepage" element={<RolesPage />} />


          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

