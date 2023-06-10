import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Mics from "./Components/Mics";
import About from "./Components/About";
import Map from "./Components/Map";

const App = () => {
  return (
    <div className="min-h-screen relative w-full bg-black text-secondary font-primary">
      <Header />
      <Hero />
      <Mics />
      <About />
      <Map />
    </div>
  );
};

export default App;
