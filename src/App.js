import React from "react";
import Navbar from "./components/Navbar";
import TwoCol from "./components/TwoCol";
import SecondCol from "./components/SecondCol";
import Feedback from "./components/Feedback";
import Footer from "./components/footer";
import Slider from "./components/Slider";
import Scroller from "./components/Scroller";



function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <TwoCol />
      <SecondCol />
      <Slider/>
      <Feedback />
      <Scroller/>
      <Footer />
    </div>
  );
}

export default App;
