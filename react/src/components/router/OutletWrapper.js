import { Outlet } from "react-router-dom";
import Footer from "../static/Footer";
import Header from "../static/Header";

function OutletWrapper() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default OutletWrapper