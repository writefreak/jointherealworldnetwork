import React from "react";
import { Button } from "../ui/button";
import { cn } from "../../../lib/utils";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <div className={cn("flex flex-col px-5 py-2 md:py-5 md:px-10", className)}>
      <div className="flex  justify-between">
        <Button className="rounded-md  flex items-center text-[#55575b] text-[16px] md:text-[22px] border border-[#494b50] bg-transparent font-league font-bold md:h-11 md:w-32">
          LOGIN
        </Button>
        <Button className=" rounded-md text-[15px] md:text-[24px] text-black bg-linear-to-b from-[#FFC81D] to-[#FF8B25] font-league font-bold md:h-11 md:w-44 w-36">
          JOIN NOW
        </Button>
      </div>
      <div className="flex items-start justify-center mt-4 py-7">
        <div className="h-[98px] w-[98px]">
          <img src="/logo.png" alt="" className="h-full w-full object-cover" />
        </div>
        <span className="self-end font-bold text-xl  text-[#2d3034]">©</span>
      </div>

      <div className="flex flex-col  items-center gap-6 pt-4">
        <div className="flex items-center justify-center gap-10 relative">
          <div className="h-16 w-16 hidden md:flex absolute -bottom-8 -left-20 transform rotate-90 md:rotate-0">
            <img
              src="/left.png"
              alt="Arrow pointing down"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="px-14 flex flex-col gap-4 itemsce">
            <h1 className="text-white font-satoshi text-6xl">
              Making money is a <span className="font-bold">skill.</span>
            </h1>
            <h2 className="text-white font-satoshi text-[39px]">
              We will <span className="font-bold">teach you</span> how to{" "}
              <span className="font-bold">master it.</span>
            </h2>
          </div>
          <div className="h-16 w-16 hidden md:flex absolute -bottom-8 -right-20 transform rotate-90 md:rotate-0">
            <img
              src="/right.png"
              alt="Arrow pointing down"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-13 md:py-10">
        <Button className=" rounded-md text-[15px] md:text-[24px] text-black bg-linear-to-b from-[#FFC81D] to-[#FF8B25] font-league font-bold p-7">
          USE AI
        </Button>
      </div>
    </div>
  );
};

export default Header;
