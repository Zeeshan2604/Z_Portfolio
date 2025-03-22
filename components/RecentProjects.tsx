"use client";
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";
import { SectionBox } from "./AnimatedBackground";

const RecentProjects = () => {
  return (
    <SectionBox variant="green">
      <div 
        className="container mx-auto px-2 py-16 rounded-3xl border-2 border-purple-500/20 hover:border-purple-500/40 group/bento hover:shadow-xl transition-all duration-300 shadow-input dark:shadow-none justify-between flex flex-col space-y-4"
        id="projects"
        style={{
          boxShadow: "0 0 15px rgba(203, 172, 249, 0.1)",
        }}
      >
        <h1 className="heading mb-1 ">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-8 gap-x-10">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className="sm:h-[45rem] h-[26rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[calc(50%-2rem)] w-full mb-8"
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[550px] w-[70vw] overflow-hidden sm:h-[40vh] h-[25vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ 
                      backgroundColor: "#13162D",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                    }}
                  >
                    <img src="/bg.png" alt="bgimg" className="opacity-70" />
                  </div>
                  {(title === "HireX" || title === "HotWheelsX" || title === "Tiera E-Commerce Website") ? (
                    <video 
                      src={
                        title === "HireX" 
                          ? "/hireX.webm" 
                          : title === "HotWheelsX" 
                            ? "/hotwheels_clip.webm" 
                            : "/tierra-clip.webm"
                      } 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="z-10 absolute transition-all duration-500 hover:transform hover:translate-y-[-10px]"
                      style={{ 
                        width: "100%", 
                        height: "auto",
                        objectFit: "contain",
                        borderRadius: "8px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)" 
                      }}
                    />
                  ) : (
                    <img src={img} alt="cover" className="z-10 absolute transition-all duration-500 hover:transform hover:translate-y-[-10px]" />
                  )}
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center transform hover:scale-110 transition-transform duration-200"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center group">
                    <p className="flex lg:text-xl md:text-xs text-sm group-hover:text-purple transition-colors duration-300">Live</p>
                    <FaLocationArrow className="ms-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </SectionBox>
  );
};

export default RecentProjects;
