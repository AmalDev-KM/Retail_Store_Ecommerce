import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'; // ⬅️ Add Autoplay
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from '@mui/material';

const slides = [
  {
    image: './Slider2/sliderImage.jpg',
    title: 'Women Solid Round Green T-Shirt',
    price: '₹59.00',
  },
  {
    image: './Slider2/sample-2.jpg',
    title: 'Buy Modern Chair In Black Color',
    price: '₹99.00',
  },
];

const HomeBannerV2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={{ clickable: true }}
      loop={true} // ⬅️ Loop enabled
      autoplay={{
        delay: 4000, // Slide changes every 4 seconds
        disableOnInteraction: false, // Keeps autoplay even after user interaction
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]} // ⬅️ Include Autoplay
      className="homeSliderV2"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // use realIndex for loop
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src={slide.image} className="w-full h-auto" />
            <div
              className={`
                info absolute top-0 w-[50%] h-full z-50 p-8 flex items-center flex-col justify-center transition-all duration-700
                ${index === activeIndex ? 'right-0 opacity-100' : '-right-[100%] opacity-0'}
              `}
            >
              <h4 className="text-[18px] font-[500] w-full text-left mb-5">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-[700] w-full text-left mb-4">
                {slide.title}
              </h2>
              <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-5">
                Starting At Only
                <span className="text-primary text-[30px] font-[700]">{slide.price}</span>
              </h3>
              <div className="w-full">
                <Button className="btn-org">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeBannerV2;
