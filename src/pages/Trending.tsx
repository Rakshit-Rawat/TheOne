import { useState, useRef, useEffect } from "react";
import { IconHeart } from "@tabler/icons-react";
import { motion, useInView } from "motion/react";
import QuickViewModal from "../components/QuickViewModal";
import AddToCartModal from "../components/AddToCartModal";
import { useCart } from '../contexts/CartContext';
import type { Product } from '../contexts/CartContext';

const products: Product[] = [
  {
    id: 1,
    name: "HUMMINGBIRD PRINTED T-SHIRT",
    price: "$23.90",
    rating: 4,
    image:
      "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/24-home_default/hummingbird-printed-t-shirt.jpg",
    colors: ["#ef4444", "#f97316", "#3b82f6", "#eab308"],
    category: "clothing",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Comfortable cotton t-shirt with vibrant hummingbird print design.",
    images: [
      "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/24-home_default/hummingbird-printed-t-shirt.jpg",
      "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/24-home_default/hummingbird-printed-t-shirt.jpg",
    ],
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
    sizes: ["S", "M"],
    description: "Printed on rigid paper with matt finish and smooth surface.",
    images: [
      "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/34-home_default/the-best-is-yet-to-come-framed-poster.jpg",
      "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/34-home_default/the-best-is-yet-to-come-framed-poster.jpg",
    ],
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
    sizes: ["S", "M"],
    description: "Printed on rigid paper with matt finish and smooth surface.",
    images: [
      "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/39-home_default/today-is-a-good-day-framed-poster.jpg",
      "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/39-home_default/today-is-a-good-day-framed-poster.jpg",
    ],
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
    sizes: ["One Size"],
    description: "High-quality ceramic mug perfect for your morning coffee.",
    images: [
      "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/45-home_default/mug-the-adventure-begins.jpg",
      "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/45-home_default/mug-the-adventure-begins.jpg",
    ],
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
    sizes: ["S", "M", "L"],
    description: "Cozy sweater with unique printed design for casual wear.",
    images: [
      " https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/29-home_default/brown-bear-printed-sweater.jpg",
      " https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/29-home_default/brown-bear-printed-sweater.jpg",
    ],
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
    sizes: ["S", "M"],
    description: "Inspirational framed poster for your home or office.",
    images: [
      "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/35-home_default/the-adventure-begins-framed-poster.jpg",
      "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/35-home_default/the-adventure-begins-framed-poster.jpg",
    ],
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
    sizes: ["One Size"],
    description: "Start your day right with this motivational ceramic mug.",
    images: [
      "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/48-home_default/mug-today-is-a-good-day.jpg",
      "https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/48-home_default/mug-today-is-a-good-day.jpg",
    ],
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
    sizes: ["One Size"],
    description: "Perfect gift mug with uplifting message and quality design.",
    images: [
      " https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/41-home_default/mug-the-best-is-yet-to-come.jpg",
      " https://demo80leotheme.b-cdn.net/prestashop/leo_daone_elementor_demo/41-home_default/mug-the-best-is-yet-to-come.jpg",
    ],
  },
];

