import { IconChevronRight } from "@tabler/icons-react";
import { motion } from "motion/react";

const CompanyFeatures = () => {
  const features = [
    {
      title: "Ship to Home",
      desc: "Order online and have products shipped to you.",
      src: "https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_icon_1.png?v=1702969541",
    },
    {
      title: "Free In-Store Pickup",
      desc: "Pick up your order from the nearest store at no extra cost.",
      src: "https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_icon_2.png?v=1702969541",
    },
    {
      title: "Credit Offered",
      desc: "Flexible payment options with easy credit.",
      src: "https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_icon_3.png?v=1702969541",
    },
    {
      title: "Online Customer Support",
      desc: "24/7 support for all your questions and needs.",
      src: "https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_icon_4.png?v=1702969541",
    },
  ];

  return (
    <div className="w-full  py-10 px-4">
      {/* Section Title */}
      <motion.div
        className="flex justify-center gap-6 mb-6"
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <span className="inline-block px-[12px]  py-[2px] border border-black rounded-full text-sm font-medium text-gray-600 bg-white uppercase">
          Features
        </span>
      </motion.div>

      <motion.div
        className="text-center mb-[62px] "
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        <h2 className="text-[60px] font-semibold uppercase leading-[1em] text-[#212121] ">
          COMPANY FEATURES
        </h2>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[50px]  max-w-6xl mx-auto space-x-6 mb-16 ">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-left text-center gap-5  p-4 "
            initial={{ opacity: 0, y: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
              margin: "-100px 0px -100px 0px",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="w-24 h-24 mb-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-lime-300">
              <img
                src={feature.src}
                alt={feature.title}
                className="w-12 h-12 object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-semibold uppercase text-start leading-none text-[#212121] ">
              {feature.title}
            </h3>
            <p className="text-sm font-normal text-start leading-6 text-[#666666] max-w-[300px] font-inter">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* {Banner} */}
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="h-[100px] bg-black mx-28 rounded-2xl flex justify-between items-center"
      >
        <div className="px-10 flex items-center space-x-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_logo.png?v=1702970691"
            alt="KLARNA_LOGO"
          />
          <h2 className="uppercase text-white text-[30px] font-semibold ">
            Buy now play later.
          </h2>
        </div>
        <div className="px-10">
          <button className="flex items-center text-lime-300 gap-1 border-[1px] px-2 py-2 border-lime-300 rounded-xl font-semibold  hover:bg-lime-300 transition-colors hover:text-black text-[14px]">
            <span>MAKE YOUR ORDER</span>{" "}
            <IconChevronRight size={20} fontWeight={10} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyFeatures;
