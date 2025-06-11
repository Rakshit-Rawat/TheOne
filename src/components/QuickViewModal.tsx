import React from "react";
import { X, RotateCcw, Heart } from "lucide-react";
import { toast } from "sonner";

type QuickViewModalProps = {
  product: items | null;
  isLoading: boolean;
  onClose: () => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  nextImage: () => void;
  prevImage: () => void;
  handleAddToCart: () => void;
  getColorName: (hex: string) => string;
};

type items = {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  colors: string[];
  category: string;
  sizes: string[];
  description: string;
  images: string[];
};

const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isLoading,
  onClose,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  quantity,
  incrementQuantity,
  decrementQuantity,
  currentImageIndex,
  setCurrentImageIndex,
  nextImage,
  prevImage,
  handleAddToCart,
  getColorName,
}) => {

  // Render stars with aria-hidden since it's decorative
  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? "text-gray-800" : "text-gray-300"}`}
        aria-hidden="true"
      >
        ★
      </span>
    ));

  const handleRemoveItem = () => {
    if (!product) return;

    toast.error(`${product.name} removed from cart`, {
      description: `Size: ${selectedSize} | Color: ${getColorName(selectedColor)}`,
      duration: 3000,
    });
    setTimeout(onClose, 200);

    // Optional: Add actual removal logic here if managing cart state
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
      aria-describedby="quick-view-description"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4"
      onClick={(e) => {
        // Close modal if clicking outside the content
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        tabIndex={-1} // Allow focus for accessibility
      >
        <button
          onClick={onClose}
          aria-label="Close quick view modal"
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {isLoading || !product ? (
          <div className="flex items-center justify-center h-96" role="status" aria-live="polite">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-black"></div>
            <span className="sr-only">Loading product details...</span>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Images */}
            <section className="lg:w-1/2 p-6" aria-label="Product images">
              <div className="relative">
                <div className="bg-gray-50 rounded-xl overflow-hidden mb-4 relative group">
                  <img
                    src={product.images[currentImageIndex]}
                    alt={`${product.name} - Image ${currentImageIndex + 1} of ${product.images.length}`}
                    className="w-full h-96 object-contain"
                  />
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        aria-label="Previous image"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="15,18 9,12 15,6" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        aria-label="Next image"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="9,18 15,12 9,6" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                <div className="flex gap-3" role="list">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-current={currentImageIndex === index ? "true" : undefined}
                      aria-label={`View image ${index + 1}`}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? "border-blue-500 ring-2 ring-blue-200"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail of ${product.name} image ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Right Side - Details */}
            <section className="lg:w-1/2 p-6 lg:pt-12">
              <div className="flex mb-4" aria-label={`Rating: ${product.rating} out of 5 stars`}>
                {renderStars(product.rating)}
              </div>
              <h1
                id="quick-view-title"
                className="text-2xl font-bold text-gray-900 mb-4 leading-tight"
              >
                {product.name}
              </h1>
              <div className="text-3xl font-bold text-gray-900 mb-4">{product.price}</div>
              <p id="quick-view-description" className="text-gray-600 mb-6">
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Size
                </h2>
                <div className="flex gap-3 flex-wrap" role="list" aria-label="Available sizes">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      aria-pressed={selectedSize === size}
                      className={`px-6 py-2 border rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? "bg-green-400 text-white border-green-400"
                          : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Color
                </h2>
                <div className="flex gap-3 flex-wrap" role="list" aria-label="Available colors">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      aria-pressed={selectedColor === color}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color
                          ? "border-gray-800 ring-2 ring-gray-300"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      style={{ backgroundColor: color }}
                      title={getColorName(color)}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity + Actions */}
              <div className="flex items-center gap-4 mb-8 flex-wrap">
                <div className="flex items-center border border-gray-300 rounded-lg" role="group" aria-label="Quantity selector">
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-2 hover:bg-gray-50"
                    aria-label="Decrease quantity"
                    disabled={quantity <= 1}
                  >
                    −
                  </button>
                  <span
                    className="px-4 py-2 border-x border-gray-300 font-medium"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="px-3 py-2 hover:bg-gray-50"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 min-w-[150px] bg-green-400 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-500 uppercase tracking-wide"
                  aria-label={`Add ${quantity} ${product.name}(s) to cart`}
                >
                  Add to Cart
                </button>

                <button
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} className="text-gray-600" />
                </button>

                <button
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                  onClick={handleRemoveItem}
                  aria-label={`Remove ${product.name} from cart`}
                >
                  <RotateCcw size={20} className="text-gray-600" />
                </button>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};


export default QuickViewModal;
