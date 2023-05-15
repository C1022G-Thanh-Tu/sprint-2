import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/static/Home";
import Resources from "./components/static/Resources";
import Story from "./components/static/Story";
import ToastContainer from "./util/ScrollToTop";
import Login from "./components/dynamic/Login";
import OutletWrapper from "./components/router/OutletWrapper";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OutletWrapper />}>
          <Route index element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/story" element={<Story />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
