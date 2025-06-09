import Touch from "./Touch";
import Footer from "./Footer";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";
import ShoppingCart from "../components/ShoppingCart";

const Checkout = () => {
  return (
    <div className="h-[100vh] w-[100vw]">
      <Navbar className="bg-black" noMarginLeft></Navbar>
      <ShoppingCart></ShoppingCart>
      <Touch></Touch>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  );
};

export default Checkout;
