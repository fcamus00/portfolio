import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Clients from './sections/Clients';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App: React.FC = () => {
  return (
    <main className="max-w-full mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
