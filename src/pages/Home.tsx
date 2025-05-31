import Navbar from "../components/Navbar";
import SaleLabel from "../components/SaleLabel";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-screen bg-hero bg-cover relative flex flex-col">
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Centered content */}
      <div className="flex-grow flex justify-center items-center relative z-10 text-center px-4">
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-normal text-white"
          >
            ONE & ONLY SOLUTION FOR OUTDOOR CLOTHING
          </motion.h1>

          <SaleLabel />
        </div>
      </div>
    </div>
  );
};

export default Home;
