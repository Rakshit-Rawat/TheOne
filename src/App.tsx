// App.tsx
import Home from "./pages/Home";
import Category from "./pages/Category";
import Trending from "./pages/Trending";
import Touch from "./pages/Touch";
import Footer from "./pages/Footer";
import Copyright from "./components/Copyright";
import CompanyFeatures from "./pages/CompanyFeatures";
import Pictures from "./pages/Pictures";
import PopularBrands from "./pages/PopularBrands";
import Offer from "./pages/Offer";
import Blog from "./pages/Blog";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Home />
      <Category />
      <Trending />
      <Pictures />
      <CompanyFeatures />
      <Offer />
      <PopularBrands />
      <Blog />
      <Touch />
      <Footer />
      <Copyright />
      <Toaster position="top-right" richColors />
    </>
  );
};

export default App;