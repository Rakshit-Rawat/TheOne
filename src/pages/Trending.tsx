import { useState } from "react";
import { IconHeart } from "@tabler/icons-react";
import { motion } from "motion/react";

type items = {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  colors: string[];
  category: string;
};

const Trending = () => {
  const [favorites, setFavorites] = useState(new Set());

  const products: items[] = [
    {
      id: 1,
      name: "HUMMINGBIRD PRINTED T-SHIRT",
      price: "$23.90",
      rating: 4,
      image:
        "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/24-home_default/hummingbird-printed-t-shirt.jpg",
      colors: ["#ef4444", "#f97316", "#3b82f6", "#eab308"],
      category: "clothing",
    },
    {
      id: 2,
      name: "THE BEST IS YET TO COME FRAMED POSTER",
      price: "$29.00",
      rating: 0,
      image:
        "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/34-home_default/the-best-is-yet-to-come-framed-poster.jpg",
      colors: ["#f3f4f6", "#a3a3a3", "#78716c"],
      category: "poster",
    },
    {
      id: 3,
      name: "TODAY IS A GOOD DAY FRAMED POSTER",
      price: "$29.00",
      rating: 5,
      image:
        "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/39-home_default/today-is-a-good-day-framed-poster.jpg",
      colors: ["#9ca3af", "#3b82f6"],
      category: "poster",
    },
    {
      id: 4,
      name: "HUG THE ADVENTURE BEGINS",
      price: "$11.90",
      rating: 3,
      image:
        "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/45-home_default/mug-the-adventure-begins.jpg",
      colors: ["#f97316", "#3b82f6", "#78716c"],
      category: "accessories",
    },
    {
      id: 5,
      name: "HUMMINGBIRD PRINTED SWEATER",
      price: "$28.70",
      rating: 3,
      image:
        " https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/29-home_default/brown-bear-printed-sweater.jpg",
      colors: ["#f97316", "#3b82f6", "#78716c"],
      category: "accessories",
    },
    {
      id: 6,
      name: " ADVENTURE BEGINS FRAMED",
      price: "$29.00",
      rating: 3,
      image:
        "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/35-home_default/the-adventure-begins-framed-poster.jpg",
      colors: ["#f97316", "#3b82f6", "#78716c"],
      category: "accessories",
    },
    {
      id: 7,
      name: "MUG TODAY IS A GOOD DAY",
      price: "$20.00",
      rating: 3,
      image:
        "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/48-home_default/mug-today-is-a-good-day.jpg",
      colors: ["#f97316", "#3b82f6", "#78716c"],
      category: "accessories",
    },
    {
      id: 8,
      name: "HUG THE BEST IS YET TO COME",
      price: "$15.00",
      rating: 3,
      image:
        " https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/41-home_default/mug-the-best-is-yet-to-come.jpg",
      colors: ["#f97316", "#3b82f6", "#78716c"],
      category: "accessories",
    },
  ];

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-gray-800" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  // Animation variants for buttons
  const leftButtonVariants = {
    hidden: { x: "200%", opacity: 0 },
    visible: { x: "-70%", opacity: 1 },
  };

  const rightButtonVariants = {
    hidden: { x: "-200%", opacity: 0 },
    visible: { x: "100%", opacity: 1 },
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 py-16 px-4">
      {/* Trending Badge */}
      <div className="flex justify-center gap-6 mb-6">
        <span className="inline-block px-[12px] py-[2px] border-[1px] border-black rounded-full text-sm font-medium text-gray-600 bg-white uppercase">
          TRENDING
        </span>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-16">
        <h2 className="text-6xl md:text-5xl font-bold text-gray-900 tracking-wider">
          HAND-PICKED ITEMS
        </h2>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group overflow-hidden border-2 border-black"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {/* Stars and Heart */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex">{renderStars(product.rating)}</div>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <IconHeart
                    className={`w-5 h-5 ${
                      favorites.has(product.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              {/* Image */}
              <div className="mb-6 overflow-hidden rounded-xl relative">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Slide-in Buttons */}
                <motion.button
                  variants={{
                    rest: rightButtonVariants.hidden,
                    hover: rightButtonVariants.visible,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-[50px] -left-[50px] bg-white text-gray-800 font-semibold rounded-full shadow-md flex items-center justify-center  h-10 min-w-[120px] text-base hover:bg-lime-300 hover:text-black transition-colors "
               
               >
                  Add to Cart
                </motion.button>

                <motion.button
                  variants={{
                    rest: leftButtonVariants.hidden,
                    hover: leftButtonVariants.visible,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-[110px] -right-[30px] bg-white text-gray-800 font-semibold  rounded-full shadow-md flex items-center justify-center    h-10 min-w-[120px] text-base hover:bg-lime-300 hover:text-black transition-colors"
                >
                  Quick View
                </motion.button>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 text-sm mb-2 uppercase tracking-wide">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-gray-900 mb-4">
                  {product.price}
                </p>

                {/* Color Swatches */}
                <div className="flex justify-center space-x-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-4 h-4 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional CTA Section
      <div className="text-center mt-16">
        <button className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
          View All Products
        </button>
      </div> */}
    </div>
  );
};

export default Trending;
