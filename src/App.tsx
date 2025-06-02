import Home from "./pages/Home";
import Category from "./pages/Category";
import Trending from "./pages/Trending";
import Touch from "./pages/Touch";
import Footer from "./pages/Footer"
import CopyRight from "./components/Copyright"
import CompanyFeatures from "./pages/CompanyFeatures"
import  Pictures from "./pages/Pictures"
import PopularBrands from "./pages/PopularBrands"

const App = () => {
  return (
    <>
      <Home></Home>
      <Category></Category>
      <Trending></Trending>
      <Pictures></Pictures>
      <CompanyFeatures></CompanyFeatures>
      <PopularBrands></PopularBrands>
      <Touch></Touch>
      <Footer></Footer>
      <CopyRight></CopyRight>
    </>
  );
};

export default App;
