import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Liên hệ";
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

      <div className="site mb-5 mt-5" id="page">
        <div className="container">
          <div className="d-flex justify-content-around">
            <div className="contact-phone text-center">
              <img
                src="https://chanhviet.com/wp-content/uploads/2021/11/call-80x80.png"
                alt=""
                width={80}
                height={80}
              />
              <h5>LIÊN HỆ CHANH VIỆT</h5>
              <p>Liên hệ với công ty Chanh Việt qua hotline</p>
              <p>
                <b>(+84)903711155</b>
              </p>
            </div>
            <div className="contact-email text-center">
              <img
                src="https://chanhviet.com/wp-content/uploads/2021/11/mall-80x80.png"
                alt=""
                width={80}
                height={80}
              />
              <h5>EMAIL</h5>
              <p>Liên hệ với công ty Chanh Việt qua Email</p>
              <p>
                <b>chavi@gmail.com</b>
              </p>
            </div>
            <div className="contact-address text-center">
              <img
                src="https://chanhviet.com/wp-content/uploads/2021/11/map-80x80.png"
                alt=""
                width={80}
                height={80}
              />
              <h5>ĐỊA CHỈ</h5>
              <p>Liên hệ với công ty Chanh Việt qua địa chỉ</p>
              <p>
                <b>
                  888 km 100 + 34 Quốc lộ N2,
                  <br />
                  Thạnh Lợi, Bến Lức, Long An
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="contact-container"
        style={{ backgroundColor: "rgb(247, 247, 247)" }}
      >
        <div className="container" style={{ padding: "70px 0" }}>
          <div className="row">
            <div className="col-6 pe-4 ps-4">
              <h3 className="contact-title mb-3">CÔNG TY CP TM & ĐT CHANH VIỆT LONG AN</h3>
              <p className="text-center mb-5">Quý khách liên hệ với công ty Chanh Việt</p>
              <div className="row mb-3">
                <div className="col-6">
                    <input type="text" className="form-control" placeholder="Họ và tên của bạn*"/>
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" placeholder="Email của bạn*"/>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                    <input type="text" className="form-control" placeholder="Điện thoại*"/>
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" placeholder="Tiêu đề*"/>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                    <textarea className="form-control" placeholder="Nội dung liên hệ*"/>
                </div>
              </div>
              <button className="btn-submit rounded-pill text-light">Gửi đi</button>
            </div>
            <div className="col-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7838.285446746181!2d106.663146!3d10.800379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293038ccb147%3A0xe38ae9745e9fa075!2zMjYxIEhvw6BuZyBWxINuIFRo4bulLCBQaMaw4budbmcgMiwgVMOibiBCw6xuaCwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2sus!4v1572489613597!5m2!1svi!2sus" 
                frameborder="0" width={600} height={450} allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
