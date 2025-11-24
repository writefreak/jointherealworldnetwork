import React from "react";

const Hustlers = () => {
  return (
    <div className="pt-10">
      <div className="w-full h-0.5 bg-linear-to-r from-transparent via-[#ffffff80] to-transparent"></div>
      <div className="flex flex-col items-center justify-center pt-10 md:pt-14">
        <div className="h-28 w-28">
          <img src="/logo2.png" alt="" className="h-full w-full object-cover" />
        </div>
        <div>
          <h3 className="text-[#707275] font-medium font-satoshi text-md md:text-xl">
            Hustlers University
          </h3>
          <div></div>
        </div>
        <div className="pt-10 flex flex-col items-center justify-center gap-3 md:gap-5">
          <img src="/arrow.svg" alt="" />
          <div>
            <span className="text-[21px] text-[#c0c1b5] font-satoshi">
              The Real World
            </span>
          </div>
        </div>
        <div className="h-44 w-44">
          <img
            src="/logo3.png"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <span className="text-[#707275] font-medium font-satoshi text-xs md:text-[16px] text-[13px]">
            INTRODUCING
          </span>
          <h1 className="text-white md:text-4xl text-4xl font-satoshi">
            A MASSIVE <br className="md:hidden" />
            <span className="font-bold">UPGRADE</span>
          </h1>
          <div className="md:w-52 w-48 flex md:self-end">
            <img src="/line.webp" alt="" className="h-full w-full" />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center pt-5 gap-7">
            <h3 className="font-league text-center text-white md:text-[22px] text-[19px]">
              The world's <span className="font-bold">most advanced</span>{" "}
              financial <br className="md:hidden" /> education platform just got
              even better.
            </h3>
            <h3 className="font-league text-center text-[#959ea7] md:text-[23px] text-[20px]">
              <span className="text-white font-semibold">'THE REAL WORLD’</span>{" "}
              is a financial education platform that will disrupt the modern{" "}
              <br />
              education system forever.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hustlers;
