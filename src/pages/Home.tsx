import Navbar from "../components/Navbar";
import SaleLabel from "../components/SaleLabel";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-screen bg-hero bg-cover relative flex flex-col">
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Centered content */}
      <main className="flex-grow flex justify-center items-center relative z-10 text-center px-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-semibold text-white"
          >
            ONE & ONLY SOLUTION FOR OUTDOOR CLOTHING
          </motion.h1>

          <SaleLabel />
        </div>
      </main>

      {/* Optional overlay to enhance text readability */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
    </div>
  );
};

export default Home;
