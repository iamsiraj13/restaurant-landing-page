import React, { useState } from "react";
import Button from "./Button";
import { PiPhoneCallDuotone } from "react-icons/pi";

const RTabs = () => {
  const tabData = [
    {
      id: 0,
      btn: "About",
      title: "Exceptional culinary experience and delicios food",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
    },
    {
      id: 1,
      btn: "Experience",
      title: " Experience should give you hundread and delicios food",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod ",
    },
    {
      id: 2,
      btn: "Contact",
      title: "Contact Hover on system experience and delicios food",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
    },
  ];
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <div className="w-full">
        <div className="flex border-b border-[#B52B1D]">
          {tabData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setTabIndex(index)}
              className={` px-4 py-2 text-center ${
                tabIndex === index
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {tab?.btn}
            </button>
          ))}
        </div>
        <div className="w-full">
          <h2 className="font-bebas font-[500] text-rblack text-[40px] md:text-[62px] leading-none my-[32px]">
            {tabData[tabIndex]?.title}
          </h2>
          <p className="mb-[32px] font-roboto text-[16px] text-[#333333]">
            {tabData[tabIndex]?.desc}
          </p>
        </div>
        <div className="flex gap-[32px] items-center">
          <div>
            <Button>about more</Button>
          </div>
          <p className="font-bold font-roboto text-[18px] flex items-center gap-2 text-rblack">
            <span className="text-[#BD1F17] font-bold">
              <PiPhoneCallDuotone />
            </span>
            <span>+883426739485</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RTabs;
