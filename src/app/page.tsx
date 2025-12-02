import Header from "@/components/home/header";
import Hustlers from "@/components/home/hustlers";
import Left from "@/components/home/left";
import MobileBottom from "@/components/home/mobileBottom";
import MobileHeader from "@/components/home/mobileHeader";
import Private from "@/components/home/private";
import Right from "@/components/home/right";
import Video from "@/components/home/video";
import { Button } from "@/components/ui/button";
import Progress from "@/components/ui/progress";
import React from "react";

const page = () => {
  return (
    <div className="">
      <MobileHeader className="md:hidden" />
      <MobileBottom />
      <Header className="hidden md:flex" />
      <Video />
      <Hustlers />

      <div className="md:flex gap-10 hidden">
        <Left />
        <Progress />
        <div>
          <Right />
        </div>
      </div>
      <div className="md:flex justify-end pr-8 hidden">
        <Private />
      </div>
      <div className="flex items-center justify-center pt-36">
        <Button className=" rounded-md text-[15px] md:text-[24px] text-black bg-linear-to-b from-[#FFC81D] to-[#FF8B25] font-league font-bold py-[26px] md:w-44 w-36">
          JOIN NOW
        </Button>
      </div>
    </div>
  );
};

export default page;
