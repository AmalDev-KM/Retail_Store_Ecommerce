import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation , Autoplay } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div className='homeSlider py-4'>
       <div className="container">
        <Swiper 
        loop={true}
        spaceBetween={10} 
        navigation={true} 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Navigation]} 
        className="sliderHome">
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src="./Hero/Banner1.jpg" alt="Banner image" className='w-full' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
             <img src="./Hero/banner2.jpg" alt="Banner image" className='w-full' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
            <img src="./Hero/Banner3.jpg" alt="Banner image" className='w-full' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
            <img src="./Hero/Banner4.jpg" alt="Banner image" className='w-full' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
            <img src="./Hero/Banner5.jpg" alt="Banner image" className='w-full' />
            </div>
          </SwiperSlide>
        </Swiper>
       </div>
    </div>
  )
}

export default HomeSlider