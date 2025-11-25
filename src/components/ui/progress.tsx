import React from "react";

// Component to represent the circular indicator/dot
const ProgressDot: React.FC<{ position: "top" | "middle" | "bottom" }> = ({
  position,
}) => {
  // Define position classes based on the prop
  let positionClasses = "";
  if (position === "top") {
    // Place at the top of the line
    positionClasses = "top-20";
  } else if (position === "middle") {
    // Place in the vertical center, and use translate-y-1/2 to account for dot height
    positionClasses = "top-1/2 -translate-y-1/2";
  } else if (position === "bottom") {
    // Place at the bottom of the line
    positionClasses = "-bottom-2";
  }

  const commonClasses =
    "absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#f2bb35] shadow-lg";

  // Combine classes
  return <div className={`${commonClasses} ${positionClasses}`}></div>;
};

const Progress = () => {
  return (
    // Main container centered on a dark background (assumed from the image)
    <div className="flex justify-center items-center min-h-screen  text-white">
      {/* This is the progress bar container. 
              - relative: crucial for positioning the dots absolutely within it.
            */}
      <div className="relative">
        <div className="w-[3px] h-[500px] bg-linear-to-b from-transparent via-[#ffffff] to-transparent"></div>

        {/* --- Indicator Dots --- */}

        <ProgressDot position="top" />

        <div className="">
          <ProgressDot position="middle" />
        </div>

        <div>
          <ProgressDot position="bottom" />
        </div>
      </div>
    </div>
  );
};

export default Progress;
