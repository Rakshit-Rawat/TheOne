import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconShoppingCart, IconSearch, IconMenu2 } from "@tabler/icons-react";

type navItems = {
  name: string;
  href: string;
  submenu?: string[];
};

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const navItems: navItems[] = [
    { name: "Home", href: "#" },
    {
      name: "Shop",
      href: "#",
      submenu: ["All Products", "Categories", "New Arrivals"],
    },
    {
      name: "Product",
      href: "#",
      submenu: ["T-Shirts", "Jackets", "Accessories"],
    },
    { name: "Pages", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="tablet:bg-transparent bg-neutral-800">
      <div className="flex items-center justify-between w-full px-7 py-6 space-x-4 overflow-hidden ml-10">
        {/* Logo */}
        <div className="mr-[140px] ">
          <a href="https://demo80.leotheme.com/prestashop/leo_daone_elementor_demo/">
            <h1 className="text-white text-[40px] font-semibold">DAONE.</h1>
          </a>
        </div>

        {/* Nav menu */}

        <nav className=" justify-center w-full hidden tablet:flex">
          {/* Outer wrapper for spacing */}
          <div className="w-full max-w-5xl ">
            <div className=" px-4 py-2 flex items-center justify-center">
              {/* Inner container with blur and translucent background */}
              <ul className="flex gap-3 backdrop-blur-md bg-white/10 border border-white/40 rounded-full p-2">
                {navItems.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedTab(item.name);
                    }}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative px-5 py-3 text-sm font-semibold rounded-full transition-colors
              backdrop-blur-md ${
                selectedTab === item.name
                  ? "bg-lime-300 text-black"
                  : " text-white hover:bg-lime-300 hover:text-black"
              }
            `}
                  >
                    <a href={item.href}>{item.name.toUpperCase()}</a>

                    {item.submenu && hoveredItem === item.name && (
                      <ul className="absolute top-full left-2 transform mt-2 w-40 bg-white text-black rounded shadow-md z-50">
                        {item.submenu.map((subItem, subIdx) => (
                          <li
                            onMouseEnter={() => setHoveredItem(item.name)}
                            onMouseLeave={() => setHoveredItem(null)}
                            key={subIdx}
                            className="px-4 py-2 hover:bg-lime-100 text-sm font-medium"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Search + Cart */}
        <div className="flex items-center space-x-4 flex-shrink-0 px-6 ">
          {/* Form wrapper with border */}
          <form
            action="/"
            method="get"
            className="border-b border-white pb-1 w-[200px] hidden mobile:block"
          >
            {/* Input with no border and padding to create visible gap */}
            <input
              type="text"
              placeholder="SEARCH"
              value={searchQuery}
              name="search_query"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-white placeholder-white bg-transparent outline-none border-none pb-1 text-sm"
            />
          </form>

          {/* Mobile Search Icon (only below 575px) */}
          <button
            className="block mobile:hidden"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          >
            <IconSearch className="text-white w-5 h-5" />
          </button>

          {/* Mobile Search Input (only when isSearchVisible is true) */}
          <AnimatePresence>
            {isSearchVisible && (
              <motion.div
                className="mobile:block absolute top-20 right-[30px] px-20 "
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="text"
                  placeholder="SEARCH"
                  value={searchQuery}
                  name="search_query"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-black placeholder-black bg-white outline-none border-none rounded-lg py-2 px-4 text-sm "
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-white cursor-pointer relative">
            <div className="w-8 h-8 rounded flex items-center justify-center">
              <IconShoppingCart />
            </div>
            <span className="absolute -top-1 -right-1 bg-lime-400 text-black rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
              0
            </span>
          </div>

          <div className="block tablet:hidden p-2 bg-lime-300 rounded-lg">
            <IconMenu2 size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
