import React from "react";
import Navbar from "../general/NavBar";
import Background from "./Background";
import Products from "./Products";

function index() {
  return (
    <div>
      <Navbar />
      <Background />
      <Products />
    </div>
  );
}

export default index;
