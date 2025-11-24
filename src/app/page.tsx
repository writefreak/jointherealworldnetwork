import Header from "@/components/home/header";
import Hustlers from "@/components/home/hustlers";
import MobileBottom from "@/components/home/mobileBottom";
import MobileHeader from "@/components/home/mobileHeader";
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
    </div>
  );
};

export default page;
