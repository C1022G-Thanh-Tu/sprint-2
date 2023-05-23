import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SimpleSlider from "../../util/SimpleSlider";
import productService from "../../service/productService";

function ProductDetail() {
  const [product, setProduct] = useState();
  const [products, setProducts] = useState([]);
  const param = useParams();

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
                  <h1
                    style={{ fontSize: "24px", color: "#12ac4c" }}
                  >
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
                  <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></div>
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
    </>
  );
}

export default ProductDetail;
