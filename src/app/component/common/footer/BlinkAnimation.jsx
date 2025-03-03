'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';

const images = [
  { name: "DemiGod Art", imageUrl: "https://www.artdemigod.com/assets/image/art%20logo%20finel.png" },
  { name: "DemiGod Cloud", imageUrl: "https://www.demigodcloud.com/images/demigod%20vector%20nav.webp" },
  { name: "DemiGod HealthBox", imageUrl: "./logo/healthboxlogo.png" },
  { name: "Demigod", imageUrl: "./logo/demigodlogo.png" },
  { name: "Anagari", imageUrl: "./logo/anagari.png" },
  { name: "DemiGod Estate", imageUrl: "./images/navlogo.png" }
];

export default function BlinkAnimation() {
  return (
    <div className="container text-center mt-lg-5 mt-0">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={500}
        slidesPerView={2} // Show 2 images at a time
        spaceBetween={30} // Add spacing between images
        loop
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={item.imageUrl}
                alt={item.name}
                width={200}
                height={200}
                className='logoImage-footer-marque'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
