import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <div>
      <Slider asNavFor={nav2} ref={slider1}>
        <div>
          <img
            src="https://chanhviet.com/wp-content/uploads/2019/11/bot-chanh-chavi.jpg"
            alt=""
            width={"90%"}
          />
        </div>
        <div>
          <img
            src="https://chanhviet.com/wp-content/uploads/2019/11/bot-chanh-chavi-2.jpg"
            alt=""
            width={"90%"}
          />
        </div>
        <div>
          <img
            src="https://chanhviet.com/wp-content/uploads/2019/11/bot-chanh-chavi-1-1.png"
            alt=""
            width={"90%"}
          />
        </div>
      </Slider>
      <h4>Hình ảnh khác</h4>
      <Slider
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <img
            src="https://chanhviet.com/wp-content/uploads/2019/11/bot-chanh-chavi-100x100.jpg"
            alt=""
            width={'60%'}
          />
        </div>
        <div>
          <img
            src="https://chanhviet.com/wp-content/uploads/2019/11/bot-chanh-chavi-2-100x100.jpg"
            alt=""
            width={'60%'}
          />
        </div>
        <div>
          <img
            src="https://chanhviet.com/wp-content/uploads/2019/11/bot-chanh-chavi-1-1-100x100.png"
            alt=""
            width={'60%'}
          />
        </div>
      </Slider>
    </div>
  );
}
