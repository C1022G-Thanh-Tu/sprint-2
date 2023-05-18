import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Product() {
  useEffect(() => {
    document.title = "Sản phẩm";
  }, []);
  return (
    <>
      <div className="wrapper_inner_banner">
        <img
          src="https://chanhviet.com/wp-content/uploads/2019/11/tin-tuc-chanh-viet-com.jpg"
          alt=""
          width={"100%"}
        />
      </div>
      <div className="site mb-5" id="page">
        <div className="container">
          <div className="wpb_wrapper">
            <h2
              style={{ color: "#12ac4c", textAlign: "center" }}
              className="mt-3"
            >
              Sản phẩm CHAVI
            </h2>
          
            <div className="d-flex mb-3 justify-content-end gap-2">
              <div id="search-autocomplete" className="form-outline">
                <input type="search" id="form1" className="form-control" placeholder="Tìm kiếm ..."/>
              </div>
              <button type="button" className="btn btn-success">
                <i className="bi bi-search"></i>
              </button>
            </div>

            <div className="holder row">
              <div className="product-data col-4 text-center">
                <div className="product-image">
                  <img
                    src="https://chanhviet.com/wp-content/uploads/2019/11/bot-chanh-chavi.jpg"
                    alt=""
                    width={350}
                    height={350}
                  />
                </div>
                <div className="action-button">
                  <span className="view_details_button">
                    <i className="bi bi-eye pe-2"></i>
                    <Link
                      to={"/product-detail"}
                      className="button-detail"
                    >
                      Chi tiết
                    </Link>
                  </span>

                  <span className="product_type_external">
                    <i className="bi bi-cart pe-2"></i>
                    <button className="button-cart" style={{border: 'none', background: 'none'}}>
                      Thêm vào giỏ
                    </button>
                  </span>
                </div>
                <div className="data mt-2">
                  <h2
                    style={{
                      fontSize: "16px",
                      color: "#12ac4c",
                      lineHeight: "22px",
                    }}
                  >
                    BỘT CHANH GIA VỊ CHAVI
                  </h2>
                  <span>₫106,000.00</span>
                </div>
              </div>

              <div className="product-data col-4 text-center">
                <div className="product-image">
                  <img
                    src="https://chanhviet.com/wp-content/uploads/2019/11/bot-chanh-chavi.jpg"
                    alt=""
                    width={350}
                    height={350}
                  />
                </div>
                <div className="action-button">
                  <span className="view_details_button">
                    <i className="bi bi-eye pe-2"></i>
                    <Link
                      to={"/product-detail"}
                      href="#"
                      className="button-detail"
                    >
                      Chi tiết
                    </Link>
                  </span>

                  <span className="product_type_external">
                    <i className="bi bi-cart pe-2"></i>
                    <button className="button-cart" style={{border: 'none', background: 'none'}}>
                      Thêm vào giỏ
                    </button>
                  </span>
                </div>
                <div className="data mt-1">
                  <h2
                    style={{
                      fontSize: "16px",
                      color: "#12ac4c",
                      lineHeight: "22px",
                    }}
                  >
                    BỘT CHANH GIA VỊ CHAVI
                  </h2>
                  <span>₫106,000.00</span>
                </div>
              </div>

              <div className="product-data col-4 text-center">
                <div className="product-image">
                  <img
                    src="https://chanhviet.com/wp-content/uploads/2019/11/bot-chanh-chavi.jpg"
                    alt=""
                    width={350}
                    height={350}
                  />
                </div>
                <div className="action-button">
                  <span className="view_details_button">
                    <i className="bi bi-eye pe-2"></i>
                    <Link
                      to={"/product-detail"}
                      href="#"
                      className="button-detail"
                    >
                      Chi tiết
                    </Link>
                  </span>

                  <span className="product_type_external">
                    <i className="bi bi-cart pe-2"></i>
                    <button className="button-cart" style={{border: 'none', background: 'none'}}>
                      Thêm vào giỏ
                    </button>
                  </span>
                </div>
                <div className="data mt-1">
                  <h2
                    style={{
                      fontSize: "16px",
                      color: "#12ac4c",
                      lineHeight: "22px",
                    }}
                  >
                    BỘT CHANH GIA VỊ CHAVI
                  </h2>
                  <span>₫106,000.00</span>
                </div>
              </div>
            </div>

            <div className="holder row">
              <div className="product-data col-4 text-center">
                <div className="product-image">
                  <img
                    src="https://chanhviet.com/wp-content/uploads/2019/11/bot-chanh-chavi.jpg"
                    alt=""
                    width={350}
                    height={350}
                  />
                </div>
                <div className="action-button">
                  <span className="view_details_button">
                    <i className="bi bi-eye pe-2"></i>
                    <Link
                      to={"/product-detail"}
                      href="#"
                      className="button-detail"
                    >
                      Chi tiết
                    </Link>
                  </span>

                  <span className="product_type_external">
                    <i className="bi bi-cart pe-2"></i>
                    <button className="button-cart" style={{border: 'none', background: 'none'}}>
                      Thêm vào giỏ
                    </button>
                  </span>
                </div>
                <div className="data mt-1">
                  <h2
                    style={{
                      fontSize: "16px",
                      color: "#12ac4c",
                      lineHeight: "22px",
                    }}
                  >
                    BỘT CHANH GIA VỊ CHAVI
                  </h2>
                  <span>₫106,000.00</span>
                </div>
              </div>

              <div className="product-data col-4 text-center">
                <div className="product-image">
                  <img
                    src="https://chanhviet.com/wp-content/uploads/2019/11/bot-chanh-chavi.jpg"
                    alt=""
                    width={350}
                    height={350}
                  />
                </div>
                <div className="action-button">
                  <span className="view_details_button">
                    <i className="bi bi-eye pe-2"></i>
                    <Link
                      to={"/product-detail"}
                      href="#"
                      className="button-detail"
                    >
                      Chi tiết
                    </Link>
                  </span>

                  <span className="product_type_external">
                    <i className="bi bi-cart pe-2"></i>
                    <button className="button-cart" style={{border: 'none', background: 'none'}}>
                      Thêm vào giỏ
                    </button>
                  </span>
                </div>
                <div className="data mt-1">
                  <h2
                    style={{
                      fontSize: "16px",
                      color: "#12ac4c",
                      lineHeight: "22px",
                    }}
                  >
                    BỘT CHANH GIA VỊ CHAVI
                  </h2>
                  <span>₫106,000.00</span>
                </div>
              </div>

              <div className="product-data col-4 text-center">
                <div className="product-image">
                  <img
                    src="https://chanhviet.com/wp-content/uploads/2019/11/bot-chanh-chavi.jpg"
                    alt=""
                    width={350}
                    height={350}
                  />
                </div>
                <div className="action-button">
                  <span className="view_details_button">
                    <i className="bi bi-eye pe-2"></i>
                    <Link
                      to={"/product-detail"}
                      href="#"
                      className="button-detail"
                    >
                      Chi tiết
                    </Link>
                  </span>

                  <span className="product_type_external">
                    <i className="bi bi-cart pe-2"></i>
                    <button className="button-cart" style={{border: 'none', background: 'none'}}>
                      Thêm vào giỏ
                    </button>
                  </span>
                </div>
                <div className="data mt-1">
                  <h2
                    style={{
                      fontSize: "16px",
                      color: "#12ac4c",
                      lineHeight: "22px",
                    }}
                  >
                    BỘT CHANH GIA VỊ CHAVI
                  </h2>
                  <span>₫106,000.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
