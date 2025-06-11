import { lazy, Suspense } from "react";
import Footer from "./pages/Footer";
import Copyright from "./components/Copyright";
import { Toaster } from "sonner";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const Category = lazy(() => import("./pages/Category"));
const Trending = lazy(() => import("./pages/Trending"));
const Touch = lazy(() => import("./pages/Touch"));
const CompanyFeatures = lazy(() => import("./pages/CompanyFeatures"));
const Pictures = lazy(() => import("./pages/Pictures"));
const PopularBrands = lazy(() => import("./pages/PopularBrands"));
const Offer = lazy(() => import("./pages/Offer"));
const Blog = lazy(() => import("./pages/Blog"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Home />
          <Category />
          <Trending />
          <Pictures />
          <CompanyFeatures />
          <Offer />
          <PopularBrands />
          <Blog />
          <Touch />
        </main>
        <Footer />
        <Copyright />
      </Suspense>

      <Toaster position="top-right" richColors />
    </>
  );
};

export default App;
