import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Mics from "./Components/Mics";
import About from "./Components/About";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const event = window.addEventListener("load", () => setLoading(false));

    return () => window.removeEventListener("load", event);
  }, []);

  return (
    <div className="min-h-screen relative w-full bg-black text-secondary font-primary">
      <Hero />
      <Mics />
      <About />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
