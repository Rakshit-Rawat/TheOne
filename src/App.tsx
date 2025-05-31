import Home from "./pages/Home";
import Category from "./pages/Category";
import Trending from "./pages/Trending";
import Touch from "./pages/Touch";
import Footer from "./pages/Footer"
import CopyRight from "./components/Copyright"
import CompanyFeatures from "./pages/CompanyFeatures"
import  Pictures from "./pages/Pictures"

const App = () => {
  return (
    <>
      <Home></Home>
      <Category></Category>
      <Trending></Trending>
      <Pictures></Pictures>
      <CompanyFeatures></CompanyFeatures>
      <Touch></Touch>
      <Footer></Footer>
      <CopyRight></CopyRight>
    </>
  );
};

export default App;
