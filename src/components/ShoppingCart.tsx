import { useCart } from "../contexts/CartContext";
import { ChevronUp, ChevronDown, Trash2, ArrowLeft } from "lucide-react";
import { NavLink } from "react-router";

const ShoppingCart = () => {
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
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">SHOPPING CART</h1>
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
          <NavLink to="/" className="block w-full text-center py-3">
            <button className="mt-4 flex items-center text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              CONTINUE SHOPPING
            </button>
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">SHOPPING CART</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => {
            const originalPrice = parseFloat(item.price.replace("$", ""));
            const discountedPrice = originalPrice * 0.8; // Assuming 20% discount for display
            const isDiscounted = true; // You can add discount logic here

            return (
              <div
                key={`${item.id}-${item.size}-${item.color}`}
                className="flex items-center gap-4 p-4 border-b border-gray-200"
              >
                {/* Product Image */}
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm uppercase">
                    {item.name}
                  </h3>

                  {isDiscounted && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-400 line-through text-sm">
                        ${originalPrice.toFixed(2)}
                      </span>
                      <span className="bg-lime-400 text-black text-xs px-2 py-1 rounded">
                        -20%
                      </span>
                    </div>
                  )}

                  <div className="text-lg font-bold text-gray-800 mt-1">
                    ${discountedPrice.toFixed(2)}
                  </div>

                  <div className="text-sm text-gray-600 mt-2">
                    <div>Size: {item.size}</div>
                    <div>Color: {item.color}</div>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-center">
                  <div className="border border-gray-300 rounded">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          item.size,
                          item.color,
                          item.quantity + 1
                        )
                      }
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                    <div className="px-4 py-2 text-center font-medium border-t border-b border-gray-300">
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
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="text-lg font-bold text-gray-800 w-20 text-right">
                  ${(discountedPrice * item.quantity).toFixed(2)}
                </div>

                {/* Remove Button */}
                <button
                  onClick={() =>
                    handleRemoveItem(item.id, item.size, item.color)
                  }
                  className="text-gray-400 hover:text-red-500 p-2"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>{getTotalItems()} items</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <hr className="border-gray-300" />

            <div className="flex justify-between font-medium">
              <span>Total (tax excl.)</span>
              <span>${totalExcludingTax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-medium">
              <span>Total (tax incl.)</span>
              <span>${totalIncludingTax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Taxes:</span>
              <span>${taxes.toFixed(2)}</span>
            </div>

            <button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-bold py-3 px-4 rounded-lg mt-6 uppercase">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Continue Shopping */}
      <div className="mt-8">
        <button className="flex items-center text-gray-600 hover:text-gray-800">
          <ArrowLeft className="w-4 h-4 mr-2" />
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
