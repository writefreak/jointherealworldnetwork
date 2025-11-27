import React from "react";
import Progress from "../ui/progress";

const MobileSlider = () => {
  return (
    <div className="flex gap-5 md:hidden px-[21px] pt-7">
      <Progress />
      <div className="pt-28">
        <h3 className="text-white font-league font-semibold text-[28px]">
          New App, New Lessons
        </h3>
      </div>
    </div>
  );
};

export default MobileSlider;
