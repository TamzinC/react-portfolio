// import {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import data from "./data.json";
import "./index.css";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound.module.css/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
  const title = "Tamzin Chikhalia";

  return (
    <>
      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="rainbow-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="red" />
            <stop offset="14%" stopColor="orange" />
            <stop offset="28%" stopColor="yellow" />
            <stop offset="42%" stopColor="green" />
            <stop offset="57%" stopColor="blue" />
            <stop offset="71%" stopColor="indigo" />
            <stop offset="85%" stopColor="violet" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
        </defs>
      </svg>

      <Header title={title} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects challenges={data} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer title={title} />
    </>
  );
}

export default App;
