import Header from "@/components/home/header";
import Hustlers from "@/components/home/hustlers";
import MobileBottom from "@/components/home/mobileBottom";
import MobileHeader from "@/components/home/mobileHeader";
import MobileSlider from "@/components/home/mobileSlider";
import Slider from "@/components/home/slider";
import Video from "@/components/home/video";
import React from "react";

const page = () => {
  return (
    <div
      className="
        bg-[#0b0e13]
        
        
      "
    >
      <MobileHeader className="md:hidden" />
      <MobileBottom />
      <Header className="hidden md:flex" />
      <Video />
      <Hustlers />
      <Slider />
      <MobileSlider />
    </div>
  );
};

export default page;
