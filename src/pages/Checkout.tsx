import { useState } from "react";
import Touch from "./Touch";
import Footer from "./Footer";
import Order from "../components/Order";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";
import ShoppingCart from "../components/ShoppingCart";

const Checkout = () => {
  const [isPayment, setIsPayment] = useState(false);
  const handleProceedToPayment = () => {
    setIsPayment(true);
  };
  return (
    <div className="h-[100vh] w-[100vw]">
      <Navbar className="bg-black" noMarginLeft></Navbar>
      {isPayment ? (
        <Order />
      ) : (
        <ShoppingCart onProceedToPayment={handleProceedToPayment} />
      )}
      <Touch></Touch>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  );
};

export default Checkout;
