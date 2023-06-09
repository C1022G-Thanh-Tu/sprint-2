import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../../service/productService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addCartDetailAction } from "../../redux/action/CartDetail/cartDetailsAction";

function Product() {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [isAppend, setIsAppend] = useState(false);
  const [productFilter, setProductFilter] = useState({
    page: 0,
    name: "",
  });

  const dispatch = useDispatch();
  const name = localStorage.getItem("name");

  const handleAddCartDetail = (productId, productPrice) => {
    dispatch(
      addCartDetailAction(
        {
          quantity: 1,
          productDTO: { id: productId },
          total: productPrice,
        },
        name
      )
    );
  };

  const handlePageClick = () => {
    setProductFilter((prev) => ({ ...prev, page: prev.page + 1 }));
    setIsAppend(true);
  };

  useEffect(() => {
    (async () => {
      try {
        const productsResponse = await productService.findByName(productFilter);
        if (isAppend) {
          setProducts((prev) => [...prev, ...productsResponse.data.content]);
          setIsAppend(false);
        } else {
          setProducts(productsResponse.data.content);
        }
        setPageCount(productsResponse.data.totalPages);
        document.getElementById("list-empty").innerHTML = "";
        document.getElementById("load-more").style.display = "block";
      } catch (error) {
        console.warn(error);
        setProducts(error.response?.data.content);
        document.getElementById("list-empty").innerHTML =
          "Không tìm thấy kết quả";
        document.getElementById("load-more").style.display = "none";
      }
    })();
  }, [productFilter]);

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
              className="mt-4 mb-3"
            >
              Sản phẩm CHAVI
            </h2>

            <Formik
              initialValues={{
                name: "",
              }}
              onSubmit={(value) => {
                setProductFilter((prev) => {
                  return { ...prev, ...value, page: 0 };
                });
              }}
            >
              <Form>
                <div className="d-flex mb-5 justify-content-end gap-2">
                  <div id="search-autocomplete" className="form-outline">
                    <Field
                      type="search"
                      id="form1"
                      className="form-control"
                      placeholder="Tìm kiếm ..."
                      name="name"
                    />
                  </div>
                  <button type="submit" className="btn btn-success">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </Form>
            </Formik>

            <div className="holder row">
              {products.map((product, index) => (
                <div
                  className="product-data col-12 col-md-6 col-lg-4 text-center mb-3"
                  key={index}
                >
                  <div className="product-image">
                    <img
                      src={product.productImgDTOS[0].url}
                      alt=""
                      width={350}
                      height={350}
                    />
                  </div>
                  <div className="action-button">
                    <span className="view_details_button">
                      <Link
                        to={`/product-detail/${product.id}`}
                        className="button-detail"
                      >
                      <i className="bi bi-eye pe-2"></i>
                        <span className="d-none d-sm-inline">Chi tiết</span>
                      </Link>
                    </span>

                    <span className="product_type_external">
                      <i className="bi bi-cart pe-2"></i>
                      <button
                        className="button-cart"
                        style={{ border: "none", background: "none" }}
                        onClick={() =>
                          handleAddCartDetail(product.id, product.price)
                        }
                      >
                        <span className="d-none d-sm-inline">Thêm vào giỏ</span>
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
                      {product.name}{" "}
                      {product.quantity <= 10 ? (
                        <span className="text-dark">
                          (Còn {product.quantity} sản phẩm)
                        </span>
                      ) : (
                        <></>
                      )}
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
            {productFilter.page + 1 === pageCount ? (
              <div className="text-center mt-3" id="load-more"></div>
            ) : (
              <div className="text-center mt-3" id="load-more">
                <button
                  className="btn btn-secondary"
                  onClick={() => handlePageClick()}
                >
                  Xem thêm
                </button>
              </div>
            )}
            <div className="text-center text-danger fs-5" id="list-empty"></div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Product;
