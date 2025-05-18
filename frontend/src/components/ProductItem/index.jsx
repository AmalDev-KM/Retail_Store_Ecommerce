import React from "react";
import "../ProductItem/style.css";

import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const ProductItem = () => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
      <div className="imgWrapper w-[100%] h-[220px] overflow-hidden rounded-md">
        <img
          src="https://www.jiomart.com/images/product/original/494423013/apple-iphone-16-128-gb-black-digital-o494423013-p609946224-0-202409111651.jpeg?im=Resize=(360,360)"
          alt=""
          srcset=""
          className="w-full"
        />
      </div>

      <div className="info p-3 ">
        <h6 className="text[14px]">
          <Link to={"/"} className="link">
            Apple
          </Link>
        </h6>
        <h3 className="text-[16px] title mt-1 font-[500] mb-1 text-[#000]">
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
      </div>
    </div>
  );
};

export default ProductItem;
