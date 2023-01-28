import React from 'react';
import './App.css'; 
import Header from './components/sections/header/header'; 
import AboutMe from './components/sections/aboutme/aboutMe';
import ProyectosSection from './components/sections/proyectos/proyectos'; 
import Contacto from './components/sections/contacto/contacto';
import Footer from './components/sections/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <ProyectosSection /> 
      <Contacto /> 
      <Footer />
    </div>
  );
}

export default App;
