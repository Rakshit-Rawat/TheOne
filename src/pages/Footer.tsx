import { IconMail } from "@tabler/icons-react";

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
    <div className="bg-footer px-[30px] pt-[30px] relative text-black font-inter">
      {/* Bottom full-width border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-black" />

      {/* Content: Flex layout for left and right div */}
      <div className="flex flex-col lg:flex-row">
        {/* LEFT (Help, Resources, Essential) - This stays as 3 columns on all screen sizes */}
        <div className="w-full lg:w-[60%] border-t lg:border-r border-black">
          <div className="w-full p-8 overflow-y-auto mt-16">
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-8">
              {Object.entries(footerData).map(([key, section]) => (
                <div key={key} className="flex flex-col">
                  <h3 className="font-bold text-lg mb-6">{section.title}</h3>
                  <div className="flex flex-col space-y-3">
                    {section.links.map((link, index) => (
                      <a
                        key={index}
                        href="#"
                        className="text-gray-600 hover:text-lime-300 transition-colors text-sm leading-relaxed"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT (Subscribe Now) */}
        <div className="w-full lg:w-[40%] border-t lg:border-l pl-16 border-black mt-8 lg:mt-0">
          <div className="w-full p-8 flex flex-col justify-between mt-16">
            <div>
              <h3 className="font-semibold text-2xl mb-4 font-barlow">
                SUSCRIBE NOW
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Subscribe to get updates on new products and exclusive offers.
              </p>

              {/* Flex container for the input and icon */}
              <div className="relative flex items-center w-full">
                {/* Mail Icon */}
                <div className="absolute left-3">
                  <IconMail className="text-gray-600" />
                </div>
                {/* Email input field with padding on the left to make space for the icon */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 px-3 py-2 border border-gray-300 text-sm rounded-lg w-full"
                />
              </div>

              <button className="px-4 py-3 my-4 bg-black rounded-lg text-white text-sm hover:bg-lime-300 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
