import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { CartProvider } from "./contexts/CartContext";

const App = lazy(() => import("./App"));
const Checkout = lazy(() => import("./pages/Checkout"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
);
