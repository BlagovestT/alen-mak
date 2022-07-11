import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./routes/Home.js";
import About from "./routes/About";
import Gallery from "./routes/Gallery.js";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
