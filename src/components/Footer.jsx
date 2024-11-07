import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer w-full py-[32px] md:py-[120px]" id="contact">
      <div className="container">
        {/* section title  */}
        <div className="text-center">
          <h2 className="font-bebas text-white text-[40px] lg:text-[62px] font-medium mb-[46px]">
            We ready to have you the best dining experiences
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-[60px] lg:mb-[120px] gap-y-[24px]">
          {/* box  */}
          <div className="w-full text-white text-center mb-[32px] md:mb-0">
            <span className="inline-block font-bold text-primary text-4xl text-center">
              <FaRegClock />
            </span>
            <h3 className="mt-[24px] lg:mt-[16px] mb-[12px] uppercase text-white text-[24px] font-bebas">
              opening hours
            </h3>
            <p className="font-roboto text-[16px] text-[#F7F8F9]">
              Monday - Sunday
            </p>
            <p className="font-roboto text-[16px] text-[#F7F8F9]">
              9:00 AM to 11:30 Pm
            </p>
          </div>
          {/* box  */}
          <div className="w-full text-white text-center">
            <span className="inline-block font-bold text-primary text-4xl text-center">
              <PiPhoneCallDuotone />
            </span>
            <h3 className="mt-[24px] lg:mt-[16px] mb-[12px] uppercase text-white text-[24px] font-bebas">
              LET'S TALK
            </h3>
            <p className="font-roboto text-[16px] text-[#F7F8F9]">
              Phone: 1-800-222-4545
            </p>
            <p className="font-roboto text-[16px] text-[#F7F8F9]">
              Fax: 1-800-222-4545
            </p>
          </div>
          {/* box  */}
          <div className="w-full text-white text-center">
            <span className="inline-block font-bold text-primary text-4xl text-center">
              <FaRegEnvelope />
            </span>
            <h3 className="mt-[24px] lg:mt-[16px] mb-[12px] uppercase text-white text-[24px] font-bebas">
              BOOK A TABLE
            </h3>
            <p className="font-roboto text-[16px] text-[#F7F8F9]">
              Email: demo@website.com
            </p>
            <p className="font-roboto text-[16px] text-[#F7F8F9]">
              Support: support@website.com
            </p>
          </div>
          {/* box  */}
          <div className="w-full text-white text-center">
            <span className="inline-block font-bold text-primary text-4xl text-center">
              <CiLocationOn />
            </span>
            <h3 className="mt-[24px] lg:mt-[16px] mb-[12px] uppercase text-white text-[24px] font-bebas">
              Our Address
            </h3>
            <p className="font-roboto text-[16px] text-[#F7F8F9]">
              123 Stree New York City , United
            </p>
            <p className="font-roboto text-[16px] text-[#F7F8F9]">
              States Of America.
            </p>
          </div>
        </div>
        {/* footer bootom */}
        <div className="flex flex-col items-center">
          <div className="mb-[25px]">
            <ul className="flex gap-[24px] gap-y-[24px]">
              <li className="text-white w-[53px] h-[53px] border border-white flex justify-center items-center rounded-full">
                <span className="text-[24px]">
                  <FaFacebook />
                </span>
              </li>
              <li className="text-white w-[53px] h-[53px] border border-white flex justify-center items-center rounded-full">
                <span className="text-[24px]">
                  <FaSquareXTwitter />
                </span>
              </li>
              <li className="text-white w-[53px] h-[53px] border border-white flex justify-center items-center rounded-full">
                <span className="text-[24px]">
                  <FaLinkedin />
                </span>
              </li>
              <li className="text-white w-[53px] h-[53px] border border-white flex justify-center items-center rounded-full">
                <span className="text-[24px]">
                  <FaLinkedin />
                </span>
              </li>
            </ul>
          </div>
          <p className="text-white font-montserrat text-[16px] md:text-[21px] ">
            © 2023 <span className="font-medium text-primary">Niomax</span> All
            Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
