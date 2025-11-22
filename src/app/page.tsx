import Header from "@/components/home/header";
import MobileHeader from "@/components/home/mobileHeader";
import React from "react";

const page = () => {
  return (
    <div
      className="
        bg-[#0b0e13]
        px-5 py-2 md:py-5 md:px-10
        
      "
    >
      <MobileHeader className="md:hidden" />
      <Header className="hidden md:flex" />
    </div>
  );
};

export default page;
