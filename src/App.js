// import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import './index.css';
// import './data.json';

import Header from './components/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Project from './pages/Project';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';




function App() {
  const title = "Tamzin Chikhalia"

  return (
    <>

      <Header title={title} />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/Project' element={<Project />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      

      <Footer title={title} />


    </>
  );
}

export default App;
