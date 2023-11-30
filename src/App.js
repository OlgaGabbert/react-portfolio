import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import projectsData from './projectsData';

function App() {
  
  return (
    <div>
      <Navbar className='my-navbar'
        imgSrc="#"
        linkSrc="#"
        link="#"
        projectsLink="#" />
      <Projects className='my-projects' projectData={projectsData}/>
      <Footer className='my-footer' contactLink="#" />
    </div>
  );
}

export default App;
