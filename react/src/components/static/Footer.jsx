/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

function Footer() {
  return (
    <footer className="wrapper_footer style-three">
      <div className="wrapper_footer_main">
        <div className="container pt-5 pb-2">
          <div className="row footer_main">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div
                className="footer_main_item mb-4"
                style={{ height: "223px" }}
              >
                <section id="text-11" className="widget widget_text">
                  <h5 className="widget-title">THÔNG TIN LIÊN HỆ</h5>
                  <div className="textwidget">
                    <p>
                      Công Ty Cổ Phần Thương Mại Và Đầu Tư Chanh Việt
                      <br />
                      <strong>Hotline: </strong>
                      <span>090.371.1155</span>
                      <br />
                      <strong>Email: </strong>
                      <span>chavi@gmail.com</span>
                      <br />
                      <strong>Địa chỉ: </strong>
                      <span>
                        260/6 Hải Phòng, Phường Tân Chính, Quận Thanh Khê, Đà
                        Nẵng
                      </span>
                    </p>
                  </div>
                </section>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div
                className="footer_main_item mb-4"
                style={{ height: "223px" }}
              >
                <section id="text-11" className="widget widget_text">
                  <h5 className="widget-title">DỊCH VỤ KHÁCH HÀNG</h5>
                  <div className="menu-our-services-container">
                    <ul
                      id="menu-our-services"
                      className="menu rt-mega-menu-transition-slide"
                    >
                      <li className="menu-item">
                        <i
                          className="bi bi-caret-right-fill pe-3 text-white"
                          style={{ fontSize: "12px" }}
                        ></i>
                        <a
                          href="#"
                          style={{ textDecoration: "none" }}
                          className="text-white d-inline-block mb-3"
                        >
                          {" "}
                          Chính sách thanh toán
                        </a>
                      </li>
                      <li className="menu-item">
                        <i
                          className="bi bi-caret-right-fill pe-3 text-white"
                          style={{ fontSize: "12px" }}
                        ></i>
                        <a
                          href="#"
                          style={{ textDecoration: "none" }}
                          className="text-white d-inline-block mb-3"
                        >
                          {" "}
                          Chính sách bảo mật
                        </a>
                      </li>
                      <li className="menu-item">
                        <i
                          className="bi bi-caret-right-fill pe-3 text-white"
                          style={{ fontSize: "12px" }}
                        ></i>
                        <a
                          href="#"
                          style={{ textDecoration: "none" }}
                          className="text-white d-inline-block mb-3"
                        >
                          {" "}
                          Chính sách mua hàng
                        </a>
                      </li>
                      <li className="menu-item">
                        <i
                          className="bi bi-caret-right-fill pe-3 text-white"
                          style={{ fontSize: "12px" }}
                        ></i>
                        <a
                          href="#"
                          style={{ textDecoration: "none" }}
                          className="text-white d-inline-block mb-3"
                        >
                          {" "}
                          Chính sách đổi trả
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div
                className="footer_main_item mb-4"
                style={{ height: "223px" }}
              >
                <section id="text-11" className="widget widget_text">
                  <h5 className="widget-title">BẢN ĐỒ CÔNG TY</h5>
                  <div className="textwidget">
                    <p>
                      <iframe
                        loading="lazy"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.570893492362!2d106.663146!3d10.800379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293038ccb147%3A0xe38ae9745e9fa075!2zMjYxIEhvw6BuZyBWxINuIFRo4bulLCBQaMaw4budbmcgMiwgVMOibiBCw6xuaCwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2sus!4v1572505054857!5m2!1svi!2sus"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </p>
                  </div>
                </section>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div
                className="footer_main_item mb-4"
                style={{ height: "223px" }}
              >
                <section id="text-11" className="widget widget_text">
                  <h5 className="widget-title">VỀ CHÚNG TÔI</h5>
                  <div className="textwidget">
                    <p>
                      GPDKKD số 0313014177, cấp ngày 14 tháng 11 năm 2014, nơi cấp Sở KH&ĐT TP Hồ Chí Minh
                      <br />
                      <strong>Địa chỉ: </strong>
                      <span>261 Hoàng Văn Thụ, Phường 2, Quận Tân Bình, TPHCM.</span>
                      <br />
                      <strong>Điện thoại: </strong>
                      <span>(028) 3848 8285</span>
                      <br />
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
