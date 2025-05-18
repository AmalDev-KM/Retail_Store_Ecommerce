import React from "react";

import { Link } from "react-router-dom";
const BannerBox = (props) => {
  return (
    <div className="box bannerBox overflow-hidden rounded-lg group">
      <Link>
        <img src={props.img} alt="Banner" className="w-full group-hover:scale-105 transition-all group-hover:rotate-1" />
      </Link>
    </div>
  );
};

export default BannerBox;
