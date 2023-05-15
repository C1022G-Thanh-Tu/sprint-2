import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="top-bar bg-dark pt-2 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <a href="#">
                <span className="mr-2">
                  <i class="bi bi-envelope text-white"></i>
                </span>
                <span className="d-none d-md-inline-block text-white">
                  chavi@gmail.com
                </span>
              </a>
              <span className="mx-md-2 d-inline-block"></span>
              <a href="#">
                <span className="mr-2">
                  <i class="bi bi-telephone text-white"></i>
                </span>
                <span className="d-none d-md-inline-block text-white">
                  (+84) 932591241
                </span>
              </a>
              <div className="float-end">
                <a href="#">
                  <span className="mr-2">
                    <i class="bi bi-twitter text-white"></i>
                  </span>
                  <span className="d-none d-md-inline-block text-white">
                    Twitter
                  </span>
                </a>
                <span className="mx-md-2 d-inline-block"></span>
                <a href="#">
                  <span className="mr-2">
                    <i class="bi bi-facebook text-white"></i>
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
          <NavLink to='/' className="navbar-brand" href="#">
            <img src="https://chanhviet.com/wp-content/uploads/2019/11/logo-chanh-viet-2019.jpg" alt="" width={90}/>
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
                <NavLink to='/' className="nav-link active main-color fs-5" aria-current="page">
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
                    <Link to={"/resources"} className="dropdown-item">
                      Nguồn nguyên liệu
                    </Link>
                  </li>
                  <li>
                    <NavLink to={'/story'} className="dropdown-item">
                      Câu chuyện chúng tôi
                    </NavLink>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Quá trình phát triển
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item flex-1 pe-5">
                <a className="nav-link main-color fs-5" href="#">
                  Sản phẩm
                </a>
              </li>
              <li className="nav-item flex-1 pe-5">
                <a className="nav-link main-color fs-5" href="#">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;