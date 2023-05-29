import cartDetailService from "../../service/carDetailService";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function CartDetails() {
  const [cartDetails, setCartDetails] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(0);

  let stt = page * size + 1;
  const name = localStorage.getItem("name");

  const handlePageClick = (event) => {
    setPage(+event.selected);
  };

  useEffect(() => {
    const getCartDetails = async () => {
      try {
        const cartDetailsResponse = await cartDetailService.listTotalALL(
          name,
          page
        );
        setCartDetails(cartDetailsResponse.data.content);
        setPageCount(cartDetailsResponse.data.totalPages);
        setSize(cartDetailsResponse.data.size);
      } catch (error) {
        console.warn(error);
      }
    };
    getCartDetails();
  }, [name, page]);

  return (
    <>
      <h2 style={{ color: "#12ac4c", textAlign: "center" }} className="mt-3">
        Danh sách sản phẩm mua hàng
      </h2>
      {cartDetails.length !== 0 ? (
        <div className="container mt-2">
          <table className="table mt-5">
            <thead>
              <tr>
                <th>STT</th>
                <th>Hình ảnh</th>
                <th>Tên hàng</th>
                <th>Loại hàng</th>
                <th>Số lượng</th>
                <th>Tổng tiền</th>
                <th>Thời gian thanh toán</th>
              </tr>
            </thead>
            <tbody>
              {cartDetails?.map((cartDetail, index) => (
                <tr key={index}>
                  <th className="align-middle">{stt++}</th>
                  <td className="align-middle" style={{ width: "20%" }}>
                    <img
                      src={cartDetail.productDTO.productImgDTOS[0].url}
                      className="img-fluid rounded-3"
                      alt="..."
                      width={"25%"}
                    />
                  </td>
                  <td className="align-middle">{cartDetail.productDTO.name}</td>
                  <td className="align-middle">
                    {cartDetail.productDTO.productTypeDTO.name}
                  </td>
                  <td className="align-middle">{cartDetail.quantity}</td>
                  <td className="align-middle">
                    {(
                      cartDetail.quantity * cartDetail.productDTO.price
                    ).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                  <td className="align-middle">
                    {cartDetail.cartDTO.paymentDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-grid">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageCount={pageCount}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              previousLabel="<"
              containerClassName="pagination"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              activeClassName="active"
              disabledClassName="d-none"
            />
          </div>
        </div>
      ) : (
        <div className="container mt-2 text-center vh-100">
          <h3 className="text-danger">Bạn chưa mua hàng</h3>
        </div>
      )}
    </>
  );
}

export default CartDetails;
