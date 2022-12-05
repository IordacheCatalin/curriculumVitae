import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';
import FirstPage from "../src/Pages/firstPage/firstPage"
import ContactPage from "../src/Pages/contact/contact"



function App() {
  return (

  
  <Routes>
  <Route path="/curriculumVitae" element={<FirstPage />} />
  <Route path="/" element={<FirstPage />} />
  <Route path="/Home" element={<FirstPage />} />
  <Route path="/contact" element={<ContactPage />} />
 </Routes>

  
  );
}

export default App;
