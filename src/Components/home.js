import React from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./home.css";

const Home = () => {
  const location = useLocation();

  console.log(location.state);
  return (
    <div class="container mx-auto flex flex-column">
      <img
        class="object-cover h-48 w-96 ..."
        src={location.state.urlToImage}
        alt=""
      />
    </div>
  );
};

export default Home;
