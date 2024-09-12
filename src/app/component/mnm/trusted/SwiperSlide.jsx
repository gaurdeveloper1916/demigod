import React from "react";

const SwiperSlide = ({ title, description, backgroundClass }) => {
  return (
    <div className="swiper-slide">
      <div className={`content`} data-content={backgroundClass}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={`background`} data-item={backgroundClass}></div>
    </div>
  );
};

export default SwiperSlide;
