import { FC } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

const App: FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default App;
