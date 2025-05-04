import React from 'react'
import HomeSlider from '../../components/HomeSlider'
import HomeCatSlider from '../../components/HomeCatSlider'
import { FaShippingFast } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <HomeSlider/>
      <HomeCatSlider/>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="freeshipping w-full py-2 p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className='text-[50px]' />
              <span className='text-[20px] font-[600] uppercase'>Free Shipping</span>
            </div>
            <div className="col2">
              <p className='mb-0 font[500]'>Free delivery now on your first order and over ₹200</p>
            </div>
            <p className='font-bold text-[25px] uppercase'>- only ₹200</p>
          </div>
        </div>
      </section>


      <br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Home
