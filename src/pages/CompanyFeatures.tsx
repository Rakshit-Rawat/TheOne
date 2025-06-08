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
    <div className="w-full py-10 px-4">
      {/* Section Title */}
      <motion.div
        className="flex justify-center gap-6 mb-6"
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <span className="inline-block px-[12px] py-[2px] border border-black rounded-full text-sm font-medium text-gray-600 bg-white uppercase">
          Features
        </span>
      </motion.div>

      <motion.div
        className="text-center mb-[62px]"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        <h2 className="text-[60px] md:text-[50px] sm:text-[40px] font-semibold uppercase leading-[1em] text-[#212121]">
          COMPANY FEATURES
        </h2>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-[770px]:grid-cols-1 gap-[50px] max-w-6xl mx-auto space-x-6 max-[770px]:space-x-0 mb-16">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-left text-center gap-5 p-4"
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
            <h3 className="text-2xl font-semibold uppercase text-start leading-none text-[#212121]">
              {feature.title}
            </h3>
            <p className="text-sm font-normal text-start leading-6 text-[#666666] max-w-[300px] font-inter">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Banner - Responsive Layout */}
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-black rounded-2xl flex items-center
                   h-[120px] mx-28 justify-between
                   max-[770px]:h-auto max-[770px]:mx-4 max-[770px]:flex-col max-[770px]:gap-8 max-[770px]:py-10"
      >
        <div className="px-12 flex items-center space-x-6
                        max-[770px]:px-8 max-[770px]:flex-col max-[770px]:space-x-0 max-[770px]:space-y-6 max-[770px]:text-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_logo.png?v=1702970691"
            alt="KLARNA_LOGO"
            className="w-16 h-auto max-[770px]:w-24 max-[770px]:h-auto"
          />
          <h2 className="uppercase text-white font-semibold
                         text-[36px] lg:text-[32px] md:text-[28px] max-[770px]:text-[24px]">
            Buy now play later.
          </h2>
        </div>
        <div className="px-12 max-[770px]:px-8">
          <button className="flex items-center text-lime-300 gap-2 border-[1px] px-4 py-3 border-lime-300 rounded-xl font-semibold hover:bg-lime-300 transition-colors hover:text-black text-[16px]
                             max-[770px]:px-6 max-[770px]:py-4 max-[770px]:text-[14px]">
            <span>MAKE YOUR ORDER</span>
            <IconChevronRight size={22} fontWeight={10} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyFeatures;