import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { NavLink } from "react-router";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  addedItem: CartItem | null;
  cartItems: CartItem[];
  onContinueShopping: () => void;
  onProceedToCheckout: () => void;
}

const AddToCartModal: React.FC<AddToCartModalProps> = ({
  isOpen,
  onClose,
  addedItem,
  cartItems,
  onContinueShopping,
  onProceedToCheckout,
}) => {
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return total + price * item.quantity;
  }, 0);

  const shipping = 7.0;
  const taxes = 0.0;
  const totalExcl = subtotal + shipping;
  const totalIncl = totalExcl + taxes;

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
    return colorMap[hex.toLowerCase()] ?? "Unknown color";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          tabIndex={-1}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <header className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
                <h2
                  id="modal-title"
                  className="font-semibold text-lg"
                >
                  Product Successfully Added To Your Shopping Cart
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-300 transition-colors p-1"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </header>

            <main id="modal-description" className="p-6 overflow-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Side - Added Product */}
                <section className="space-y-6" aria-live="polite">
                  {addedItem && (
                    <div className="flex gap-4">
                      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={addedItem.image}
                          alt={addedItem.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 mb-2 uppercase tracking-wide">
                          {addedItem.name}
                        </h3>
                        <div className="text-3xl font-bold text-gray-900 mb-3">
                          {addedItem.price}
                        </div>
                        <div className="space-y-1 text-gray-600">
                          <div>
                            Size:{" "}
                            <span className="font-medium">{addedItem.size}</span>
                          </div>
                          <div>
                            Color:{" "}
                            <span className="font-medium">
                              {getColorName(addedItem.color)}
                            </span>
                          </div>
                          <div>
                            Quantity:{" "}
                            <span className="font-medium">{addedItem.quantity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </section>

                {/* Right Side - Cart Summary */}
                <section className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-lg text-gray-900 mb-4 uppercase tracking-wide">
                      There are {cartItems.length} item
                      {cartItems.length !== 1 ? "s" : ""} in your cart.
                    </h4>

                    <div className="space-y-3 text-gray-600">
                      <div className="flex justify-between items-center">
                        <span>Subtotal:</span>
                        <span className="font-semibold">${subtotal.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span>Shipping:</span>
                        <span className="font-semibold">${shipping.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span>Total (tax excl.):</span>
                        <span className="font-semibold">${totalExcl.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between items-center text-gray-900 text-lg font-bold border-t pt-3">
                        <span>Total (tax incl.):</span>
                        <span>${totalIncl.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span>Taxes:</span>
                        <span className="font-semibold">${taxes.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={onContinueShopping}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors uppercase tracking-wide"
                    >
                      Continue Shopping
                    </button>

                    <NavLink
                      to="/checkout"
                      onClick={onProceedToCheckout}
                      className="flex-1 px-6 py-3 bg-lime-400 text-gray-900 font-semibold rounded-lg hover:bg-lime-500 transition-colors uppercase tracking-wide flex items-center justify-center gap-2 text-center"
                    >
                      <Check className="w-5 h-5" />
                      Proceed To Checkout
                    </NavLink>
                  </div>
                </section>
              </div>
            </main>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddToCartModal;
