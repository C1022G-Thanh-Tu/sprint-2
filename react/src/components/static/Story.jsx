import React, { useEffect } from "react";

function Story() {
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
      <div
        className="container mt-5"
        style={{ padding: "70xp 15px", maxWidth: "1200px" }}
      >
        <h3 className="text-center entry-title">Câu chuyện Chanh Việt</h3>
        <p style={{ lineHeight: "40px" }}>
          <i>
            Từ một vùng đất nhiễm phèn… đến Nông trại Chanh lớn nhất Việt Nam.
            <br />
            Từ những trái chanh tươi, tốt nhờ đất, nước và khí trời của Đồng
            bằng Sông Cửu Long… đến các sản phẩm chất lượng, an toàn được bán đi
            nhiều nơi trên thế giới.
            <br />
            Từ giấc mơ thoát nghèo của người nông dân… đến khát vọng nâng tầm
            giá trị nông sản Việt.
          </i>
        </p>
      </div>

      <div style={{ backgroundColor: "rgb(247, 247, 247)" }} className="mt-5">
        <div
          className="mt-3 container pt-4 pb-4"
          style={{ maxWidth: "1200px" }}
        >
          <div className="row">
            <div className="col-6">
              <img
                src="https://chanhviet.com/wp-content/uploads/2019/11/cong-ty-chanh-viet-thanh-lap.jpg"
                alt=""
                width="100%"
              />
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
              <p style={{ lineHeight: "38px" }}>
                “Cho đến giờ, mỗi lần có dịp ghé lại, những người bạn của chúng
                tôi vẫn không tin vào mắt mình khi chứng kiến sự thay đổi của
                khu vực mà <b>Chanh Việt</b> phủ xanh từng ngày…Bởi nơi này cách
                đây không lâu là một vùng đất phèn hoang hóa, không điện, không
                nước, không đường…Những ngày vỡ đất, cứ chiều tối là chúng tôi
                phải kéo nhau về TP HCM vì không chịu nổi muỗi và vô số côn
                trùng”. <b>Ông Nguyễn Văn Hiển</b> – Chủ tịch Công ty Chanh Việt
                kể về câu chuyện của mình. Người ta nhắc đến ông Hiển với nhiều
                cái tên như{" "}
                <b>
                  “Ông Vua chanh”, “Người mê chanh”, “Người vắt chanh không bỏ
                  vỏ”, “Người xây chuỗi giá trị cho chanh”…,{" "}
                </b>{" "}
                bởi ai cũng thấy “chạm” lòng khi nghe về hành trình bén duyên
                của ông với cây chanh.
              </p>
              <p className="text-center mt-2"></p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="mt-3 container pt-5 pb-5"
          style={{ maxWidth: "1200px" }}
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
                Từ một vùng đất nghèo của đồng bằng Sông Cửu Long…
              </h2>
              <p>
                Lịch sử và thiên nhiên đã ưu ái ban tặng cho Việt Nam những vùng
                châu thổ màu mỡ phù sa, tạo thế mạnh cho người dân phát triển
                nông nghiệp. Tuy nhiên, nền kinh tế Việt Nam vẫn chưa phát triển
                và đời sống người nông dân vẫn còn lắm khổ cực. Cách đây gần 10
                năm, đứng trước vùng đất bao la, rộng lớn đầy nắng gió của Đồng
                bằng sông Cửu Long, nhưng ông Hiển không khỏi trăn trở về cuộc
                sống của người nông dân Việt sao còn quá nghèo khó. Nhớ về tuổi
                thơ lam lũ của mình, nghề nông vất vả đã giúp ba mẹ nuôi ông
                khôn lớn nên người. Những tâm tư ấy đã thôi thúc Ông Hiển phải
                làm một điều gì đó để phát triển nông nghiệp Việt Nam, nâng cao
                giá trị nông sản Việt và cải thiện đời sống của bà con nông dân.
              </p>
            </div>
            <div className="col-6">
              <img
                src="https://chanhviet.com/wp-content/uploads/2019/12/banner-trang-chu-cha-vi-3.jpg"
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "rgb(247, 247, 247)" }} className="mt-5">
        <div
          className="mt-3 container pt-4 pb-4"
          style={{ maxWidth: "1200px" }}
        >
          <div className="row">
            <div className="col-8 d-flex flex-column justify-content-center">
              <h2
                style={{
                  fontSize: "22px",
                  color: "#4caf50",
                  lineHeight: "28px",
                  textAlign: "center",
                }}
              >
                …Đến hành trình nâng cao giá trị nông sản Việt
              </h2>
              <p style={{ lineHeight: "32px" }}>
                Theo ông, làm nông nghiệp mà không chế biến thì giá trị rất
                thấp. Bởi trồng theo phương pháp hữu cơ thì chỉ 30% đạt chuẩn
                xuất khẩu đi Châu Âu, vậy chúng ta sẽ phải làm gì với 70% các
                quả chanh còn lại. Không chỉ giải bài toán về nông nghiệp, ông
                Hiển còn mong muốn khai thác tối đa giá trị của những quả chanh
                và một số loại trái cây tốt cho sức khỏe khác được trồng tại
                Nông trại Chanh Việt bằng các sản phẩm “tử tế” đến tay người
                tiêu dùng trong nước và quốc tế. Với ý tưởng mong muốn đưa nông
                sản Việt đi xa hơn, ông đã được sự đồng cảm và hỗ trợ từ các nhà
                khoa học và các chuyên gia nông nghiệp. Từ đó, Nông trại Chanh
                Việt được đầu tư một nhà máy hiện đại với công nghệ sản xuất
                tiên tiến, cùng đội ngũ kỹ sư chất lượng cao để nghiên cứu, chế
                biến ra các sản phẩm sạch, chất lượng, an toàn và tiện dụng cho
                đời sống mang nhãn hiệu CHAVI như:
              </p>
              <p className="text-center mt-2"></p>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div
          className="mt-3 container pt-4 pb-4"
          style={{ maxWidth: "1200px" }}
        >
          <div className="row">
            <div className="col-6">
              <img
                src="https://chanhviet.com/wp-content/uploads/2019/11/product-cha-vi.png"
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
                Sản phẩm CHAVI
              </h2>
              <ul style={{ textAlign: "justify" }}>
                <li className="mt-2">
                  Bột chanh và Nước cốt chanh dùng trong pha chế và chế biến
                  thực phẩm, là các sản phẩm tiện dụng thay thế hoàn hảo cho
                  chanh tươi dành các đầu bếp, chủ nhà hàng, quán ăn, quán bar
                  hay những người nội trợ.
                </li>
                <li className="mt-2">
                  Tinh dầu chanh có thể dùng để xoa dịu căng thẳng, mệt mỏi hoặc
                  pha loãng với nước để xịt dưỡng da, cung cấp độ ẩm và vitamin
                  cho da.
                </li>
                <li className="mt-2">
                  Các loại nước sức khỏe như Mãng cầu – chanh, Gấc – chanh dây,
                  Sâm – chanh hoàn toàn tự nhiên và thơm ngon với thành phần gồm
                  nhiều Vitamin và khoáng chất tốt cho cơ thể.
                </li>
                <li className="mt-2">
                  Vỏ chanh sấy, Lát chanh sấy, Trà trái cây sấy là các sản phẩm
                  giúp cơ thể đào thải độc tố, tăng cường sức đề kháng, giảm
                  cholesterol, ổn định huyết áp và chống lại các tác nhân gây
                  ung thư.
                </li>
                <li className="mt-2">
                  Sốt chanh là loại nước chấm chuyên dùng cho các món hải sản
                  hoặc các món nướng, làm tăng hương vị thơm ngon của món ăn…
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 mb-5">
        <div
          className="mt-3 container pt-4 pb-4 d-flex flex-row align-items-center"
          style={{ maxWidth: "1200px", backgroundColor: "#ddd" }}
        >
          <i className="bi bi-quote" style={{ fontSize: "70px" }}></i>
          <p style={{ textAlign: "justify" }}>
            Trải qua hành trình gắn bó với cây chanh và xây dựng chuỗi giá trị
            cho nông sản Việt, <b>Công ty Chanh Việt</b> đã đạt nhiều giấy khen
            trong và ngoài nước…Những thành quả này đã tiếp thêm động lực cho
            toàn thể <b>Công ty Chanh Việt</b>, giúp vững tin hơn và bước chân
            đồng hành cùng ông Hiển trên hành trình nâng cao giá trị nông sản
            Việt, mang đến các sản phẩm sạch và tử tế từ nhãn hiệu <b>CHAVI</b>{" "}
            đến với người tiêu dùng trong nước và quốc tế.
          </p>
        </div>
      </div>
    </>
  );
}

export default Story;
