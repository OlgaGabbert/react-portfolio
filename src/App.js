import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

function App() {
  const projectData = [
    {
      imgSrc: 'JokesProject.png',
      alt: 'Jokes project',
      title: 'Jokes from APIs',
      description: 'Description of Project 1.',
      technologiesUsed: ["Node.js", "Express", "MongoDB"],
      link: '#',
    },
    {
      imgSrc: 'To-doProject.png',
      alt: 'To-do-app',
      title: 'To-do-App',
      description: 'Description of Project 2.',
      technologiesUsed: ["React", "Firebase"],
      link: '#',
    },
    {
      imgSrc: 'AnotherProject.png',
      alt: 'Project Name',
      title: 'Project 3',
      description: 'Description of Project 3.',
      link: '#',
      technologiesUsed: ["HTML", "CSS", "JavaScript"],
    },
  ];
  return (
    <div>
      <Navbar className='my-navbar'
        imgSrc="#"
        linkSrc="#"
        link="#"
        projectsLink="#" />
      <Projects className='my-projects' projectData={projectData}/>
      <Footer className='my-footer' contactLink="#" />
    </div>
  );
}

export default App;
