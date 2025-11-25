import React from "react";
import Progress from "../ui/progress";

const Slider = () => {
  return (
    <div className="hidden md:flex px-14 pt-18 items-center gap-12">
      <div className="flex flex-col gap-6">
        {details.map((d) => (
          <div key={d.id} className="flex items-center gap-9">
            <img src="/tick.svg" alt="" />
            <h3 className="text-gray-400 text-[22px] leading-snug">
              {getStyledText(d.slug)}
            </h3>
          </div>
        ))}
      </div>
      <Progress />
    </div>
  );
};

export default Slider;

const details = [
  {
    id: 1,
    slug: "World-class custom built learning application",
    bold: "custom built learning application",
  },
  {
    id: 2,
    slug: "Scale from Zero to $10k/month as fast as possible",
    bold: "Zero to $10k/month",
  },
  {
    id: 3,
    slug: "Master the skills you need to maximize your income",
    bold: "maximize your income",
  },
];

// Helper function to render bold text in white
function getStyledText(text: string) {
  const item = details.find((d) => d.slug === text);
  if (!item || !item.bold) return text;

  // Handle "income" break
  if (item.bold.includes("income")) {
    const parts = item.bold.split("income");
    const beforeIncome = parts[0]; // "maximize your "
    return (
      <>
        <span className="text-gray-400">{text.split(item.bold)[0]}</span>
        <span className="text-white font-medium font-league">
          {beforeIncome}
        </span>
        <br />
        <span className="text-white font-medium font-league">income</span>
      </>
    );
  }

  const parts = text.split(item.bold);
  return (
    <>
      <span className="text-gray-400 text-[22px]">{parts[0]}</span>
      <span className="text-white font-medium text-[22px] font-league">
        {item.bold}
      </span>
      <span className="text-gray-400 text-[22px] font-league">{parts[1]}</span>
    </>
  );
}
