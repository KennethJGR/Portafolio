import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Portafolio from "./components/Portafolio";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Services from "./components/Services";

import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portafolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
