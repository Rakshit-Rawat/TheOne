import { IconMail } from "@tabler/icons-react";
import { motion } from "motion/react";

const Footer = () => {
  const footerData = {
    help: {
      title: "HELP",
      links: [
        "Order Status",
        "Pickup & Delivery",
        "Shipping & Delivery",
        "Returns & Exchanges",
        "Help & FAQs",
        "Store Locator",
        "Gift Cards",
        "Contact Us",
      ],
    },
    resources: {
      title: "RESOURCES",
      links: [
        "Privacy Policy",
        "Terms and Conditions",
        "Site Map",
        "Accessibility",
        "Multi-year accessibility plan",
        "Pricing Policy",
        "Return Policy",
      ],
    },
    essential: {
      title: "ESSENTIAL",
      links: [
        "About Daone",
        "Our Brands",
        "Join the Daone Team!",
        "About Triangle",
        "ID Sustainability",
        "Jumpstart",
        "Get Started",
      ],
    },
  };

  return (
    <footer className="bg-footer px-[30px] pt-[30px] relative text-black font-inter" aria-label="Site footer">
      {/* Bottom full-width border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-black" />

      {/* Content: Flex layout for left and right div */}
      <div className="flex flex-col lg:flex-row">
        {/* LEFT (Help, Resources, Essential) */}
        <div className="w-full lg:w-[60%] border-t lg:border-r border-black">
          <div className="w-full p-8 overflow-y-auto mt-16">
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-8">
              {Object.entries(footerData).map(([key, section]) => (
                <nav key={key} aria-label={section.title}>
                  <h3 className="font-bold text-lg mb-6">{section.title}</h3>
                  <ul className="flex flex-col space-y-3">
                    {section.links.map((link, index) => (
                      <motion.li key={index}>
                        <motion.a
                          href="#"
                          className="text-gray-600 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-lime-300 rounded"
                          transition={{ ease: "easeInOut", color: "bg-lime-400", duration: 0.1 }}
                          whileHover={{ x: 6, color: "#84cc16" }}
                        >
                          {link}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT (Subscribe Now) */}
        <div className="w-full lg:w-[40%] border-t lg:border-l pl-16 border-black mt-8 lg:mt-0">
          <div className="w-full p-8 flex flex-col justify-between mt-16">
            <section aria-labelledby="subscribe-title">
              <h3 id="subscribe-title" className="font-semibold text-2xl mb-4 font-barlow">
                SUBSCRIBE NOW
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Subscribe to get updates on new products and exclusive offers.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // handle subscription here
                  alert("Subscribed!");
                }}
                className="flex flex-col space-y-4"
                aria-label="Subscription form"
              >
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="relative flex items-center w-full">
                  <IconMail className="text-gray-600 absolute left-3 pointer-events-none" aria-hidden="true" />
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="pl-10 px-3 py-2 border border-gray-300 text-sm rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-lime-300"
                    aria-required="true"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-3 bg-black rounded-lg text-white text-sm hover:bg-lime-300 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-300"
                >
                  Subscribe
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