const Trending = () => {
  const { cartItems, addToCart } = useCart(); // Use global cart context
  const [favorites, setFavorites] = useState(new Set());
  const [isDesktop, setIsDesktop] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Cart modal state
  const [showCartModal, setShowCartModal] = useState(false);
  const [addedItem, setAddedItem] = useState<any>(null);

  // Modal state
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle screen size detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 990);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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

  // Handle direct add to cart from product grid
  const handleDirectAddToCart = (product: Product) => {
    const size = product.sizes[0]; // Default to first size
    const color = product.colors[0]; // Default to first color
    const qty = 1;

    addToCart(product, size, color, qty);

    // Show cart modal
    const newCartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color,
      quantity: qty,
    };
    
    setAddedItem(newCartItem);
    setShowCartModal(true);
  };

  // Dynamic animation variants based on screen size
  const buttonVariants = {
    leftButton: {
      hidden: isDesktop
        ? { x: "-200%", y: "100%", opacity: 0 }
        : { opacity: 1 },
      visible: isDesktop
        ? { x: "-50%", y: "100%", opacity: 1 }
        : { opacity: 1 },
    },
    rightButton: {
      hidden: isDesktop ? { x: "200%", y: "120%", opacity: 0 } : { opacity: 1 },
      visible: isDesktop
        ? { x: "-50%", y: "120%", opacity: 1 }
        : { opacity: 1 },
    },
  };

  const handleQuickView = (product: Product) => {
    setIsLoading(true);
    setShowModal(true);
    setCurrentImageIndex(0);
    setQuantity(1);

    setTimeout(() => {
      setQuickViewProduct(product);
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
      setIsLoading(false);
    }, 1000);
  };

  const closeModal = () => {
    setShowModal(false);
    setQuickViewProduct(null);
    setIsLoading(false);
    setSelectedSize("");
    setSelectedColor("");
    setQuantity(1);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (quickViewProduct) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % quickViewProduct.images.length
      );
    }
  };

  const prevImage = () => {
    if (quickViewProduct) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + quickViewProduct.images.length) %
          quickViewProduct.images.length
      );
    }
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    if (!quickViewProduct) return;

    addToCart(quickViewProduct, selectedSize, selectedColor, quantity);

    const newCartItem = {
      id: quickViewProduct.id,
      name: quickViewProduct.name,
      price: quickViewProduct.price,
      image: quickViewProduct.image,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    };

    setAddedItem(newCartItem);
    setShowCartModal(true);
    closeModal();
  };

  const getColorName = (hex: string) => {
    const colorMap: { [key: string]: string } = {
      "#ef4444": "Red",
      "#f97316": "Orange",
      "#3b82f6": "Blue",
      "#eab308": "Yellow",
      "#f3f4f6": "Gray",
      "#a3a3a3": "Dark Gray",
      "#78716c": "Brown",
      "#9ca3af": "Light Gray",
    };
    return colorMap[hex] || "Color";
  };

  const handleContinueShopping = () => {
    setShowCartModal(false);
    setAddedItem(null);
  };

  const handleProceedToCheckout = () => {
    setShowCartModal(false);
    setAddedItem(null);
    // Navigate to checkout page
    console.log("Proceeding to checkout with items:", cartItems);
  };

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sectionInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -20px 0px",
  });

  return (
    <motion.section className="w-full overflow-hidden bg-gray-50 py-16 px-4">
      {/* Trending Badge */}
      <div className="flex justify-center gap-6 mb-6">
        <span className="inline-block px-[12px] py-[2px] border-[1px] border-black rounded-full text-sm font-medium text-gray-600 bg-white uppercase">
          Trending
        </span>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-16">
        <h2 className="text-6xl md:text-5xl font-bold text-gray-900 tracking-wider">
          HAND-PICKED ITEMS
        </h2>
      </div>

      {/* Products Grid */}
      <motion.div
        ref={sectionRef}
        style={{ height: "auto", minHeight: "100vh" }}
        animate={{ x: sectionInView ? "0%" : "-100%" }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 25,
        }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            return (
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

                  {/* Desktop Buttons (>=990px) - Slide in from sides */}
                  {isDesktop && (
                    <>
                      <motion.button
                        variants={{
                          rest: buttonVariants.leftButton.hidden,
                          hover: buttonVariants.leftButton.visible,
                        }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute top-[50px] left-[50%] -translate-x-1/2 bg-white text-gray-800 font-semibold rounded-full shadow-md flex items-center justify-center h-10 min-w-[120px] text-base hover:bg-lime-300 hover:text-black transition-colors"
                        onClick={() => handleDirectAddToCart(product)}
                      >
                        Add to Cart
                      </motion.button>

                      <motion.button
                        variants={{
                          rest: buttonVariants.rightButton.hidden,
                          hover: buttonVariants.rightButton.visible,
                        }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute top-[90px] left-[50%] -translate-x-1/2 bg-white text-gray-800 font-semibold rounded-full shadow-md flex items-center justify-center h-10 min-w-[120px] text-base hover:bg-lime-300 hover:text-black transition-colors"
                        onClick={() => handleQuickView(product)}
                      >
                        Quick View
                      </motion.button>
                    </>
                  )}

                  {/* Mobile Buttons (<990px) - Static positioning */}
                  {!isDesktop && (
                    <>
                      <button
                        className="absolute bottom-[25%] left-[50%] -translate-x-1/2 bg-white text-gray-800 font-semibold rounded-full shadow-md flex items-center justify-center h-14 min-w-[200px] text-xl hover:bg-lime-300 hover:text-black transition-colors"
                        onClick={() => handleDirectAddToCart(product)}
                      >
                        Add to Cart
                      </button>

                      <button
                        className="absolute bottom-[10%] left-[50%] -translate-x-1/2 bg-white text-gray-800 font-semibold rounded-full shadow-md flex items-center justify-center h-14 min-w-[200px] text-xl hover:bg-lime-300 hover:text-black transition-colors"
                        onClick={() => handleQuickView(product)}
                      >
                        Quick View
                      </button>
                    </>
                  )}
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
            );
          })}
        </div>

        {/* Quick View Modal */}
        {showModal && (
          <QuickViewModal
            product={quickViewProduct}
            isLoading={isLoading}
            onClose={closeModal}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            nextImage={nextImage}
            prevImage={prevImage}
            handleAddToCart={handleAddToCart}
            getColorName={getColorName}
          />
        )}

        {/* Add to Cart Modal */}
        <AddToCartModal
          isOpen={showCartModal}
          onClose={() => setShowCartModal(false)}
          addedItem={addedItem}
          cartItems={cartItems}
          onContinueShopping={handleContinueShopping}
          onProceedToCheckout={handleProceedToCheckout}
        />
      </motion.div>
    </motion.section>
  );
};

export default Trending;
