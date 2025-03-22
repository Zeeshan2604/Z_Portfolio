"use client";
import React from "react";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  variant?: "purple" | "blue" | "green" | "pink";
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  children,
  variant = "purple",
  className = "",
}) => {
  // Define gradient variations
  const gradients = {
    purple: {
      background: "radial-gradient(circle at top right, rgba(203, 172, 249, 0.15), transparent 40%)",
      sparkles: "rgba(203, 172, 249, 0.7)",
    },
    blue: {
      background: "radial-gradient(circle at bottom left, rgba(125, 211, 252, 0.15), transparent 40%)",
      sparkles: "rgba(125, 211, 252, 0.7)",
    },
    green: {
      background: "radial-gradient(circle at center right, rgba(134, 239, 172, 0.15), transparent 40%)",
      sparkles: "rgba(134, 239, 172, 0.7)",
    },
    pink: {
      background: "radial-gradient(circle at top left, rgba(249, 168, 212, 0.15), transparent 40%)",
      sparkles: "rgba(249, 168, 212, 0.7)",
    },
  };

  const selectedGradient = gradients[variant];

  return (
    <div 
      className={`relative w-full overflow-hidden ${className}`}
      style={{ 
        background: "#04071D",
        backgroundImage: selectedGradient.background,
      }}
    >
      {/* Animated sparkles */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            suppressHydrationWarning
            style={{
              backgroundColor: selectedGradient.sparkles,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Floating lines - creates a subtle tech/grid effect */}
      <div className="absolute inset-0 w-full h-full opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] w-full"
            suppressHydrationWarning
            style={{
              top: `${(i + 1) * 20}%`,
              backgroundColor: selectedGradient.sparkles,
              transform: `translateY(${Math.sin(i) * 10}px)`,
              animation: `float ${3 + i}s ease-in-out infinite alternate`,
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-full"
            suppressHydrationWarning
            style={{
              left: `${(i + 1) * 20}%`,
              backgroundColor: selectedGradient.sparkles,
              transform: `translateX(${Math.sin(i) * 10}px)`,
              animation: `float ${3 + i}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}; 