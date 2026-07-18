import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { SectionBox } from "./AnimatedBackground";
import { cn } from "@/lib/utils";

const borderDurations = [12000, 14000, 16000, 18000];

const Experience = () => {
  return (
    <SectionBox variant="purple">
      <div
        id="experience"
        className={cn(
          "container mx-auto px-6 py-16 rounded-3xl border-2 border-purple-500/20 hover:border-purple-500/40 group/bento hover:shadow-xl transition-all duration-300 shadow-input dark:shadow-none justify-between flex flex-col space-y-4"
        )}
        style={{
          boxShadow: "0 0 15px rgba(203, 172, 249, 0.1)",
        }}
      >
        <h1 className="heading mb-4">
          My work<span className="text-purple"> experience</span>
        </h1>
        <p className="text-white/60 text-center max-w-2xl mx-auto mb-8">
          From my current role at Yardi to internships — real-world experience
          building and improving software.
        </p>

        <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
          {workExperience.map((card, index) => (
            <Button
              key={card.id}
              duration={borderDurations[index % borderDurations.length]}
              borderRadius="1.75rem"
              style={{
                background: "rgba(4,7,29,0.7)",
                backdropFilter: "blur(8px)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-purple/30 hover:border-purple/60 transition-all duration-300 h-full"
            >
              <div className="flex flex-col items-start p-6 gap-4 h-full">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-black/30 flex items-center justify-center p-2">
                    <img
                      src={card.thumbnail}
                      alt={`${card.company} logo`}
                      className="w-full object-contain"
                    />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-purple text-sm font-semibold uppercase tracking-wide">
                      {card.period}
                    </p>
                    <h2 className="text-lg md:text-xl font-bold leading-tight">
                      {card.role}
                    </h2>
                    <p className="text-white/70 font-medium text-sm md:text-base">
                      {card.company}
                    </p>
                  </div>
                </div>
                <p className="text-white/80 font-medium text-sm md:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </SectionBox>
  );
};

export default Experience;
