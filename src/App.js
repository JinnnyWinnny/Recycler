import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import Resources from "./components/pages/Resources";
import Progress from "./components/pages/Progress";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/aboutus" element={<AboutUs />}></Route>
          <Route exact path="/resources" element={<Resources />}></Route>
          <Route exact path="/progress" element={<Progress />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
