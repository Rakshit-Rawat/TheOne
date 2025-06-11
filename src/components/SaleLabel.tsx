import { motion } from "framer-motion";

const SaleLabel = () => {
  return (
    <motion.span
      className="font-semibold leading-none block relative text-white whitespace-nowrap"
      style={{ fontSize: "clamp(225px, 15vw, 400px)", minHeight: "1em" }} // reserve vertical space
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      30% OFF
      {/* Replaces ::after */}
      <motion.div
        className="absolute bottom-[-45px] text-white/15 pointer-events-none select-none z-[-1]"
        style={{
          fontSize: "clamp(220px, 15vw, 440px)",
          transform: "translateX(-50%)",
          lineHeight: 1,
          fontWeight: 600,
          userSelect: "none",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        30% OFF
      </motion.div>
    </motion.span>
  );
};

export default SaleLabel;
