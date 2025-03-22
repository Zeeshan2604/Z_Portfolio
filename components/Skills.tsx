"use client";
import { IconCloud } from "@/components/ui/IconCloud";
import { SectionBox } from "./AnimatedBackground";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  // "linux",
  // "postgresql",
  "vercel",
  // "supabase",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "mongodb",
  "python",
  
];

function Skills() {
  return (
    <SectionBox variant="blue">
      <div className={("container mx-auto px-6 py-16  rounded-3xl border-2 border-purple-100/20 hover:border-purple-100/40 group/bento hover:shadow-xl transition-all duration-300 shadow-input dark:shadow-none justify-between flex flex-col space-y-4"
        )} 
        style={{
          boxShadow: "0 0 15px rgba(203, 172, 249, 0.1)",
        }}>
        <h1 className="heading mb-8">
          Skills &amp;{" "}
          <span className="text-purple">Technologies</span>
        </h1>
        <div className="max-w-2xl mx-auto">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </SectionBox>
  );
}

export default Skills;
