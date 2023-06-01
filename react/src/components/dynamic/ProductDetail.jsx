import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SimpleSlider from "../../util/SimpleSlider";
import productService from "../../service/productService";
import carDetailService from "../../service/carDetailService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addCartDetailAction } from "../../redux/action/CartDetail/cartDetailsAction";
import { useDispatch } from "react-redux";

function ProductDetail() {
  const [product, setProduct] = useState();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const param = useParams();
  const dispatch = useDispatch();
  const name = localStorage.getItem("name");

  const handleChangeQuantity = (e) => {
    setQuantity(+e.target.value);
  };

  const handleAddCartDetail = (productId, productPrice) => {
    dispatch(
      addCartDetailAction({
        quantity: quantity,
        productDTO: { id: productId },
        total: productPrice,
      }, name)
    );
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsResponse = await productService.findAll();
        setProducts(productsResponse.data.content);
      } catch (error) {
        console.warn(error);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      const productResponse = await productService.findById(param.id);
      setProduct(productResponse.data);
    };
    
    getProduct();
  }, [param.id]);

  if (!product) {
    return null;
  }

  return (
    <>
      <div className="wrapper_inner_banner">
        <img
          src="https://chanhviet.com/wp-content/uploads/2019/11/tin-tuc-chanh-viet-com.jpg"
          alt=""
          width={"100%"}
        />
      </div>
      <div className="site mb-5 mt-5" id="page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12 pull-left">
              <div className="row">
                <div className="col-6 p-0">
                  <SimpleSlider imgList={product.productImgDTOS} />
                </div>
                <div className="col-6 p-0">
                  <h1 style={{ fontSize: "24px", color: "#12ac4c" }}>
                    {product.name}
                  </h1>
                  <p className="price fs-5">
                    <b>
                      {product.price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </b>
                  </p>
                  <div className="description" style={{ textAlign: "justify" }}>
                    <div
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    ></div>
                    <div className="d-flex align-items-center mb-3 gap-2">
                      <input
                        type="number"
                        style={{ width: 50 }}
                        min={0}
                        value={quantity}
                        onChange={(e) => handleChangeQuantity(e)}
                      />
                      <button
                        className="btn btn-success rounded-pill"
                        onClick={() =>
                          handleAddCartDetail(product.id, product.price)
                        }
                      >
                        Thêm vào giỏ hàng
                      </button>
                      {product.quantity <= 10 ? (
                        <span>(Còn {product.quantity} sản phẩm)</span>
                      ) : (
                        <></>
                      )}
                    </div>
                    <p className="m-0">
                      <b>Thương hiệu:</b> CHAVI Việt Nam
                    </p>
                    <p>
                      <b>Xuất xứ:</b> Tỉnh Long An – Việt Nam.
                    </p>
                    <h2 style={{ fontSize: 24, color: "#12ac4c" }}>
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
              <h1 style={{ fontSize: "24px" }} className="text-center">
                SẢN PHẨM TƯƠNG TỰ
              </h1>

              <div className="holder d-flex justify-content-center align-items-center flex-column">
                {products.map((product, index) => (
                  <div className="product-data text-center mb-3" key={index}>
                    <div className="product-image">
                      <img
                        src={product.productImgDTOS[0].url}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="action-button">
                      <span className="view_details_button">
                        <Link
                          to={`/product-detail/${product.id}`}
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
                        {product.name}
                      </h2>
                      <span>
                        <b>
                          {product.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </b>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ProductDetail;
