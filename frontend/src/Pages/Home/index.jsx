import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdaBannerSlider";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductSlider from "../../components/ProductSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem";
import Footer from "../../components/Footer";
import HomeBannerV2 from "../../components/HomeSliderV2";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <HomeSlider />
      {/* <section className="py-6">
        <div className="container flex items-center">
          <div className="part1 w-[70%]">
            <HomeBannerV2 />
          </div>
        </div>
      </section> */}

      <HomeCatSlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="w-full flex items-center justify-between">
            <div className="leftSec">
              <h3 className="text-[20px] font-[600]">Popular Products</h3>
              <p className="text-[14px] font-[400]">
                Do not miss the current offer until the end of July.
              </p>
            </div>
            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Groceries" />
                <Tab label="Wellness" />
                <Tab label="Jewelery" />
                <Tab label="Beauty" />
                <Tab label="Groceries" />
                <Tab label="Wellness" />
                <Tab label="Jewelery" />
                <Tab label="Beauty" />
              </Tabs>
            </div>
          </div>

          <ProductSlider items={6} />
        </div>
      </section>

      <section className="py-4 pt-2 bg-white">
        <div className="container">
          <div className="freeshipping w-[80%] m-auto py-2 p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>
            <div className="col2">
              <p className="mb-0 font[500]">
                Free delivery now on your first order and over ₹200
              </p>
            </div>
            <p className="font-bold text-[25px] uppercase">- only ₹200</p>
          </div>
          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="p-5 pt-0 bg-white">
        <div className="container">
          <h3 className="text-[20px] font-[600]">Latest Products</h3>
          <ProductSlider items={6} />

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="p-5 pt-0 bg-white">
        <div className="container">
          <h3 className="text-[20px] font-[600]">Featured Products</h3>
          <ProductSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white blogSection">
        <div className="container">
          <h3 className="text-[20px] font-[600] mb-4">From the blog</h3>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Home;
