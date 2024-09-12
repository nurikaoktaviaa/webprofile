import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/foto-rika.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/chrome.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";  // Ubah menjadi ToolboxItems
import mapImage from "@/assets/images/map-sidoarjo.png";
import smileMemoji from "@/assets/images/memoji-avatar-4.png";

const toolboxItemsData = [  // Ubah nama variabel array
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Figma",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Dbvear",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  { 
    title: "System Analysis", 
    emoji: "📌",
    left: "10%",
    top: "10%",
  },
  { 
    title: "Creating Test Scenarios", 
    emoji: "📌" ,
    left: "40%",
    top: "30%",
  },
  { 
    title: "Designing UI", 
    emoji: "📌" ,
    left: "70%",
    top: "50%",
  },
  { 
    title: "User Experience", 
    emoji: "📌" ,
    left: "20%",
    top: "70%",
  },
  { 
    title: "Frontend Developer", 
    emoji: "📌" ,
    left: "50%",
    top: "80%",
  },
  { 
    title: "Creating ERD", 
    emoji: "📌" ,
    left: "80%",
    top: "20%",
  },
  { 
    title: "Quality Assurance", 
    emoji: "📌" ,
    left: "50%",
    top: "80%",
  },
  { 
    title: "Technical Writer", 
    emoji: "📌" ,
    left: "80%",
    top: "20%",
  },
];

export const AboutSection = () => {
  return (
    <div id="about" className="py-24 mt-20">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspired me"/>

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <Card className="h-[320px] md:col-span-2">
            <CardHeader title="About Me" description="I’m Nur Ika Aini Oktavia, a graduate of Information Systems Telkom University." />
            <div className="w-40 mx-auto mt-2">
              <Image src={bookImage} alt="Book Cover"/>
            </div>
          </Card>
          
          <Card className="h-[320px] p-0 md:col-span-3">
            <CardHeader 
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItemsData} className="mt-6"/>  
            <ToolboxItems 
              items={toolboxItemsData} 
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
              /> 
          </Card>
          </div>
          <Card className="h-[320px] p-0 relative">
            <CardHeader title="My Experience" description="Take a deeper look at my experiences from the past few months, where I’ve worked on various projects and enhanced my skills." className="px-6 py-6"/>
            <div className="relative flex-1 flex flex-wrap gap-4">
              {hobbies.map(hobby => (
                <div 
                  key={hobby.title} 
                  className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                >
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="h-[320px] p-0 relative">
            <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-left-top"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <Image src={smileMemoji} alt="Smiling Memoji" className="size-20" />
            </div>
          </Card>
        </div>
      
    </div>
    </div>
  );
};
