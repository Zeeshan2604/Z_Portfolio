import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { SectionBox } from "./AnimatedBackground";

const Footer = () => {
  return (
    <SectionBox variant="purple">
      <footer 
        className="w-full relative rounded-3xl border-2 border-purple-500/20 hover:border-purple-500/40 group/bento hover:shadow-xl transition-all duration-300 shadow-input dark:shadow-none justify-between flex flex-col space-y-4"
        id="contact"
        style={{
          boxShadow: "0 0 15px rgba(203, 172, 249, 0.1)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Spotlight className="h-full" fill="grey" />
          <Spotlight className="left-full h-full" fill="violet" />
          <Spotlight className="left-80 h-full w-[50vw]" fill="#87CEEB" />
        </div>
        
        {/* background grid with increased opacity */}
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-40"
          />
        </div>

        <div className="flex flex-col items-center relative z-10 p-6 py-16">
          <h1 className="heading lg:max-w-[45vw] mb-8">
            Looking to bring <span className="text-purple">fresh ideas</span> to
            your next project?
          </h1>
          <p className="text-white/80 md:mt-8 my-8 text-center max-w-2xl text-lg">
            Ready to turn your vision into reality? With fresh skills and creative energy, 
            I'm eager to make your next digital project shine!
          </p>
          <a href="mailto:shaikh.zeeshan2604@gmail.com" className="mt-4">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          
          {/* Add social media links */}
          <div className="flex gap-6 mt-12">
            {socialMedia.map((item) => (
              <a 
                key={item.id} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black/30 p-3 rounded-full hover:bg-purple/30 transition-all duration-300 transform hover:scale-110 border-2 border-purple-500/20"
              >
                <img src={item.img} alt="social icon" className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </SectionBox>
  );
};

export default Footer;
