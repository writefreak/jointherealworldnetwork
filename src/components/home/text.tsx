import React from "react";

interface Props {
  slug1: string;
  slug2: string;
  slug3: string;
  icon: string;
}

const Text = ({ slug1, slug2, slug3, icon }: Props) => {
  return (
    <div>
      <div className="flex items-center gap-9">
        <img src={icon} alt="" />
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-medium font-league">{slug1}</h2>
          <h2 className="text-white font-medium font-league">{slug2}</h2>
          <h2 className="text-white font-medium font-league">{slug3}</h2>
        </div>
      </div>
    </div>
  );
};

export default Text;
