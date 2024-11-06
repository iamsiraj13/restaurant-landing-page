import React from "react";

const Title = ({ title, subtitle, type }) => {
  return (
    <div className=" ">
      <h4 className=" flex items-center gap-[10px] mb-[16px] leading-none">
        <span className="w-[10px] h-[10px] bg-rred inline-block "></span>
        <span className="font-roboto font-bold text-rred text-[16px] md:text-[20px] ">
          {subtitle}
        </span>
      </h4>
      <h2
        className={`${
          type === "true" ? "text-white" : "text-rblack"
        } font-bebas font-medium text-[40px] md:text-[62px] leading-none`}
      >
        {title}
      </h2>
    </div>
  );
};

export default Title;
