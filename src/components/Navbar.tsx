import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  IconShoppingCart,
  IconSearch,
  IconMenu2,
} from "@tabler/icons-react";
import Logo from "../../public/TheOne..png";
import cn from "clsx";

type navItems = {
  name: string;
  href: string;
  submenu?: string[];
};

interface NavbarProps {
  className?: string;
  noMarginLeft?: boolean;
}

export default function Navbar({ className, noMarginLeft }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className="tablet:bg-transparent bg-neutral-800 relative z-50">
      <div
        className={cn(
          "flex items-center justify-between w-full px-7 py-6 space-x-4 overflow-visible",
          !noMarginLeft && "ml-10",
          className
        )}
      >
        {/* Logo */}
        <div className="mr-[140px]">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="justify-center w-full hidden tablet:flex relative">
          <div className="w-full max-w-5xl">
            <div className="px-4 py-2 flex items-center justify-center">
              <ul className="flex gap-3 backdrop-blur-md bg-white/10 border border-white/40 rounded-full p-2 relative">
                {navItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <li
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedTab(item.name);
                      }}
                      className={cn(
                        "px-5 py-3 text-sm font-semibold rounded-full transition-colors backdrop-blur-md cursor-pointer",
                        selectedTab === item.name
                          ? "bg-lime-300 text-black"
                          : "text-white hover:bg-lime-300 hover:text-black"
                      )}
                    >
                      <a href={item.href}>{item.name.toUpperCase()}</a>
                    </li>

                    {item.submenu && hoveredItem === item.name && (
                      <div className="absolute top-full left-3/4 transform -translate-x-1/2 mt-2 w-48 bg-white/95 backdrop-blur-md text-black rounded-lg shadow-xl border border-white/20 z-[100] overflow-hidden">
                        {item.submenu.map((subItem, subIdx) => (
                          <div
                            key={subIdx}
                            className="px-4 py-3 hover:bg-lime-300 hover:font-semibold text-sm font-medium whitespace-nowrap cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                          >
                            {subItem}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Search + Cart + Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 flex-shrink-0 px-6">
          <form
            action="/"
            method="get"
            className="border-b border-white pb-1 w-[200px] hidden mobile:block"
          >
            <input
              type="text"
              placeholder="SEARCH"
              value={searchQuery}
              name="search_query"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-white placeholder-white bg-transparent outline-none border-none pb-1 text-sm"
            />
          </form>

          {/* Mobile Search Icon */}
          <button
            className="block mobile:hidden"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          >
            <IconSearch className="text-white w-5 h-5" />
          </button>

          {/* Mobile Search Input */}
          <AnimatePresence>
            {isSearchVisible && (
              <motion.div
                className="mobile:block absolute top-20 right-[30px] px-20"
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
                  className="text-black placeholder-black bg-white outline-none border-none rounded-lg py-2 px-4 text-sm"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Cart */}
          <div className="text-white cursor-pointer relative">
            <div className="w-8 h-8 rounded flex items-center justify-center">
              <IconShoppingCart />
            </div>
            <span className="absolute -top-1 -right-1 bg-lime-400 text-black rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
              0
            </span>
          </div>

          {/* Hamburger Icon */}
          <div
            className="block tablet:hidden p-2 bg-lime-300 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <IconMenu2 size={20} />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="tablet:hidden absolute top-full left-0 w-full bg-neutral-900 text-white shadow-lg z-40"
          >
            <ul className="flex flex-col divide-y divide-white/10">
              {navItems.map((item, idx) => (
                <li key={idx} className="p-4">
                  <a
                    href={item.href}
                    className="block font-semibold text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>

                  {item.submenu && (
                    <ul className="mt-2 pl-4 space-y-2">
                      {item.submenu.map((subItem, subIdx) => (
                        <li key={subIdx} className="text-sm text-gray-300">
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
