import React, { Children } from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-primary text-[14px] lg:text-[16px] uppercase px-[16px] lg:px-[24px] py-[10px] font-bold text-body  hover:scale-105 transition-all duration-500">
      {children}
    </button>
  );
};

export default Button;
