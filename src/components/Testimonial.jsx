import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Title from "../ui/Title";
import videoThumb from "../assets/testimonial/video.png";
import author from "../assets/testimonial/author.png";
import quote from "../assets/testimonial/quote.png";
import play from "../assets/testimonial/Play.png";
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import slice from "../assets/testimonial/test.png";
import grass from "../assets/testimonial/grass.png";
import flower from "../assets/testimonial/flower.png";
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
    <div className="flex justify-between items-center mb-[30px] lg:mb-[60px]">
      <Title
        title="What Some of my Customers Say"
        subtitle="Crispy, Every Bite Taste"
      />
      <div className="flex items-center  gap-[32px] absolute md:static bottom-[-65px] left-[50%] -translate-x-[50%] lg:-translate-x-0">
        <button
          onClick={() => previous()}
          className="w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] flex justify-center items-center bg-white  shadow-md rounded-full text-[24px] hover:text-rred"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={() => next()}
          className="w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] flex justify-center items-center bg-white  shadow-md rounded-full text-[24px] hover:text-rred"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};
const Testimonial = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className=" bg-white pb-[100px] lg:pb-[120px] pt-[32px] lg:pt-[120px] relative"
      id="testimonial"
    >
      {/* left slice  */}
      <div className="hidden lg:block absolute left-0 top-[159px]">
        <img src={slice} alt="slice" />
      </div>
      {/* righjt grass  */}
      <div className="hidden lg:block absolute right-0 bottom-[40px]">
        <img src={grass} alt="slice" />
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
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row w-full h-[555px]"
            >
              <div className="order-2 lg:order-1 w-full  md:w-2/5 h-[335px] lg:h-full bg-primary p-[25px] md:px-[58px] md:py-[70px] flex flex-col justify-between relative">
                {/* flower slice  */}
                <div className="absolute left-0 bottom-0 lg:bottom-[40px]">
                  <img
                    src={flower}
                    alt="flower"
                    className="w-[24px] lg:w-full"
                  />
                </div>
                <div>
                  <p className="font-roboto text-[18px] md:text-[20px] text-body p-4 relative">
                    <div className="absolute left-0 top-0">
                      <img src={quote} alt="quote" />
                    </div>
                    You can't go wrong with Chicken Mandi, I had it twice. The
                    chicken was cooked perfectly, juicy & soft (usually mandi
                    chicken is a bit dry). I would defiantly recommend it.
                  </p>
                </div>
                <div className="flex justify-between items-center border-b border-body ">
                  <div className="pb-[18px]">
                    <h3 className="font-bebas text-[18px] font-medium text-body uppercase">
                      khalid al dawsry
                    </h3>
                    <p className="font-roboto text-[14px] text-[#333333]">
                      Jeddah, Saudi
                    </p>
                  </div>
                  <div className="w-[40px] h-[60px] mb-[-8px]  border-b-2 border-rred">
                    <div className="w-full h-[40px] rounded-full">
                      <img src={author} alt="author" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/5 h-[240px] md:h-full order-1 lg:order-2">
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="dzfOoIdyJRI"
                  onClose={() => setOpen(false)}
                />
                <div className="w-full h-[240px] md:h-full video relative flex justify-center items-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="bg-rblack rounded-full w-[50px] h-[50px]  animate-pulse duration-150 "
                  >
                    <img src={play} alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
