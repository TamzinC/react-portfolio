// import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import data from './data.json';
import './index.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound.module.css/NotFound';
import Footer from './components/Footer/Footer';




function App() {
  const title = "Tamzin Chikhalia"

  return (
    <>

      <Header title={title} />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects challenges={data}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      

      <Footer title={title} />


    </>
  );
}

export default App;
