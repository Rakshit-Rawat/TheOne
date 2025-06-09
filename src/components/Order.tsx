import React, { useState } from "react";
import { Eye, EyeOff, CreditCard, Truck } from "lucide-react";
import { useCart } from "../contexts/CartContext";

const Order = () => {
  const { cartItems } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isGuest, setIsGuest] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    shippingMethod: "standard",
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  


  const subtotal = 29.0;
  const getShippingCost = () => {
    switch (formData.shippingMethod) {
      case "express":
        return 15.0;
      case "overnight":
        return 25.0;
      default:
        return 7.0;
    }
  };
  const shipping = getShippingCost();
  const taxes = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + taxes;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        if (!formData.email) return false;
        if (!isGuest && !formData.password) return false;
        return true;
      case 2:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.address &&
          formData.city &&
          formData.postalCode &&
          formData.country
        );
      case 3:
        return formData.shippingMethod;
      case 4:
        if (formData.paymentMethod === "card") {
          return (
            formData.cardNumber &&
            formData.expiryDate &&
            formData.cvv &&
            formData.cardName
          );
        }
        return true;
      default:
        return true;
    }
  };

  const handleContinue = () => {
    if (!validateStep()) {
      alert("Please fill in all required fields");
      return;
    }

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Place order
      alert("Order placed successfully!");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setIsGuest(true)}
                className={`pb-2 border-b-2 transition-colors ${
                  isGuest
                    ? "border-lime-400 text-gray-900 font-medium"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Order as a guest
              </button>
              <button
                onClick={() => setIsGuest(false)}
                className={`pb-2 border-b-2 transition-colors ${
                  !isGuest
                    ? "border-lime-400 text-gray-900 font-medium"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Sign in
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            {!isGuest && (
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            )}

            {!isGuest && (
              <div className="text-right">
                <button className="text-lime-600 hover:text-lime-700 text-sm">
                  Forgot your password?
                </button>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                placeholder="Street address"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postal Code *
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country *
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                required
              >
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="JP">Japan</option>
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  formData.shippingMethod === "standard"
                    ? "border-lime-400 bg-lime-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    shippingMethod: "standard",
                  }))
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Standard Shipping</h4>
                      <p className="text-sm text-gray-500">5-7 business days</p>
                    </div>
                  </div>
                  <span className="font-semibold">$7.00</span>
                </div>
              </div>

              <div
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  formData.shippingMethod === "express"
                    ? "border-lime-400 bg-lime-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    shippingMethod: "express",
                  }))
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Express Shipping</h4>
                      <p className="text-sm text-gray-500">2-3 business days</p>
                    </div>
                  </div>
                  <span className="font-semibold">$15.00</span>
                </div>
              </div>

              <div
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  formData.shippingMethod === "overnight"
                    ? "border-lime-400 bg-lime-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    shippingMethod: "overnight",
                  }))
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Overnight Shipping</h4>
                      <p className="text-sm text-gray-500">Next business day</p>
                    </div>
                  </div>
                  <span className="font-semibold">$25.00</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  formData.paymentMethod === "card"
                    ? "border-lime-400 bg-lime-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, paymentMethod: "card" }))
                }
              >
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">Credit/Debit Card</span>
                </div>
              </div>

              <div
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  formData.paymentMethod === "paypal"
                    ? "border-lime-400 bg-lime-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, paymentMethod: "paypal" }))
                }
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                  </div>
                  <span className="font-medium">PayPal</span>
                </div>
              </div>
            </div>

            {formData.paymentMethod === "card" && (
              <div className="space-y-4 mt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name *
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                    placeholder="Name on card"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number *
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV *
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const stepTitles = [
    "PERSONAL INFORMATION",
    "SHIPPING ADDRESS",
    "SHIPPING METHOD",
    "PAYMENT",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="space-y-8">
            {stepTitles.map((title, index) => {
              const stepNumber = index + 1;
              const isActive = currentStep === stepNumber;
              const isCompleted = currentStep > stepNumber;

              return (
                <div key={stepNumber} className="border-b border-gray-200 pb-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                        isCompleted
                          ? "bg-lime-400 text-white"
                          : isActive
                          ? "bg-gray-900 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {isCompleted ? "✓" : stepNumber}
                    </div>
                    <h2
                      className={`text-lg font-bold uppercase tracking-wide ${
                        isActive
                          ? "text-gray-900"
                          : isCompleted
                          ? "text-lime-600"
                          : "text-gray-400"
                      }`}
                    >
                      {title}
                    </h2>
                  </div>

                  {isActive && (
                    <div className="ml-12">{renderStepContent()}</div>
                  )}
                </div>
              );
            })}

            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`px-6 py-3 border rounded-lg transition-colors ${
                  currentStep === 1
                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Back
              </button>
              <button
                onClick={handleContinue}
                className="px-8 py-3 bg-lime-300 text-white rounded-lg hover:bg-gray-800 hover:text-lime-300 transition-colors"
              >
                {currentStep === 4 ? "Place Order" : "Continue"}
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Cart */}
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h3 className="text-xl font-semibold mb-6">Order Summary</h3>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 py-4 border-b border-gray-200"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-xs">IMG</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm leading-tight">
                  {item.name}
                </h4>
                <div className="text-xs text-gray-500 mt-1 space-y-1">
                  <p>Qty: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>
                </div>
              </div>
              <div className="text-right font-semibold">
                ${item.price}
              </div>
            </div>
          ))}

          <div className="space-y-3 mt-6">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Taxes:</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
