import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Clients from './sections/Clients';

const App: React.FC = () => {
  return (
    <main className="max-w-full mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
    </main>
  );
};

export default App;
