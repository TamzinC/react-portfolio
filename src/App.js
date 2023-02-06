import {useState} from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './index.css';



function App() {
  return (
    <>

      <Header />

      <Home />

      <Gallery />

      <Project />

      <Contact />

      <Footer />

    </>
  );
}

export default App;
