import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Program from '../components/Program';
import './Home.css';

function Home() {
  return (
    <>
    <Header />
    <About />
    <Program />
    <Contact />
    <Footer />
    </>
  )
}

export default Home;