import React from 'react';
import './App.css'; 
import Header from './components/sections/header/header'; 
import AboutMe from './components/sections/aboutme/aboutMe';
import ProyectosSection from './components/sections/proyectos/proyectos'; 
import Contacto from './components/sections/contacto/contacto';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <ProyectosSection /> 
      <Contacto /> 
    </div>
  );
}

export default App;
