import React, { useState } from 'react';
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './slider2.css'; // Custom CSS

SwiperCore.use([Navigation, Pagination, EffectFade]);

const slidesData = [
  {
    id: 'beach',
    header: 'Closca Bottle',
    title: 'Beach',
    subtitle: '€ 39.90',
    contentTitle: 'In 20 years, there could be more plastic in our oceans than fish.',
    contentSubtitle: 'Plastic pollution injures more than 100,000 marine animals every year. It takes around 450 years for one plastic bottle to decompose.',
    bgImg: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bottleImg: 'https://www.designforfinland.com/product-images/Closca_Bottle_Wave_Antarctica_450ml_Close.png/2083089000004207012/1100x1100',
  },
  {
    id: 'savanna',
    header: 'Closca Bottle',
    title: 'Savanna',
    subtitle: '€ 39.90',
    contentTitle: 'The Earth’s area affected by desertification is approx 11 times India’s size.',
    contentSubtitle: 'The Savannas act as a carbon sink, absorbing CO2 from the atmosphere and helping to maintain the balance of global temperatures.',
    bgImg: 'https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    bottleImg: 'https://fnac.sa/cdn/shop/files/Closca_Bottle_Wave_Sahara_600ml_Close.png?v=1703675684',
  },
  {
    id: 'glacier',
    header: 'Closca Bottle',
    title: 'Glacier',
    subtitle: '€ 39.90',
    contentTitle: 'Glaciers contain 75% of the World\'s freshwater.',
    contentSubtitle: 'The effects of melting ice glaciers are biodiversity loss, the rising of the sea level and the deficiency of freshwater, among others.',
    bgImg: 'https://www.discover-the-world.com/app/uploads/2018/05/chile-patagonia-calving-glacier-is-1150x863-c-default.jpg',
    bottleImg: 'https://gomagcdn.ro/domains/alty.ro/files/product/original/sticla-reutilizabila-apa-closca-glacier-copie-848-7049.png',
  },
  {
    id: 'coral',
    header: 'Closca Bottle',
    title: 'Coral',
    subtitle: '€ 39.90',
    contentTitle: 'We will have lost 60% of our coral reefs by 2030.',
    contentSubtitle: 'Coral reefs are essential to humans, as they protect the shorelines and are a source of nutrients and habitat for thousands of marine species.',
    bgImg: 'https://images.unsplash.com/photo-1546500840-ae38253aba9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3260&q=80',
    bottleImg: 'https://fnac.sa/cdn/shop/files/Closca_Bottle_Wave_Arizona_600ml_Close.png?v=1703675684&width=1946',
  }
];

const Slider2 = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setSlideIndex(swiper.realIndex);
    document.body.setAttribute('data-sld', swiper.realIndex);
  };

  return (
    <div className="container">
      <Swiper
        className="mySwiper2"
        navigation={{
          nextEl: '.swiper-next-button',
          prevEl: '.swiper-prev-button',
        }}
        effect="fade"
        loop={true}
        pagination={{ el: '.swiper-pagination', type: 'fraction' }}
        onSlideChange={handleSlideChange}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={slide.id} className="main swiper-slide">
            <div className="left-side">
              <div className="main-wrapper">
                <h3 className="main-header">{slide.header}</h3>
                <h1 className="main-title">{slide.title}</h1>
                <h2 className="main-subtitle">{slide.subtitle}</h2>
              </div>
              <div className="main-content">
                <div className="main-content__title">{slide.contentTitle}</div>
                <div className="main-content__subtitle">{slide.contentSubtitle}</div>
                <div className="more-menu">
                  Shop Now
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="-5" y1="12" x2="19" y2="12" />
                    <line x1="15" y1="16" x2="19" y2="12" />
                    <line x1="15" y1="8" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="right-side__img">
                <img className="bottle-bg" src={slide.bgImg} alt="" />
                <img className="bottle-img" src={slide.bottleImg} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="button-wrapper">
        <div className="swiper-button swiper-prev-button">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </div>
        <div className="swiper-button swiper-next-button">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Slider2;
