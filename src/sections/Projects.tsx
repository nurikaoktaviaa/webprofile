import darkSaasLandingPage from "@/assets/images/NetmonitrWeb-Foto.png";
import lightSaasLandingPage from "@/assets/images/OmadataWeb-Foto.png";
import aiStartupLandingPage from "@/assets/images/WhatsappPhone-Foto.png";
import Image from 'next/image';
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";


const portfolioProjects = [
  {
    company: "System Analyst",
    year: "2024",
    title: "Netmonitr Website",
    results: [
      { title: "Creating the flow and structure of the website system." },
      { title: "Creating BSD, FSD, and User Guide documents for the website." },
      { title: "Creating the website ERD (Entity Relationship Diagram)." },
    ],
    link: "https://drive.google.com/drive/folders/1ik64aMZLSihYq_n4amSpRXOfzzNdD8ON?usp=sharing",
    image: darkSaasLandingPage,
  },
  {
    company: "System Analyst",
    year: "2024",
    title: "Omadata Website",
    results: [
      { title: "Creating the flow and structure of the website system." },
      { title: "Creating BSD, FSD, and User Guide documents for the website." },
      { title: "Creating the website ERD (Entity Relationship Diagram)." },
      { title: "Designing mockups for the website." },
      { title: "Creating UAT (User Acceptance Testing) scenarios." },
      { title: "Creating functional scenario test cases." },
    ],
    link: "https://drive.google.com/drive/folders/12DsmeZwzNKfm34B_Ae-5wSF2JwMvnaD-?usp=sharing",
    image: lightSaasLandingPage,
  },
  {
    company: "UX Researcher",
    year: "2024",
    title: "WhatsApp for Disabilities",
    results: [
      { title: "Researched WhatsApp usability for cerebral palsy." },
      { title: "improving accessibility in the WhatsApp Disability version." },
      { title: "Designed in Figma, developed with React Native android." },
    ],
    link: "https://drive.google.com/drive/folders/12DrJUTqlLvRjTl9-cVqZJ7OxkBa87Uxm?usp=sharing",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center bg-clip-text">The Project Results</p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">Several projects that I have worked on.</p>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map(project => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0
              overflow-hidden after:z-10 after:content-[''] after:absolute
              after:inset-0 after:outline-2 after:outline after:-outline-offset-2
              after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10
              after:pointer-events-none"
            >
              <div className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}>
              </div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div>
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex
                    gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span> {project.company} </span>
                    <span>&bull;</span>
                    <span> {project.year} </span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gsp-4 mt-4 md:mt-5">{project.results.map(result => (
                    <li className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6" />
                      <span> {result.title} </span>
                    </li>
                  ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6
                      rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 mb-6">
                      <span> Learn More </span>
                      <ArrowUpRightIcon className="size-4 " />
                    </button>
                  </a>
                </div>
                <Image src={project.image} alt={project.title}
                  className="mt-8 -mb-4 md:-mb-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

