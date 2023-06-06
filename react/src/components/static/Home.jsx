import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/trietnm.lan/ben_luc/chanh_viet/banner_gioi_thieu_cong_ty_chanh_viet_115381970.jpg"
              className="d-block w-100"
              height={"650px"}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/trietnm.lan/ben_luc/chanh_viet/banner_trang_chu_cha_vi_1_972536010.jpg"
              className="d-block w-100"
              height={"650px"}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/trietnm.lan/ben_luc/chanh_viet/banner_trang_chu_cha_vi_3_275700284.jpg"
              className="d-block w-100"
              height={"650px"}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <i className="bi bi-arrow-left-square-fill fs-1"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <i className="bi bi-arrow-right-square-fill fs-1"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div
        className="mt-3 container"
        style={{ backgroundColor: "#4caf50", maxWidth: "1100px" }}
      >
        <div className="row">
          <div
            className="col-4 border-hover"
            style={{ padding: "40px 40px 40px 80px" }}
          >
            <h3
              style={{
                fontSize: "20px",
                color: "#fff",
                lineHeight: "28px",
              }}
            >
              Tiên phong trong lĩnh vực nghiên cứu và sản xuất các sản phẩm từ
              quả Chanh xanh không hạt
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "#fff",
                lineHeight: "26px",
              }}
            >
              Các sản phẩm sấy từ chanh, nước cốt chanh, bột chanh, tinh dầu
              chanh….
            </p>
          </div>
          <div
            className="col-4 border-hover"
            style={{ padding: "40px 40px 40px 80px" }}
          >
            <h3
              style={{
                fontSize: "20px",
                color: "#fff",
                lineHeight: "28px",
              }}
            >
              Tầm nhìn Chanh Việt
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "#fff",
                lineHeight: "26px",
              }}
            >
              Trở thành Doanh nghiệp hàng đầu về chanh và nông sản Việt trong
              nước và quốc tế.
            </p>
          </div>
          <div className="col-4" style={{ padding: "40px 40px 40px 80px" }}>
            <h3
              style={{
                fontSize: "20px",
                color: "#fff",
                lineHeight: "28px",
              }}
            >
              Sứ mệnh Chúng Tôi
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "#fff",
                lineHeight: "26px",
              }}
            >
              Mang đến cho khách hàng những sản phẩm từ chanh và nông sản Việt
              chất lượng hàng đầu bằng tình yêu, tâm huyết và trách nhiệm đối
              với cộng đồng, và nền nông nghiệp nước nhà.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 container pt-5" style={{ maxWidth: "1100px" }}>
        <div className="row">
          <h2
            style={{
              fontSize: "30px",
              color: "#12ac4c",
              lineHeight: "40px",
              textAlign: "center",
            }}
          >
            CHAVI cam kết mang đến cho cộng đồng những sản phẩm sạch và tử tế từ
            các quả tươi của Nông trại Chanh.
          </h2>
          <p>
            Bên cạnh đó, <b>CHAVI</b> làm nông nghiệp kết hợp với mở rộng sản
            xuất kinh doanh và hợp tác quốc tế nhằm khai thác tối đa giá trị của
            nông nghiệp Việt, góp phần nâng cao chất lượng đời sống của bà con
            nông dân.
          </p>
          <p>
            <b>CHAVI</b> không chỉ làm nông nghiệp mà còn kết hợp mở rộng sản
            xuất, kinh doanh và hợp tác quốc tế, cam kết mang đến cho cộng đồng
            những sản phẩm sạch và tử tế từ quả chanh tươi không hạt của Nông
            trại Chanh Việt, nhằm góp phần nâng tầm giá trị nông sản Việt trong
            nước và quốc tế.
          </p>
        </div>
      </div>
      <div className="text-center mt-4">
        <a
          href="https://chanhviet.com/wp-content/uploads/2019/11/Catalogue-Chanh-Viet-2019.pdf"
          target={"blank"}
          className="catalog-btn pe-5 ps-5"
        >
          <span>CATALOG</span>
        </a>
      </div>

      <div className="mt-3 container pt-5" style={{ maxWidth: "1100px" }}>
        <div className="row d-flex justify-content-between">
          <div className="col-4">
            <div
              className="me-2 ms-2"
              style={{ border: "1px solid rgb(0 0 0 / 10%)" }}
            >
              <img
                src="https://chanhviet.com/wp-content/uploads/2019/11/cau-chuyen-chavi.png"
                className="w-100"
                alt=""
              />
              <h4 className="ps-3 pe-3 mt-3">Câu chuyện CHAVI</h4>
              <p className="ps-3 pe-3">
                Trải qua một thập kỷ gắn bó với cây chanh và xây dựng giá trị
                cho nông sản Việt, Công ty Chanh Việt đã đạt nhiều giấy khen
                trong và ngoài nước…Những thành quả này đã tiếp thêm động lực
                cho toàn thể Công ty Chanh Việt vững tin hơn trên hành trình
                nâng cao giá trị nông sản việt, mang đến các sản phẩm sạch và tử
                tế từ nhãn hiệu CHAVI đến với người tiêu dùng trong nước và quốc
                tế…
              </p>
              <Link
                to={"/story"}
                className="see-more ps-3 pe-3 mb-3 d-block text-black"
                style={{ textDecoration: "none" }}
              >
                Xem thêm <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-4">
            <div
              className="me-2 ms-2"
              style={{ border: "1px solid rgb(0 0 0 / 10%)" }}
            >
              <img
                src="https://chanhviet.com/wp-content/uploads/2019/10/van-hoa-cha-vi.jpg"
                className="w-100"
                alt=""
              />
              <h4 className="ps-3 pe-3 mt-3">Văn hóa CHAVI</h4>
              <p className="ps-3 pe-3">
                Con người CHAVI tử tế trong suy nghĩ và cách hành xử đối với
                cộng đồng và xã hội, tích cực trong tư duy và hành động, luôn
                mang trong mình trách nhiệm đối với xã hội thông qua các hoạt
                động từ thiện và bảo vệ môi trường.
              </p>
              <a
                href="#"
                className="see-more ps-3 pe-3 mb-3 d-block text-black"
                style={{ textDecoration: "none" }}
              >
                Xem thêm <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-4">
            <div
              className="me-2 ms-2"
              style={{ border: "1px solid rgb(0 0 0 / 10%)" }}
            >
              <img
                src="https://chanhviet.com/wp-content/uploads/2019/10/he-thong-quan-tri.jpg"
                className="w-100"
                alt=""
              />
              <h4 className="ps-3 pe-3 mt-3">Hệ thống quản trị</h4>
              <p className="ps-3 pe-3">
                Sơ đồ tổ chức của CHAVI được thể hiện một cách chuyên nghiệp và
                phân bổ phòng ban một cách khoa học và hợp lý. Đảm bảo phân cấp
                cụ thể trách nhiệm của mỗi thành viên và phòng ban trong Công Ty
                Cp Thương Mại và Đầu Tư Chanh Việt.
              </p>
              <Link to={"/administration"}
                href="#"
                className="see-more ps-3 pe-3 mb-3 d-block text-black"
                style={{ textDecoration: "none" }}
              >
                Xem thêm <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "rgb(247, 247, 247)" }} className="mt-5">
        <div
          className="mt-3 container pt-5 pb-5"
          style={{ maxWidth: "1100px" }}
        >
          <div className="row">
            <div className="col-6 d-flex flex-column justify-content-center">
              <h2
                style={{
                  fontSize: "22px",
                  color: "#4caf50",
                  lineHeight: "28px",
                  textAlign: "center",
                }}
              >
                NGUỒN NGUYÊN LIỆU
              </h2>
              <p>
                Nguồn nguyên liệu sạch của CHAVI được trồng trọt và thu hoạch
                tại Nông trại Chanh không hạt lớn nhất Việt Nam và tuân thủ
                nghiêm ngặt các tiêu chuẩn quốc tế GLOBAL GAP. Bên cạnh đó,
                CHAVI luôn được sự cố vấn và đồng hành của các tiến sĩ, thạc sĩ,
                và các chuyên gia nông nghiệp trong việc nghiên cứu trồng trọt
                và chế biến các sản phẩm chất lượng cao đến tay người tiêu dùng.
              </p>
              <p className="text-center mt-2">
                <Link to={"/resources"} className="detail-btn">
                  <span>XEM CHI TIẾT</span>
                </Link>
              </p>
            </div>
            <div className="col-6">
              <img
                src="https://chanhviet.com/wp-content/uploads/2019/12/cv.jpg"
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="mt-3 container pt-5 pb-5"
          style={{ maxWidth: "1100px" }}
        >
          <div className="row">
            <div className="col-6">
              <img
                src="https://chanhviet.com/wp-content/uploads/2019/12/banner-trang-chu-cha-vi-3.jpg"
                alt=""
                width="100%"
              />
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
              <h2
                style={{
                  fontSize: "22px",
                  color: "#4caf50",
                  lineHeight: "28px",
                  textAlign: "center",
                }}
              >
                CÂU CHUYỆN CHÚNG TÔI
              </h2>
              <p>
                Được xây dựng và hình thành dựa trên tâm huyết của Chủ tịch
                Nguyễn Văn Hiển , cùng với thế mạnh là trang trại chanh không
                hạt lớn nhất Đồng bằng sông Cứu Long, luôn hướng đến mục tiêu
                cung cấp các sản phẩm chất lượng nhất, tốt nhất cho sức khỏe của
                người tiêu dùng.
              </p>
              <p className="text-center mt-2">
                <Link to={"/story"} className="detail-btn">
                  <span>XEM CHI TIẾT</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "rgb(247, 247, 247)" }}>
        <div
          className="mt-3 container pt-5 pb-5"
          style={{ maxWidth: "1100px" }}
        >
          <div className="row">
            <div className="col-6 d-flex flex-column justify-content-center">
              <h2
                style={{
                  fontSize: "22px",
                  color: "#4caf50",
                  lineHeight: "28px",
                  textAlign: "center",
                }}
              >
                QUÁ TRÌNH PHÁT TRIỂN
              </h2>
              <p>
                Từ một vùng đất nhiễm phèn...Đến Nông trại Chanh lớn nhất Việt
                Nam. Từ những trái chanh tươi, tốt nhờ đất, nước và khí trời của
                Đồng bằng Sông Cửu Long...đến các sản phẩm chất lượng, an toàn
                được bán đi nhiều nơi trên thế giới. Từ giấc mơ thoát nghèo của
                người nông dân...đến khát vọng nâng tầm giá trị nông sản Việt.
              </p>
              <p className="text-center mt-2">
                <a href="#" className="detail-btn">
                  <span>XEM CHI TIẾT</span>
                </a>
              </p>
            </div>
            <div className="col-6">
              <img
                src="https://chanhviet.com/wp-content/uploads/2019/10/banner-trang-chu-cha-vi-1.jpg"
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 container pt-5 pb-5" style={{ maxWidth: "1100px" }}>
        <div className="row">
          <div className="col-6">
            <iframe
              width="100%"
              height="300px"
              src="https://www.youtube.com/embed/R41byKXUIMg"
              title="NÔNG TRẠI CHANH VIỆT - NÔNG TRẠI CHANH LỚN NHẤT VIỆT NAM - TỰ HÀO CHANH VIỆT"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-6 ps-4">
            <h3 className="contact-title mb-3">LIÊN HỆ VỚI CHÚNG TÔI</h3>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Họ và tên của bạn*"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email của bạn*"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Điện thoại*"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tiêu đề*"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <textarea
                  className="form-control"
                  placeholder="Nội dung liên hệ*"
                />
              </div>
            </div>
            <button className="btn-submit rounded-pill text-light">
              Gửi đi
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
