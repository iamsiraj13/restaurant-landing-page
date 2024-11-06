import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Title from "../ui/Title";
import videoThumb from "../assets/testimonial/video.png";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="flex justify-between items-center mb-[60px]">
      <Title
        title="What Some of my Customers Say"
        subtitle="Crispy, Every Bite Taste"
      />
      <div className="  flex items-center  gap-[32px]">
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
const Testimonial = () => {
  return (
    <div className=" bg-white pb-[120px] pt-[120px] relative">
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
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className="flex w-full h-[555px]">
              <div className="w-2/5 h-full bg-primary px-[58px] py-[70px] flex flex-col justify-between">
                <div>
                  <p className="font-roboto text-[20px] text-body">
                    You can't go wrong with Chicken Mandi, I had it twice. The
                    chicken was cooked perfectly, juicy & soft (usually mandi
                    chicken is a bit dry). I would defiantly recommend it.
                  </p>
                </div>
                <div>
                  <h2>this is author</h2>
                </div>
              </div>
              <div className="w-3/5 h-full    ">
                <div className="w-full h-full video"></div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
