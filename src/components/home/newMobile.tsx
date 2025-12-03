import React from "react";
import Progress from "../ui/progress";
import { div } from "framer-motion/client";

const NewMobile = () => {
  return (
    <div className="p-4 flex gap-5">
      <Progress />
      <div className="pt-32 flex flex-col gap-16">
        <h2 className="text-[27px] font-satoshi font-semibold">
          New App, New Lessons
        </h2>

        <div className="flex flex-col gap-10">
          {text.map((t) => (
            <div key={t.id} className="pl-5">
              <h3 className="text-gray-400 font-satoshi font-semibold text-[19px] w-20">
                {getStyledText(t.text, t.bold)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewMobile;

const text = [
  {
    id: 1,
    text: "World-class custom built learning application",
    bold: "custom built learning application",
  },
  {
    id: 2,
    text: "Scale from Zero to $10k/month as fast as possible",
    bold: "Zero to $10k/month",
  },
  {
    id: 3,
    text: "Master the skills you need to maximize your income",
    bold: "maximize your income",
  },
];

function getStyledText(fullText: string, boldWord: string) {
  if (!boldWord || !fullText.includes(boldWord)) return fullText;

  const parts = fullText.split(boldWord);

  return (
    <>
      <span className="text-gray-400">{parts[0]}</span>
      <span className="text-white font-medium font-satoshi">{boldWord}</span>
      <span className="text-gray-400">{parts[1]}</span>
    </>
  );
}
