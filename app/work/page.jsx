"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Kapil Engineering",
    title: "Project One",
    description: "This is a full-stack web application designed to streamline business operations, focusing on customer billing, payment tracking, and owner-side purchase management.",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "Tailwind CSS" }],
    image: "/Kapil.png",
    live: "",
    github: "https://github.com",
  },
  {
    num: "02",
    category: "SK EState",
    title: "Project Two",
    description: "This is a dynamic full-stack real estate web platform that allows users to rent, sell, or browse properties with ease. ",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "FireBase" }],
    image: "/skestate.png",
    live: "",
    github: "https://github.com",
  },
  {
    num: "03",
    category: "PrepMate",
    title: "Project Three",
    description: "PrepMate is an interactive AI-based web platform that helps users practice mock interviews in a realistic and adaptive environment. ",
    stack: [{ name: "Next.js" }, { name: "Vapi AI" }, { name: "Google Gemini" }],
    image: "/prepmate.png",
    live: "",
    github: "https://github.com",
  },
  {
    num: "04",
    category: "WorkWise",
    title: "Project Three",
    description: "Workwise is an application which promotes healthier work habits and prevents burnout, the platform allows users to plan, track, and get reminded about breaks throughout their day.",
    stack: [{ name: "Python" }, { name: "Tkinter" }, { name: "MediaPipe" }],
    image: "/workwise.png",
    live: "",
    github: "https://github.com",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center px-3 py-12 xl:px-48 xl:py-16"
    >
      <div className="container px-[30px] mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%] ">
              <div className="text-7xl leading-none font-extrabold  text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>

              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="text-xl text-accent font-medium capitalize"
                  >
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4 ">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsGithub className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="relative group h-[460px] group flex justify-center items-center bg-pink-50/20 rounded-2xl">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-2xl"></div>
                      {/* <div>
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div> */}
                      <div className="relative w-full h-full rounded-2xl">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-fit rounded-2xl" // Optional: round corners
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority // optional for faster load
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
