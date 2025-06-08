import React from "react";
import Touch from "./Touch";
import Footer from "./Footer";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";

const Checkout = () => {
  return (
    <div className="h-[100vh] w-[100vw]">
        <Navbar className="bg-black" noMarginLeft></Navbar>
      <Touch></Touch>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  );
};

export default Checkout;
