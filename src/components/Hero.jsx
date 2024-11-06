import React from "react";
import Button from "../ui/Button";
import offer from "../assets/hero/offer.png";
import star from "../assets/hero/star.png";
import hero from "../assets/hero/hero.png";

const Hero = () => {
  return (
    <div className="hero__section w-full  pt-[70px]    ">
      <div className="container w-full  pt-[230px]  pb-[32px] md:pb-[160px] flex flex-col md:flex-row  items-center">
        <div className="hero__content mb-[200px] w-full flex items-center relative">
          {/* offer */}
          <div className="hidden lg:block absolute bottom-0 -right-14">
            <img src={offer} alt="offer" />
          </div>
          {/* star */}
          <div className="hidden lg:block absolute -top-8 -right-8 ">
            <img src={star} alt="star" />
          </div>
          {/* hero content */}
          <div>
            <h2 className="text-white font-bebas text-[48px] lg:text-[120px] mb-[16px] font-medium md:font-bold lg:bg-gradient-to-r from-[#BD1F1700] to-[#BD1F17B2] w-full lg:w-[830px] leading-none py-4 z-0">
              Taste the authentic Saudi cuisine
            </h2>
            <p className="mb-[38px] text-[24px] font-roboto text-white w-full lg:w-[560px]">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <Button>explore menu</Button>
          </div>
        </div>
        <div className="block md:hidden">
          <img src={hero} alt="hero" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
