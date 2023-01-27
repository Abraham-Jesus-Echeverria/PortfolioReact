import React from 'react';
import './App.css'; 
import Header from './components/sections/header/header'; 
import AboutMe from './components/sections/aboutme/aboutMe';
import ProyectosSection from './components/sections/proyectos/proyectos';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <ProyectosSection /> 
    </div>
  );
}

export default App;
