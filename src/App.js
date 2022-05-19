import React from "react";
import Navbar from "./components/navbar/Navbar.js";
import Hero from "./components/hero/Hero.js";
import Best from "./components/best/Best.js";
import Featured from "./components/featured/Featured.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
