import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FoodCard from "../ui/FoodCard";
import food1 from "../assets/food/1.png";
import food2 from "../assets/food/2.png";
import food3 from "../assets/food/3.png";
import food4 from "../assets/food/4.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Title from "../ui/Title";
import foodShape from "../assets/food/shape.png";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const slideData = [
  {
    id: 1,
    thumb: food1,
    title: "vegetables burger",
  },
  {
    id: 2,
    thumb: food2,
    title: "Spacial Pizza ",
  },
  {
    id: 3,
    thumb: food4,
    title: "Spacial French fries ",
  },
  {
    id: 4,
    thumb: food4,
    title: "Cuisine Chicken",
  },
];

const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="flex justify-between items-center mb-[60px]">
      <Title title="popular food items" subtitle="Crispy, Every Bite Taste" />
      <div className="  flex items-center  gap-[32px]">
        {/* className="absolute -top-[120px]  right-8 flex items-center transform   mb-[60px] gap-[32px]" */}
        <button
          onClick={() => previous()}
          className="w-[60px] h-[60px] flex justify-center items-center bg-white  shadow-md rounded-full text-[24px] hover:text-rred"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={() => next()}
          className="w-[60px] h-[60px] flex justify-center items-center bg-white  shadow-md rounded-full text-[24px] hover:text-rred"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};
const PopularFood = () => {
  return (
    <div className=" bg-[#FBF7F2] pb-[120px] pt-[120px] relative">
      <div className="hidden md:block absolute left-0 top-1/3">
        <img src={foodShape} alt="" />
      </div>
      <div className="container relative w-full flex flex-col-reverse gap-4 pr-8 md:pr-0">
        <Carousel
          autoPlay={false}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          responsive={responsive}
          infinite={true}
          transitionDuration={600}
        >
          {slideData?.map((item, index) => (
            <div key={index} className="md:px-4">
              <FoodCard item={item} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PopularFood;
