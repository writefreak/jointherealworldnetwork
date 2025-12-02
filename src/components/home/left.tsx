import React from "react";

const Left = () => {
  return (
    <div className="hidden md:flex pl-14  items-center ">
      <div className="flex flex-col gap-6">
        {details.map((d) => (
          <div key={d.id} className="flex items-center gap-9">
            <img src="/tick.svg" alt="" />
            <h3 className="text-gray-400 text-[21px] leading-snug font-satoshi font-medium">
              {getStyledText(d.slug)}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Left;

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
        <span className="text-white font-medium font-satoshi">
          {beforeIncome}
        </span>
        <br />
        <span className="text-white font-medium font-satoshi">income</span>
      </>
    );
  }

  const parts = text.split(item.bold);
  return (
    <>
      <span className="text-gray-400">{parts[0]}</span>
      <span className="text-white font-medium font-satoshi">{item.bold}</span>
      <span className="text-gray-400">{parts[1]}</span>
    </>
  );
}
