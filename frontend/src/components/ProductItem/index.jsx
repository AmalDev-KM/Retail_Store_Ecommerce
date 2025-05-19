import React from "react";
import "../ProductItem/style.css";

import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";

const ProductItem = () => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
      <div className="imgWrapper w-[100%] h-[220px] overflow-hidden rounded-md relative">
        <img
          src="https://www.jiomart.com/images/product/original/494423013/apple-iphone-16-128-gb-black-digital-o494423013-p609946224-0-202409111651.jpeg?im=Resize=(360,360)"
          alt=""
          srcset=""
          className="w-full"
        />
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">10%</span>
        <div className="actions absolute top-[15px] right-[-10px] z-50 flex items-center gap-4 flex-col w-[80px]">
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary hover:text-white group">
            <MdZoomOutMap className="text-[18px] text-black group-hover:text-white"/>
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary hover:text-white group">
            <MdZoomOutMap className="text-[18px] text-black group-hover:text-white"/>
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary hover:text-white group">
            <MdZoomOutMap className="text-[18px] text-black group-hover:text-white"/>
          </Button>
          {/* <Button><FaRegHeart /></Button>
          <Button><IoGitCompare /></Button>
          <Button><MdZoomOutMap /></Button> */}
        </div>
      </div>

      <div className="info p-3 py-5">
        <h6 className="text[14px]">
          <Link to={"/"} className="link">
            Apple
          </Link>
        </h6>
        <h3 className="text-[13px] title mt-1 font-[500] mb-1 text-[#000]">
          <Link to={"/"} className="link transition-all">
            Apple iPhone 16 128 GB, Black
          </Link>
        </h3>
        <Rating
          name="half-rating-read"
          defaultValue={3.5}
          precision={0.5}
          readOnly
        />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">$58</span>
          <span className="Price text-primary text-[15px] font-[600]">$58</span>
          
        </div>

      </div>
    </div>
  );
};

export default ProductItem;
