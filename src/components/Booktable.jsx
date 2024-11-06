import React from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";

const Booktable = () => {
  return (
    <div className="book__table pt-[120px] pb-[86px]">
      <div className="container">
        <div className="w-full md:w-1/2">
          <div>
            <Title title="BOOK YOUR TABLE" subtitle="Book Now" type="true" />
            <p className="mt-[16px] mb-[40px] w-full max-w-[545px]   text-[#F7F8F9] font-roboto text-[16px]">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>
          </div>
          <div>
            <form>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-[24px]">
                <input
                  className="border border-white px-4 py-2 bg-transparent font-roboto text-[14px] text-white placeholder:text-[14px] placeholder:text-white focus:outline-none w-full h-[46px]"
                  type="text"
                  placeholder="Your Name *"
                />
                <input
                  className="border border-white px-4 py-2 bg-transparent font-roboto text-[14px] text-white placeholder:text-[14px] placeholder:text-white focus:outline-none"
                  type="text"
                  placeholder="Your Email *"
                />
                <input
                  className="border border-white px-4 py-2 bg-transparent font-roboto text-[14px] text-white placeholder:text-[14px] placeholder:text-white focus:outline-none"
                  type="date"
                  placeholder="Reservation Date *"
                />
                <input
                  className="border border-white px-4 py-2 bg-transparent font-roboto text-[14px] text-white placeholder:text-[14px] placeholder:text-white focus:outline-none"
                  type="number"
                  placeholder="Total People"
                />
              </div>
              <div>
                <textarea className="border border-white px-4 py-2 bg-transparent font-roboto text-[14px] text-white placeholder:text-[14px] placeholder:text-white focus:outline-none w-full h-[140px] my-[24px]">
                  Message
                </textarea>
              </div>
              <Button>Book Now</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booktable;
