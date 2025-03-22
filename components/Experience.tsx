import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { SectionBox } from "./AnimatedBackground";
import { cn } from "@/lib/utils";

const Experience = () => {
  return (
    <SectionBox variant="purple">
      <div className={cn(
        "container mx-auto px-6 py-16   rounded-3xl border-2 border-purple-500/20 hover:border-purple-500/40 group/bento hover:shadow-xl transition-all duration-300 shadow-input dark:shadow-none justify-between flex flex-col space-y-4"
        )} 
        style={{
          boxShadow: "0 0 15px rgba(203, 172, 249, 0.1)",
        }}>
        <h1 className="heading mb-12">
          My work<span className="text-purple"> experience</span>
        </h1>

        <div className="w-full mt-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgba(4,7,29,0.7)",
                backdropFilter: "blur(8px)",
                borderRadius: `calc(1.75rem* 0.96)`,
                
              }}
              className="flex-1 text-black dark:text-white border-purple/30 hover:border-purple/60 transition-all duration-300"
            >
              <div className="flex flex-col items-center p-6 gap-4">
                <div className="w-20 h-20 rounded-full bg-black/30 flex items-center justify-center p-2">
                  <img
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className="w-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-xl md:text-2xl font-bold mb-2">
                    {card.title}
                  </h1>
                  <p className="text-white/80 font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </SectionBox>
  );
};

export default Experience;