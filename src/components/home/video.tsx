import React from "react";
import { Button } from "../ui/button";

const Video = () => {
  return (
    <div className="flex flex-col justify-center items-center px-5 md:px-10">
      <div className="md:h-[500px]">
        <video src="/w.mp4" className="h-full"></video>
      </div>
      <div className="py-10 md:py-12">
        <Button className=" rounded-md text-[19px] md:text-[24px] text-black bg-linear-to-b from-[#FFC81D] to-[#FF8B25] font-league font-bold py-[23px] md:py-[25px] px-8">
          JOIN THE REAL WORLD
        </Button>
      </div>
    </div>
  );
};

export default Video;
