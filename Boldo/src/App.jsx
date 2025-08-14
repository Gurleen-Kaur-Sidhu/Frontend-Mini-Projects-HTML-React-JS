
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Aboutpage from "./pages/aboutpage/Aboutpage";
import Blog1 from "./pages/blogpage/Blog1";
import ServicePage from "./pages/services/Servicepage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/blog" element={<Blog1 />} />
          <Route path="/service" element={<ServicePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
