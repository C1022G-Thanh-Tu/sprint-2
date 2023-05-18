import React, { useEffect } from "react";

function Resources() {
  useEffect(() => {
    document.title = "Giới thiệu";
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
      <div>
        <div className="container mt-5" style={{ padding: "70xp 15px" }}>
          <header className="entry-header">
            <h1 className="entry-title mb-4">
              Nông trại chanh lớn nhất Việt Nam
            </h1>
            <div className="entry-meta">
              <div className="holder d-flex flex-row align-items-center">
                <div className="author-image pe-3">
                  <img
                    src="https://secure.gravatar.com/avatar/e133a16fdc5a41ea376fab19235d6b9a?s=150&d=mm&r=g"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                <div className="data">
                  <p className="published-on m-0">Published On - 10/31/2019</p>
                  <div className="meta">
                    <span className="me-3">
                      <i className="bi bi-person pe-2"></i>
                      <span>Công ty Chanh Việt</span>
                    </span>
                    <span>
                      <i className="bi bi-grid-fill pe-2"></i>
                      <span>Câu chuyện Chanh Việt, Tin tức</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="text-center">
            <img
              src="https://chanhviet.com/wp-content/uploads/2019/11/vuon-chanh-cong-ty-chanh-viet.jpg"
              alt=""
              width={"80%"}
              height={"auto"}
            />
          </div>

          <div className="entry-main mt-5">
            <h2 className="text-justify mb-5" style={{ color: "#12ac4c" }}>
              Chia sẻ về nông trại Chanh Việt
            </h2>
            <ul style={{ textAlign: "justify" }}>
              <li className="mt-5">
                Vì thế, năm 2012, công ty Chanh Việt đã ra đời cùng với “Khát
                vọng nâng tầm nông sản Việt”. Hơn 150 hecta đất được đầu tư, cải
                tạo bằng nhiều máy móc, phương tiện hiện đại và ứng dụng công
                nghệ kỹ thuật cao để cày xới, khai mương, đắp đường, lên luống…
                Từ đó, hình thành một Nông trại Chanh không hạt quy mô nhất Việt
                Nam, tạo cú hích lan tỏa vùng nguyên liệu hàng ngàn hecta của
                tỉnh Long An.
              </li>
              <li className="mt-5">
                Vùng đất Thạnh Lợi, Bến Lức, Long An trước đây vốn là một vùng
                đất nhiễm phèn, rất khó canh tác các loại cây trồng, trong khi
                diện tích đất lại rộng lớn. Người dân ở đây chủ yếu trồng những
                loại cây cho năng suất thấp và hiệu quả không cao.
              </li>
            </ul>

            <div className="text-center mt-5">
              <img
                src="https://chanhviet.com/wp-content/uploads/2019/11/vuon-chanh-cong-ty-chanh-viet.jpg"
                alt=""
                width={"80%"}
                height={"auto"}
              />
            </div>
          </div>

          <div className="entry-main mt-5">
            <h2
              className="mb-5"
              style={{ color: "#12ac4c", textAlign: "justify" }}
            >
              Nông trại Chanh Việt – Nông trại Chanh không hạt quy mô lớn nhất
              Việt Nam
            </h2>
            <ul style={{ textAlign: "justify" }}>
              <li className="mt-5">
                Công tác kỹ thuật trồng trọt, phân bón , thuốc bảo vệ thực vật
                được theo dõi và quản lý chặt chẽ theo tiêu chuẩn VietGAP,
                GlobalGAP.
              </li>
              <li className="mt-5">
                Cây chanh giống sau khi được nghiên cứu và thử nghiệm phù hợp
                với khí hậu và thổ nhưỡng địa phương đã được đưa về phủ xanh
                vùng Thạnh Lợi, Long An.
              </li>
              <li className="mt-5">
                Nông trại Chanh Việt được đầu tư đầy đủ hệ thống thủy lợi, hệ
                thống đường nội bộ, hệ thống điện, hệ thống tưới tự động. Nhà
                xưởng được xây dựng và đầu tư trang thiết bị, máy móc hiện đại
                đạt tiêu chuẩn HACCP.
              </li>
            </ul>

            <div className="text-center mt-5 mb-5">
              <img
                src="https://chanhviet.com/wp-content/uploads/2019/11/vuon-chanh-viet.jpg"
                alt=""
                width={"80%"}
                height={"auto"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
