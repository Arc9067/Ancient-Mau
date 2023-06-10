import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Mics from "./Components/Mics";
import About from "./Components/About";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const event = window.addEventListener("load", () => {
      setTimeout(() => setLoading(false), 1000);
    });

    // gsap.defaults({ duration: 1 });

    // const HeroTimeline = gsap.timeline().from(".hero-header", {
    //   opacity: 0,
    // });

    return () => window.removeEventListener("load", event);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen relative w-full bg-black text-secondary font-primary">
        <Loading />
      </div>
    );
  }

  if (!loading) {
    return (
      <div className="min-h-screen relative w-full bg-black text-secondary font-primary">
        <Hero />
        <Mics />
        <About />
        <Map />
        <Footer />
      </div>
    );
  }
};

export default App;
