'use client'
import React, { useEffect } from "react";
import Swiper,{ Pagination, Mousewheel, EffectFade }  from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import SwiperSlide from './SwiperSlide';
import "./trusted.css"; // Import the CSS styles

const SwiperContainer = () => {
    useEffect(() => {
      const swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        effect: 'fade',
        speed: 1000,
        loop: true,
        pagination: {
          // el: '.swiper-pagination',
          clickable: true,
          
        },
        mousewheel: {
          invert: false,
          forceToAxis: true,
          thresholdDelta: 50,
          sensitivity: 1,
        },
        on: {
          slideChange: function () {
            this.slides.forEach((slide) => {
              let background = slide.querySelector('.background');
              if (background) {
                background.classList.remove('animation');
              }
            });
            let activeSlide = this.slides[this.activeIndex];
            let background = activeSlide.querySelector('.background');
            if (background) {
              background.classList.add('animation');
            }
          },
        },
      });
  
      return () => {
        swiper.destroy(true, true);
      };
    }, []);
  
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <SwiperSlide
            title="Hallstatt, Austria"
            description="Visit Hallstatt, Austria, a beautiful village by a clear lake, surrounded by tall mountains. Walk through old streets, see ancient salt mines, and enjoy the peaceful views. This tour is perfect for nature lovers and history fans."
            backgroundClass="one"
          />
          <SwiperSlide
            title="Paris, France"
            description="Explore Paris, the City of Light, known for its romance and famous landmarks like the Eiffel Tower. Enjoy delicious food, visit the Louvre, and stroll along the Seine River. Choose this tour to experience the charm and culture of France."
            backgroundClass="two"
          />
          <SwiperSlide
            title="Amsterdam, Netherlands"
            description="Discover Amsterdam, a city full of canals, bicycles, and culture. Visit the Van Gogh Museum, take a canal cruise, and explore lively streets. This tour is great for those who love art, history, and a vibrant city atmosphere."
            backgroundClass="three"
          />
          <SwiperSlide
            title="Kyoto, Japan"
            description="Travel to Kyoto, Japan, a city rich in tradition and beauty. Visit ancient temples, enjoy beautiful gardens, and see colorful geisha districts. This tour is perfect for those who want to experience Japan's history and culture."
            backgroundClass="four"
          />
          <SwiperSlide
            title="New York, USA"
            description="Experience New York City, where excitement and adventure await at every corner. See the Statue of Liberty, enjoy a Broadway show, and taste food from around the world. This tour is ideal for those who want to feel the energy of a big city."
            backgroundClass="five"
          />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    );
  };

export default SwiperContainer;
