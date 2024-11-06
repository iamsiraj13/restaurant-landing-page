import React, { Children } from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-primary text-[16px] uppercase px-[24px] py-[10px] font-bold text-body  hover:scale-105 transition-all duration-500">
      {children}
    </button>
  );
};

export default Button;