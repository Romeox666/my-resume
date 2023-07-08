import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Educations from "./Components/Educations";

function App() {

  return (
    <div className=" bg-gradient-to-r from-gray-800 to-gray-900">
      <Navbar />
      <Home />
      <Educations />
      <Footer />
    </div>
  );
}

export default App;
