import { useCart } from "../contexts/CartContext";
import { ChevronUp, ChevronDown, Trash2, ArrowLeft } from "lucide-react";
import { NavLink } from "react-router";

type props = {
  onProceedToPayment: () => void;
};

const ShoppingCart = ({ onProceedToPayment }: props) => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  // Calculate shipping (free shipping over $50, otherwise $7)
  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 7.0;
  const totalExcludingTax = subtotal + shipping;
  const taxes = 0; // Assuming no tax for this example
  const totalIncludingTax = totalExcludingTax + taxes;

  const handleQuantityChange = (
    id: number,
    size: string,
    color: string,
    newQuantity: number
  ) => {
    updateQuantity(id, size, color, newQuantity);
  };

  const handleRemoveItem = (id: number, size: string, color: string) => {
    removeFromCart(id, size, color);
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">
          SHOPPING CART
        </h1>
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl mb-8">Your cart is empty</p>
          <NavLink to="/" className="block w-full text-center py-3">
            <button className="flex items-center text-gray-600 hover:text-gray-800 text-lg mx-auto">
              <ArrowLeft className="w-5 h-5 mr-3" />
              CONTINUE SHOPPING
            </button>
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">SHOPPING CART</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-3 space-y-8">
          {cartItems.map((item) => {
            const originalPrice = parseFloat(item.price.replace("$", ""));
            const discountedPrice = originalPrice * 0.8; // Assuming 20% discount for display
            const isDiscounted = true; // You can add discount logic here

            return (
              <div
                key={`${item.id}-${item.size}-${item.color}`}
                className="flex items-start gap-8 p-8 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                {/* Product Image */}
                <div className="w-40 h-40 bg-gray-50 rounded-xl flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg uppercase tracking-wide">
                    {item.name}
                  </h3>

                  {isDiscounted && (
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-gray-400 line-through text-base">
                        ${originalPrice.toFixed(2)}
                      </span>
                      <span className="bg-lime-400 text-black text-sm px-3 py-1 rounded-full font-medium">
                        -20%
                      </span>
                    </div>
                  )}

                  <div className="text-2xl font-bold text-gray-900">
                    ${discountedPrice.toFixed(2)}
                  </div>

                  <div className="space-y-2 text-base text-gray-600">
                    <div>
                      <span className="font-medium">Size:</span> {item.size}
                    </div>
                    <div>
                      <span className="font-medium">Color:</span> {item.color}
                    </div>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          item.size,
                          item.color,
                          item.quantity + 1
                        )
                      }
                      className="px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <ChevronUp className="w-5 h-5" />
                    </button>
                    <div className="px-6 py-4 text-center font-bold text-lg border-t-2 border-b-2 border-gray-200 bg-gray-50">
                      {item.quantity}
                    </div>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          item.size,
                          item.color,
                          item.quantity - 1
                        )
                      }
                      className="px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="text-2xl font-bold text-gray-900 w-24 text-right">
                  ${(discountedPrice * item.quantity).toFixed(2)}
                </div>

                {/* Remove Button */}
                <button
                  onClick={() =>
                    handleRemoveItem(item.id, item.size, item.color)
                  }
                  className="text-gray-400 hover:text-red-500 p-3 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-6 h-6" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-gray-50 p-8 rounded-xl space-y-6 sticky top-8">
            <div className="space-y-5">
              <div className="flex justify-between text-lg">
                <span className="text-gray-600">{getTotalItems()} items</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-lg">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>

              <hr className="border-gray-300 my-6" />

              <div className="flex justify-between text-lg font-semibold">
                <span>Total (tax excl.)</span>
                <span>${totalExcludingTax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-xl font-bold">
                <span>Total (tax incl.)</span>
                <span>${totalIncludingTax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-base text-gray-600">
                <span>Taxes:</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={onProceedToPayment}
              className="w-full bg-lime-300 hover:bg-black hover:text-lime-300 text-black font-bold py-4 px-6 rounded-xl text-lg uppercase tracking-wide transition-colors mt-8"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>

      {/* Continue Shopping */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <button className="flex items-center text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors">
          <ArrowLeft className="w-5 h-5 mr-3" />
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
