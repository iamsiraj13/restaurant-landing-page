import React from "react";
import { Link } from "react-router-dom";
import food1 from "../assets/food/1.png";

const FoodCard = ({ item }) => {
  return (
    <div className="bg-white text-center p-[32px] ">
      {/* food image  */}
      <div className="w-[120px] h-[120px]  mx-auto">
        <img
          src={item?.thumb}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* food content  */}
      <div>
        <div className="w-[57px] h-[4px] bg-rred my-[24px] mx-auto"></div>
        <h3 className="font-bebas font-medium text-[24px] text-rblack">
          {item?.title}
        </h3>
        <p className="font-inter text-[16px]">Barbecue Italian cuisine pizza</p>
      </div>
    </div>
  );
};

export default FoodCard;
