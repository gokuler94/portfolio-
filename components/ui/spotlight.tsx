"use client";
import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "../../lib/utils";

export const Spotlight = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute -inset-px z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="h-full w-full [mask-image:radial-gradient(350px_at_center,white,transparent)]"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${fill || "white"},
              transparent 80%
            )
          `,
        }}
      />
    </div>
  );
};
