"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ProgressDotProps {
  position: "top" | "middle" | "bottom";
  y?: MotionValue<number>;
}

const ProgressDot: React.FC<ProgressDotProps> = ({ position, y }) => {
  let positionClasses = "";

  if (position === "top") {
    positionClasses = "top-2 md:top-15";
  }

  if (position === "middle") {
    positionClasses = "top-[526px]";
    // immediately after line
  }

  if (position === "bottom") {
    positionClasses = "top-[780px] md:top-[500px]";
  }

  const commonClasses =
    "absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#f2bb35] shadow-lg";

  return (
    <motion.div
      style={{ y: y ?? 0 }}
      className={`${commonClasses} ${positionClasses}`}
    />
  );
};

const Progress: React.FC = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const topY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const middleY = useTransform(scrollYProgress, [0, 1], [0, 420]);

  const bottomY = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div
      ref={containerRef}
      className="flex md:justify-center md:items-center min-h-screen text-white bg-[#0b0e13]"
    >
      <div className="relative">
        <div className="w-[3px] h-[800px] md:h-[500px] bg-linear-to-b from-transparent via-white to-transparent" />

        <ProgressDot position="top" y={topY} />
        <ProgressDot position="middle" y={middleY} />
        <ProgressDot position="bottom" y={bottomY} />
      </div>
    </div>
  );
};

export default Progress;
