import React from "react";
import abthumb from "../assets/about/about.png";
import RTabs from "../ui/RTabs";
import one from "../assets/about/1.png";
import two from "../assets/about/2.png";
import three from "../assets/about/3.png";
import abutil from "../assets/about/about1.png";

const About = () => {
  return (
    <div
      className="w-full bg-white py-[32px] lg:py-[120px] relative"
      id="about"
    >
      <div className="hidden lg:block absolute right-0 bottom-14">
        <img src={abutil} alt="abutil" />
      </div>
      <div className="container">
        {/* about top  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[79px]  ">
          <div className="mb-[32px] md:mb-0">
            <img src={abthumb} alt="ab thumb" className="w-full" />
          </div>
          {/* about tabs  */}
          <div>
            <RTabs />
          </div>
        </div>
        {/* about bottom  */}
        <div className="flex flex-col md:flex-row mt-[74px] justify-between">
          {/* box  */}
          <div className="flex items-center gap-[16px] mb-[32px] md:mb-0">
            <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px]   shadow-custom flex justify-center items-center rounded-full">
              <img src={one} alt="one" />
            </div>
            <div>
              <h3 className="font-bebas font-[500] text-rblack text-[24px] md:text-[30px]">
                fast delivery
              </h3>
              <p className="font-inter text-rblack text-[20px]">
                Within 30 minutes
              </p>
            </div>
          </div>
          {/* box  */}
          <div className="flex items-center gap-[16px] mb-[32px] md:mb-0">
            <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px]  shadow-custom flex justify-center items-center rounded-full">
              <img src={two} alt="two" />
            </div>
            <div>
              <h3 className="font-bebas font-[500] text-rblack text-[24px] md:text-[30px] uppercase">
                absolute dining
              </h3>
              <p className="font-inter text-rblack text-[18px] md:text-[20px]">
                Best buffest restaurant
              </p>
            </div>
          </div>
          {/* box  */}
          <div className="flex items-center gap-[16px] mb-[32px] md:mb-0">
            <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] shadow-custom flex justify-center items-center rounded-full">
              <img src={three} alt="three" />
            </div>
            <div>
              <h3 className="font-bebas font-[500]  text-rblack text-[24px] md:text-[30px] uppercase">
                pickup delivery
              </h3>
              <p className="font-inter text-rblack text-[18px] md:text-[20px]">
                Grab your food order
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
