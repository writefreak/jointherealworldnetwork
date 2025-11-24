import React from "react";
import { Button } from "../ui/button";
import { cn } from "../../../lib/utils";

interface Props {
  className?: string;
}

const MobileHeader = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "relative bg-[url('/matrix.png')] bg-cover bg-center md:bg-none",
        className
      )}
    >
      <div className={cn("px-5 py-2 md:py-4 md:px-10", className)}>
        <div className="flex justify-between items-center h-16 md:h-auto">
          <Button className="rounded-md flex items-center text-[#55575b] text-[16px] md:text-[24px] border border-[#494b50] bg-transparent font-league font-bold md:h-11 md:w-32">
            LOGIN
          </Button>
          <Button className="rounded-md text-[15px] md:text-[24px] text-black bg-linear-to-b from-[#FFC81D] to-[#FF8B25] font-league font-bold md:h-11 md:w-44 w-36">
            JOIN NOW
          </Button>
        </div>
      </div>

      <div className="flex items-start justify-center mt-4 py-7">
        <div className="h-24 w-24">
          <img src="/logo.png" alt="" className="h-full w-full object-cover" />
        </div>
        <span className="self-end font-bold text-xl  text-gray-500">©</span>
      </div>
    </div>
  );
};

export default MobileHeader;
