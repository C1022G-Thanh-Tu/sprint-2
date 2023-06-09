import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showUserDetailAction } from "../../redux/action/UserDetail/userDetailAction";
import { setCartsAction } from "../../redux/action/CartDetail/cartDetailsAction";
import cartDetailService from "../../service/carDetailService";

function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await cartDetailService.resetCount()
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
    localStorage.removeItem("name");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    navigate("/");
  };

  const name = localStorage.getItem("name");
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userDetail);
  const cartDetails = useSelector((state) => state.cartDetails);

  useEffect(() => {
    dispatch(showUserDetailAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCartsAction(name));
  }, [dispatch, name]);

  return (
    <>
      <div className="top-bar bg-dark pt-2 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <a href="#">
                <span className="mr-2">
                  <i className="bi bi-envelope text-white"></i>
                </span>
                <span className="d-none d-md-inline-block text-white">
                  chavi@gmail.com
                </span>
              </a>
              <span className="mx-md-2 d-inline-block"></span>
              <a href="#">
                <span className="mr-2">
                  <i className="bi bi-telephone text-white"></i>
                </span>
                <span className="d-none d-md-inline-block text-white">
                  (+84) 932591241
                </span>
              </a>
              <div className="float-end">
                <a href="#">
                  <span className="mr-2">
                    <i className="bi bi-twitter text-white"></i>
                  </span>
                  <span className="d-none d-md-inline-block text-white">
                    Twitter
                  </span>
                </a>
                <span className="mx-md-2 d-inline-block"></span>
                <a
                  href="https://www.facebook.com/nongtraichanhvietlongan"
                  target="blank"
                >
                  <span className="mr-2">
                    <i className="bi bi-facebook text-white"></i>
                  </span>
                  <span className="d-none d-md-inline-block text-white">
                    Facebook
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top p-0">
        <div className="container">
          <NavLink to="/" className="navbar-brand" href="#">
            <img
              src="https://chanhviet.com/wp-content/uploads/2019/11/logo-chanh-viet-2019.jpg"
              alt=""
              width={90}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-evenly"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item flex-1 pe-5">
                <NavLink
                  to="/"
                  className="nav-link active main-color fs-5"
                  aria-current="page"
                >
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item dropdown flex-1 pe-5">
                <a
                  className="nav-link dropdown-toggle main-color fs-5"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Giới thiệu
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink to={"/resources"} className="dropdown-item">
                      Nguồn nguyên liệu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/story"} className="dropdown-item">
                      Câu chuyện chúng tôi
                    </NavLink>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Quá trình phát triển
                    </a>
                  </li>
                  <li>
                    <NavLink to={"/administration"} className="dropdown-item">
                      Hệ thống quản trị
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item flex-1 pe-5">
                <NavLink to="/product" className="nav-link main-color fs-5">
                  Sản phẩm
                </NavLink>
              </li>
              <li className="nav-item flex-1 pe-5">
                <NavLink to={"/contact"} className="nav-link main-color fs-5">
                  Liên hệ
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/cart" className="navbar-brand">
            <i className="bi bi-cart"></i>
            <span className="cart-badge">{cartDetails.length}</span>
          </NavLink>
          {!name ? (
            <NavLink
              to={"/login"}
              style={{ textDecoration: "none", width: "100px" }}
              className="fs-5 text-center"
            >
              Đăng nhập
            </NavLink>
          ) : (
            <div className="dropdown">
              <a
                className="dropdown-toggle fs-5 text-center"
                type="button"
                data-bs-toggle="dropdown"
                style={{ textDecoration: "none", width: "100px" }}
              >
                <img
                  src={userDetail?.avatar}
                  className="rounded-circle"
                  width="40%"
                  height="40px"
                  alt="avatar"
                />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to={"/cart-detail"} className="dropdown-item">
                    Đơn đã mua
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/profile"} className="dropdown-item">
                    Thông tin cá nhân
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a onClick={handleLogout} className="dropdown-item" href="#">
                    Đăng xuất
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
