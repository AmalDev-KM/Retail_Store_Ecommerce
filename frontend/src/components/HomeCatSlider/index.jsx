import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider py-8 pt-4">
      <div className="container">
      <Swiper
        slidesPerView={8}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
          <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
              className='w-[60px] transition-all'
              alt="Image not avaliable" />
              <h3 className='text-[14px] font-[500]'>Fashion</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide> 
          <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
              className='w-[60px] transition-all'
              alt="Image not avaliable" />
              <h3 className='text-[14px] font-[500]'>Electronics</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide> 
          <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img src="https://serviceapi.spicezgold.com/download/1741661045887_bag.png"
              className='w-[60px] transition-all'
              alt="Image not avaliable" />
              <h3 className='text-[14px] font-[500]'>Bags</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide> 
          <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png"
              className='w-[60px] transition-all'
              alt="Image not avaliable" />
              <h3 className='text-[14px] font-[500]'>Footwear</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide> 
          <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img src="https://serviceapi.spicezgold.com/download/1741661077633_gro.png"
              className='w-[60px] transition-all'
              alt="Image not avaliable" />
              <h3 className='text-[14px] font-[500]'>Groceries</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide> 
          <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img src="https://serviceapi.spicezgold.com/download/1741661092792_beauty.png"
              className='w-[60px] transition-all'
              alt="Image not avaliable" />
              <h3 className='text-[14px] font-[500]'>Beauty</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide> 
          <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img src="https://serviceapi.spicezgold.com/download/1741661105893_well.png"
              className='w-[60px] transition-all'
              alt="Image not avaliable" />
              <h3 className='text-[14px] font-[500]'>Wellness</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide> 
          <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img src="https://serviceapi.spicezgold.com/download/1741661120743_jw.png"
              className='w-[60px] transition-all'
              alt="Image not avaliable" />
              <h3 className='text-[14px] font-[500]'>Jewellary</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide> 
          <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
              className='w-[60px] transition-all'
              alt="Image not avaliable" />
              <h3 className='text-[14px] font-[500]'>Smart Tablet</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide> 
          <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
              className='w-[60px] transition-all'
              alt="Image not avaliable" />
              <h3 className='text-[14px] font-[500]'>Smart Tablet</h3>
            </div>
          </Link>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  )
}



export default HomeCatSlider