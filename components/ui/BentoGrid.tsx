"use client";
import React, { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from 'next/dynamic';
import { cn } from "@/lib/utils";

// Dynamically import client-side components
const BackgroundGradientAnimation = dynamic(() => import('./Gradientbg').then(mod => mod.BackgroundGradientAnimation), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#04071d]"></div>
});
const GridGlobe = dynamic(() => import('./GridGlobe'), { 
  ssr: false,
  loading: () => <div className="w-full h-full"></div>
});
const SparklesCore = dynamic(() => import('./Sparkles').then(mod => mod.SparklesCore), { 
  ssr: false,
  loading: () => <div className="w-full h-full"></div>
});
const LitupButton = dynamic(() => import('./LitupButton'), { 
  ssr: false,
  loading: () => <div className="w-[120px] h-[40px] bg-blue-600 rounded-md"></div>
});
const MagicButton = dynamic(() => import('./MagicButton'), { 
  ssr: false,
  loading: () => <div className="w-[200px] h-[40px] bg-gray-700 rounded-md"></div>
});

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-6 lg:gap-3 mx-auto py-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined') {
      const text = "shaikh.zeeshan2604@gmail.com";
      navigator.clipboard.writeText(text);
      setCopied(true);
      
      // Reset the copied state after 3 seconds
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };

  return (
    <>
      <div
        className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl border-2 border-purple-500/20 hover:border-purple-500/40 group/bento hover:shadow-xl transition-all duration-300 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
          className
        )}
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          boxShadow: "0 0 15px rgba(203, 172, 249, 0.1)",
        }}
      >
        <div className={`${id === 6 && "flex justify-center"} h-full`}>
          <div className="w-full h-full absolute">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center")}
              />
            )}
          </div>
          <div
            className={`absolute right-0 -bottom-5`}
          >
            {spareImg && (
              <>
                <img
                  src={spareImg}
                  alt={spareImg}
                  className="object-cover object-center w-full h-full"
                />
              </>
            )}
          </div>
          {id === 6 && mounted && (
            <BackgroundGradientAnimation>
              <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
            </BackgroundGradientAnimation>
          )}

          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative h-full flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            {description && (
              <div className={`font-sans font-extralight text-sm text-[#C1C2D3] z-10 ${id === 6 ? 'lg:max-w-full md:max-w-full lg:text-base md:text-sm' : 'md:max-w-32 md:text-xs lg:text-base'}`}>
                {description}
              </div>
            )}

            <div
              className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 ${id === 6 ? 'mt-2' : ''}`}
            >
              {title}
            </div>

            {/* Create proper spacing for the components */}
            <div className={`${id === 2 || id === 3 ? 'mt-auto' : ''} flex-1`}>
              {id === 2 && mounted && <GridGlobe />}

              {id === 3 && mounted && (
                <>
                  <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                  />
                </>
              )}
            </div>

            {id === 3 && mounted && (
              <a
                href="https://drive.google.com/file/d/1c6KelO_yKB8gJIE4vCAabn_ITDY2E6kb/view?usp=drive_link"
                target="_blank"
                className="z-10 mt-4"
              >
                <div className="z-10">
                  <LitupButton name="View Resume" />
                </div>
              </a>
            )}
            
            {id === 6 && mounted && (
              <div className="mt-5 relative">
                {copied && (
                  <div className="absolute -top-16 left-0 right-0 text-center bg-green-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform translate-y-0 opacity-100 z-20">
                    Email copied to clipboard!
                  </div>
                )}
                
                <MagicButton
                  title={copied ? "Email has been copied!" : "Copy my email address"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
