import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarItem from "./Components/Navbar";
import Newsa from "./Components/News";
import Contact from "./Components/contact";
import Home from "./Components/home";

const App = () => {
  return (
    <>
      <NavbarItem />
      <Routes>
        <Route path="/" element={<Newsa />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default App;
