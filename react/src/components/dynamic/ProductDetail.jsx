import React from "react";
import { Link } from "react-router-dom";
import SimpleSlider from "../../util/SimpleSlider";

function ProductDetail() {
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
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12 pull-left">
              <div className="row">
                <div className="col-6 p-0">
                  <SimpleSlider />
                </div>
                <div className="col-6 p-0">
                  <h1
                    style={{ fontSize: "24px", color: "#12ac4c" }}
                    className="pt-5"
                  >
                    BỘT CHANH GIA VỊ CHAVI
                  </h1>
                  <p className="price fs-5">₫106,000.00</p>
                  <div className="description" style={{ textAlign: "justify" }}>
                    <b>Bột Chanh Gia Vị CHAVI</b> là loại gia vị đặc biệt với
                    thành phần bột chanh nguyên chất tạo hương vị chanh tự nhiên
                    cho các món ăn, là sản phẩm tiện dụng, tiết kiệm và hiệu quả
                    cho nhà bếp.
                    <ul style={{ marginLeft: "-32px" }} className="mt-3">
                      <li>Giúp bạn không phải lưu trữ chanh tươi</li>
                      <li>Dễ dàng hơn cho món ngon mỗi ngày</li>
                      <li>Hàng Việt Nam chất lượng cao</li>
                    </ul>
                    <div className="d-flex align-items-center mb-3 gap-2">
                      <input type="number" style={{width: '50px'}} />
                      <button className="btn btn-success rounded-pill">
                        Thêm vào giỏ hàng
                      </button>
                    </div>
                    <p className="m-0">
                      <b>Thương hiệu:</b> CHAVI Việt Nam
                    </p>
                    <p>
                      <b>Xuất xứ:</b> Tỉnh Long An – Việt Nam.
                    </p>
                    <h2 style={{ fontSize: "24px", color: "#12ac4c" }}>
                      Bảo quản sản phẩm
                    </h2>
                    <ul style={{ marginLeft: "-32px" }} className="mt-1">
                      <li>
                        Để sản phẩm nơi khô ráo thoáng mát, tránh để gần khu vực
                        có nhiệt độ cao.
                      </li>
                      <li>Sau khi sử dụng đậy kín, có thể để trong tủ lạnh.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <h1 style={{ fontSize: "24px" }} className="pt-5 text-center">
                SẢN PHẨM TƯƠNG TỰ
              </h1>

              <div className="holder d-flex justify-content-center align-items-center flex-column">
                <div className="product-data text-center mb-3">
                  <div className="product-image">
                    <img
                      src="https://chanhviet.com/wp-content/uploads/2019/11/bot-chanh-chavi.jpg"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="action-button">
                    <span className="view_details_button">
                      <Link
                        to={"/product-detail"}
                        href="#"
                        className="button-detail"
                      >
                        <i className="bi bi-eye"></i>
                      </Link>
                    </span>

                    <span className="product_type_external">
                      <button
                        className="button-cart"
                        style={{ border: "none", background: "none" }}
                      >
                        <i className="bi bi-cart"></i>
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

                <div className="product-data text-center mb-3">
                  <div className="product-image">
                    <img
                      src="https://chanhviet.com/wp-content/uploads/2019/11/bot-chanh-chavi.jpg"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="action-button">
                    <span className="view_details_button">
                      <Link
                        to={"/product-detail"}
                        href="#"
                        className="button-detail"
                      >
                        <i className="bi bi-eye"></i>
                      </Link>
                    </span>

                    <span className="product_type_external">
                      <button
                        className="button-cart"
                        style={{ border: "none", background: "none" }}
                      >
                        <i className="bi bi-cart"></i>
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

                <div className="product-data text-center mb-3">
                  <div className="product-image">
                    <img
                      src="https://chanhviet.com/wp-content/uploads/2019/11/bot-chanh-chavi.jpg"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="action-button">
                    <span className="view_details_button">
                      <Link
                        to={"/product-detail"}
                        href="#"
                        className="button-detail"
                      >
                        <i className="bi bi-eye"></i>
                      </Link>
                    </span>

                    <span className="product_type_external">
                      <button
                        className="button-cart"
                        style={{ border: "none", background: "none" }}
                      >
                        <i className="bi bi-cart"></i>
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
      </div>
    </>
  );
}

export default ProductDetail;
