import React, { useState, useMemo, useCallback } from "react";
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

  const shipping = useMemo(() => {
    switch (formData.shippingMethod) {
      case "express":
        return 15.0;
      case "overnight":
        return 25.0;
      default:
        return 7.0;
    }
  }, [formData.shippingMethod]);

  const taxes = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + taxes;

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  // Keyboard handler for custom radio divs for accessibility
  const handleKeyDown = useCallback(
    (
      e: React.KeyboardEvent<HTMLDivElement>,
      value: string,
      name: "shippingMethod" | "paymentMethod"
    ) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    },
    []
  );

  const validateStep = useCallback(() => {
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
        return !!formData.shippingMethod;
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
  }, [currentStep, formData, isGuest]);

  const handleContinue = useCallback(() => {
    if (!validateStep()) {
      alert("Please fill in all required fields");
      return;
    }
    if (currentStep < 4) {
      setCurrentStep((step) => step + 1);
    } else {
      // Place order
      alert("Order placed successfully!");
    }
  }, [currentStep, validateStep]);

  const handleBack = useCallback(() => {
    setCurrentStep((step) => Math.max(step - 1, 1));
  }, []);

  const stepTitles = [
    "Personal Information",
    "Shipping Address",
    "Shipping Method",
    "Payment",
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <fieldset>
            <legend className="sr-only">Choose order type</legend>
            <div className="flex gap-4 mb-6" role="radiogroup" aria-label="Order type">
              <button
                type="button"
                onClick={() => setIsGuest(true)}
                aria-pressed={isGuest}
                className={`pb-2 border-b-2 transition-colors ${
                  isGuest
                    ? "border-lime-400 text-gray-900 font-medium"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Order as a guest
              </button>
              <button
                type="button"
                onClick={() => setIsGuest(false)}
                aria-pressed={!isGuest}
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                placeholder="Enter your email"
                required
                aria-required="true"
                autoComplete="email"
              />
            </div>

            {!isGuest && (
              <div className="relative mt-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password <span aria-hidden="true">*</span>
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                  aria-required="true"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            )}

            {!isGuest && (
              <div className="text-right mt-2">
                <button type="button" className="text-lime-600 hover:text-lime-700 text-sm">
                  Forgot your password?
                </button>
              </div>
            )}
          </fieldset>
        );

      case 2:
        return (
          <fieldset>
            <legend className="sr-only">Shipping Address Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  required
                  aria-required="true"
                  autoComplete="given-name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  required
                  aria-required="true"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Address <span aria-hidden="true">*</span>
              </label>
              <input
                id="address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                placeholder="Street address"
                required
                aria-required="true"
                autoComplete="street-address"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  City <span aria-hidden="true">*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  required
                  aria-required="true"
                  autoComplete="address-level2"
                />
              </div>
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Postal Code <span aria-hidden="true">*</span>
                </label>
                <input
                  id="postalCode"
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  required
                  aria-required="true"
                  autoComplete="postal-code"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                Country <span aria-hidden="true">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                required
                aria-required="true"
                autoComplete="country-name"
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
          </fieldset>
        );

      case 3:
        return (
          <fieldset>
            <legend className="text-lg font-semibold mb-4">Select Shipping Method</legend>
            <div role="radiogroup" aria-label="Shipping method" className="space-y-4">
              {[
                {
                  value: "standard",
                  label: "Standard Shipping (7-10 days) - $7",
                  icon: <Truck className="w-6 h-6" />,
                  cost: 7,
                },
                {
                  value: "express",
                  label: "Express Shipping (3-5 days) - $15",
                  icon: <Truck className="w-6 h-6" />,
                  cost: 15,
                },
                {
                  value: "overnight",
                  label: "Overnight Shipping (1-2 days) - $25",
                  icon: <Truck className="w-6 h-6" />,
                  cost: 25,
                },
              ].map(({ value, label, icon }) => (
                <div
                  key={value}
                  role="radio"
                  tabIndex={0}
                  aria-checked={formData.shippingMethod === value}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, shippingMethod: value }))
                  }
                  onKeyDown={(e) => handleKeyDown(e, value, "shippingMethod")}
                  className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime-400 ${
                    formData.shippingMethod === value
                      ? "bg-lime-100 border-lime-400"
                      : "border-gray-300"
                  }`}
                >
                  <span className="text-lime-500">{icon}</span>
                  <span className="text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </fieldset>
        );

      case 4:
        return (
          <fieldset>
            <legend className="text-lg font-semibold mb-4">Payment Method</legend>
            <div role="radiogroup" aria-label="Payment method" className="flex gap-6 mb-6">
              {[
                {
                  value: "card",
                  label: (
                    <>
                      <CreditCard className="inline w-5 h-5 mr-2" />
                      Credit Card
                    </>
                  ),
                },
                {
                  value: "paypal",
                  label: (
                    <>
                      <img
                        src="/images/paypal.svg"
                        alt="PayPal"
                        className="inline h-6"
                      />
                      PayPal
                    </>
                  ),
                },
              ].map(({ value, label }) => (
                <div
                  key={value}
                  role="radio"
                  tabIndex={0}
                  aria-checked={formData.paymentMethod === value}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, paymentMethod: value }))
                  }
                  onKeyDown={(e) => handleKeyDown(e, value, "paymentMethod")}
                  className={`flex items-center gap-2 px-4 py-2 rounded cursor-pointer border ${
                    formData.paymentMethod === value
                      ? "border-lime-400 bg-lime-100"
                      : "border-gray-300"
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>

            {formData.paymentMethod === "card" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                    placeholder="1234 5678 9012 3456"
                    required
                    aria-required="true"
                    autoComplete="cc-number"
                  />
                </div>

                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="expiryDate"
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                    placeholder="MM/YY"
                    required
                    aria-required="true"
                    autoComplete="cc-exp"
                  />
                </div>

                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                    CVV <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cvv"
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                    placeholder="123"
                    required
                    aria-required="true"
                    autoComplete="cc-csc"
                  />
                </div>

                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-2">
                    Name on Card <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cardName"
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                    placeholder="John Doe"
                    required
                    aria-required="true"
                    autoComplete="cc-name"
                  />
                </div>
              </div>
            )}

            {formData.paymentMethod === "paypal" && (
              <p className="text-gray-700">You will be redirected to PayPal to complete your purchase.</p>
            )}
          </fieldset>
        );

      default:
        return null;
    }
  };

  return (
    <section aria-labelledby="order-heading" className="max-w-4xl mx-auto p-4">
      <h1 id="order-heading" className="text-2xl font-bold mb-6">
        Checkout
      </h1>

      <nav aria-label="Progress">
        <ol className="flex gap-4 mb-8">
          {stepTitles.map((title, i) => {
            const step = i + 1;
            const isActive = currentStep === step;
            const isCompleted = currentStep > step;
            return (
              <li
                key={step}
                aria-current={isActive ? "step" : undefined}
                className={`relative flex-1 pb-2 border-b-2 ${
                  isActive
                    ? "border-lime-400 font-semibold text-lime-600"
                    : isCompleted
                    ? "border-lime-200 text-gray-600"
                    : "border-gray-300 text-gray-400"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setCurrentStep(step)}
                  className="w-full text-left"
                  aria-disabled={step > currentStep}
                  disabled={step > currentStep}
                >
                  {title}
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleContinue();
        }}
        noValidate
      >
        {renderStepContent()}

        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-lg border ${
              currentStep === 1
                ? "border-gray-300 text-gray-400 cursor-not-allowed"
                : "border-lime-400 text-lime-600 hover:bg-lime-100"
            }`}
          >
            Back
          </button>

          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-lime-600 text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-400"
          >
            {currentStep === 4 ? "Place Order" : "Continue"}
          </button>
        </div>
      </form>

      <aside aria-label="Order summary" className="mt-12 p-4 border rounded-lg bg-gray-50">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <ul className="space-y-2 mb-4">
          {cartItems.map(({ id, name, quantity, price }) => (
            <li key={id} className="flex justify-between text-gray-700">
              <span>{name} x{quantity}</span>
              <span>${(Number(price) * quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <dl className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <dt>Subtotal:</dt>
            <dd>${subtotal.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Shipping:</dt>
            <dd>${shipping.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Taxes:</dt>
            <dd>${taxes.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <dt>Total:</dt>
            <dd>${total.toFixed(2)}</dd>
          </div>
        </dl>
      </aside>
    </section>
  );
};

export default Order;
