import React from "react";
import { AnimatedBackground } from "./ui/AnimatedBackground";

interface SectionBoxProps {
  children: React.ReactNode;
  variant?: "purple" | "blue" | "green" | "pink";
  className?: string;
}

export const SectionBox: React.FC<SectionBoxProps> = ({
  children,
  variant = "purple",
  className = "",
}) => {
  return (
    <div className={`relative rounded-3xl my-16 ${className}`}>
      {/* Gradient border effect */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-cyan-500/40 rounded-3xl blur-[2px]"></div>
      
      <AnimatedBackground variant={variant} className="rounded-3xl">
        {children}
      </AnimatedBackground>
    </div>
  );
}; 