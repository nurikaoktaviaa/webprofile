import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import memojiImage from "@/assets/images/memoji-hijab.png"; 
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div id="home" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/* Background grain effect */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        {/* Hero rings */}
        <div className="block size-[0px] lg:size-[1020px] xl:size-[1020px] hero-ring"></div>
        <div className="block size-[0px] lg:size-[1020px] xl:size-[1020px] hero-ring"></div>
        <div className="block size-[0px] lg:size-[1220px] xl:size-[1220px] hero-ring"></div>
        <div className="block size-[600px] lg:size-[1420px] xl:size-[1420px] hero-ring"></div>
        <div className="block size-[800px] lg:size-[1620px] xl:size-[1620px] hero-ring"></div>
        <div className="block size-[1020px] lg:size-[1820px] xl:size-[1820px] hero-ring"></div>
        <div className="block size-[2020px] lg:size-[2020px] xl:size-[2020px] hero-ring"></div>
        
        {/* Hero orbit with stars */}
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>      

        {/* Hero orbit with faded stars */}
        <HeroOrbit size={430} rotation={-20}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/10" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180}>
          <SparkleIcon className="size-10 text-emerald-300/10" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={178}>
          <SparkleIcon className="size-14 text-emerald-300/10" />
        </HeroOrbit>
        <HeroOrbit size={900} rotation={0}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col items-center">
          {/* Image */}
          <Image
            src={memojiImage}
            className="size-[70px] md:size-[100px] lg:size-[100px]"
            alt="Person peeking from behind laptop"
          />
          {/* Profile Info */}
          <div className="bg-gray-950 border border-gray-800 px-2 py-1 md:px-4 md:py-1.5 inline-flex items-center gap-2 md:gap-4 rounded-lg">
            <div className="bg-green-500 size-2 md:size-2.5 rounded-full"></div>
            <div className="text-xs md:text-sm lg:text-base font-medium text-center whitespace-nowrap">
              Nur Ika Aini Oktavia | Experienced System Analyst
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="max-w-lg lg:max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center mt-8 tracking-wide">
            Crafting Insightful Digital Solutions
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in analyzing systems, designing intuitive user experiences,
            and ensuring high-quality software applications.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          {/* Collaborate Button as a Link */}
          <a 
            href="https://www.linkedin.com/in/nur-ika-aini-oktavia-420a79215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl text-white hover:text-emerald-300 transition-colors relative z-20"
          >
            <span>👋</span>
            <span className="font-semibold">Let's Collaborate</span>
          </a>

          {/* More Information Button */}
          <a href="#projects"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-20"
          >
            <span className="font-semibold">More Information</span>
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
