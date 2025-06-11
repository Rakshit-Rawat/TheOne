import { useState, useEffect, useRef } from "react";
import Touch from "./Touch";
import Footer from "./Footer";
import Order from "../components/Order";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";
import ShoppingCart from "../components/ShoppingCart";

const Checkout = () => {
  const [isPayment, setIsPayment] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const handleProceedToPayment = () => {
    setIsPayment(true);
  };

  // Focus management: move focus to main area when payment step changes
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.focus();
    }
  }, [isPayment]);

  return (
    <div className="h-[100vh] w-[100vw]">
      <Navbar className="bg-black" noMarginLeft />
      <main
        ref={mainRef}
        tabIndex={-1}
        aria-live="polite"
        aria-atomic="true"
        className="outline-none"
      >
        {isPayment ? (
          <Order />
        ) : (
          <ShoppingCart onProceedToPayment={handleProceedToPayment} />
        )}
      </main>
      <Touch />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Checkout;
