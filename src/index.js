import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstPage from "../src/Pages/firstPage/firstPage"
import ContactPage from "../src/Pages/contact/contact"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
  <Route path="/curriculumVitae" element={<FirstPage />} />
  <Route path="/" element={<FirstPage />} />
  <Route path="/Home" element={<FirstPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="*" element={<FirstPage />} />

 </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
