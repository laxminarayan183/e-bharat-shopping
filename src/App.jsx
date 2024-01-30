import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Electronic from "./components/Electronic/Electronic";
import Kids from "./components/Kids/Kids";
// import Cart from "./components/Cart/Cart";
import AllProducts from "./components/Allproducts/AllProducts";
import AppStore from "./components/AppStore/AppStore";
import CartPage from "./components/Cart/CartPage";
import Checkout from "./components/Checkout/Checkout";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toprated" element={<Products />} />
          <Route path="/menswear" element={<TopProducts />} />
          <Route path="/electronic" element={<Electronic />} />
          <Route path="/kidswear" element={<Kids />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/download" element={<AppStore />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
