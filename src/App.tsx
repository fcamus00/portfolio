import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

const App: React.FC = () => {
  return (
    <main className="max-w-full mx-auto relative">
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
