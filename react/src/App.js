import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/static/Home";
import Resources from "./components/static/Resources";
import Story from "./components/static/Story";
import ScrollToTopBtn from "./util/ScrollToTopBtn";
import Login from "./components/dynamic/Login";
import OutletWrapper from "./components/router/OutletWrapper";
import Product from "./components/dynamic/Product";
import ProductDetail from "./components/dynamic/ProductDetail";
import ShoppingCart from "./components/dynamic/ShoppingCart";
import ScrollToTop from "./util/ScrollToTop";
import Contact from "./components/static/Contact";
import Register from "./components/dynamic/Register"

function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<OutletWrapper />}>
            <Route index element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/story" element={<Story />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ScrollToTop>
      <ScrollToTopBtn />
    </>
  );
}

export default App;
