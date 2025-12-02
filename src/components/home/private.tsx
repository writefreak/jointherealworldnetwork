import React from "react";

const Private = () => {
  return (
    <div>
      <div className="flex flex-col gap-24">
        {details.map((d) => (
          <div key={d.id} className="flex flex-col gap-10">
            {/* IMAGE + TITLE */}
            <div className="flex items-center gap-8">
              <div className="h-21 w-21">
                <img
                  src={d.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="text-[40px] font-satoshi font-semibold">
                {d.id === 2 ? (
                  <>
                    Access to
                    <br />
                    Multimillionaires
                  </>
                ) : (
                  d.title
                )}
              </h2>
            </div>

            {/* TICKS: each section gets its OWN ticks */}
            <div className="flex flex-col gap-6 pl-3">
              {(d.id === 1 ? privateTicks : millionaireTicks).map((t) => (
                <div key={t.id} className="flex  gap-8">
                  <img src="/tick.svg" alt="" className="" />

                  <h3 className="text-gray-400 text-[21px] leading-snug font-satoshi font-medium">
                    {getStyledText(t.slug, d.id)}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Private;
/* SECTION TITLES */
const details = [
  {
    id: 1,
    img: "/group.webp",
    title: "Private Network",
  },
  {
    id: 2,
    img: "/access.png",
    title: "Access to Multimillionaires",
  },
];

/* PRIVATE NETWORK TICKS */
const privateTicks = [
  {
    id: 1,
    slug: "Make like-minded friends on your journey",
    bold: "like-minded friends",
  },
  {
    id: 3,
    slug: "Master the skills you need to maximize your income",
    bold: "maximize your income",
  },
  {
    id: 2,
    slug: "Network with 100,000+ people",
    bold: "100,000+ people",
  },
];

/* ACCESS TO MULTIMILLIONAIRES TICKS */
const millionaireTicks = [
  {
    id: 1,
    slug: "Mentors are hyper-successful experts in their field",
    bold: "hyper-successful experts",
  },
  {
    id: 2,
    slug: "Get mentored every step of your journey",
    bold: "every step",
  },
  {
    id: 3,
    slug: "Master the key skills you need to maximize your income",
    bold: "maximize your income",
  },
];

/* 🔥 Helper that works for BOTH sections */
function getStyledText(text: string, sectionId: number) {
  const list = sectionId === 1 ? privateTicks : millionaireTicks;
  const item = list.find((i) => i.slug === text);

  if (!item || !item.bold) return text;

  // Special case: income split (same logic as your original)
  if (item.bold.includes("income")) {
    const parts = item.bold.split("income");
    const beforeIncome = parts[0];

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
