import React from "react";
import "./App.css";
import { ColorModeContext, useMode } from "./components/theme.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Topbar from "./components/Topbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./components/index.jsx";
import Team from "./components/Team.jsx";
import Invoices from "./components/Invoices.jsx";
import Contact from "./components/Contact.jsx";
import Form from "./components/Form.jsx";


function App() {
  const [theme, colorMode] = useMode();

  return (
<div>
<BrowserRouter>
<ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            {/* <Topbar /> */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contact" element={<Contact />} />
             
              <Route path="/form" element={<Form />} />
        
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
</BrowserRouter>
   

    </div>
  );
}

export default App;
