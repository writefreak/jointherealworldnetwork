import React from "react";
import { Button } from "../ui/button";

const MobileBottom = () => {
  return (
    <div className="md:hidden">
      <div className="flex flex-col items-center gap-6 pt-4">
        <div className="flex items-center justify-center gap-10 relative">
          <div className="px- flex flex-col items-center gap-4">
            <h1 className="text-white text-center font-satoshi text-[40px]">
              Making money is a <br />
              <span className="font-bold">skill.</span>
            </h1>
            <h2 className="text-white text-center font-satoshi text-[21px]">
              We will <span className="font-bold">teach you</span> how to{" "}
              <span className="font-bold">master it.</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-7">
        <Button className=" rounded-md text-[19px] md:text-[24px] text-black bg-linear-to-b from-[#FFC81D] to-[#FF8B25] font-league font-bold w-44 py-[23px]">
          USE AI
        </Button>
      </div>
    </div>
  );
};

export default MobileBottom;
