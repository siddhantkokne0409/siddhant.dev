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

const projects = [
  {
    num: "01",
    category: "Web Development",
    title: "Project One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
    image: "/assests/work/one.png",
    live: "",
    github: "https://github.com",
  },
  {
    num: "02",
    category: "Web Development",
    title: "Project One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
    image: "/assests/work/one.png",
    live: "",
    github: "https://github.com",
  },
  {
    num: "03",
    category: "Web Development",
    title: "Project One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
    image: "/assests/work/one.png",
    live: "",
    github: "https://github.com",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 px-12 xl:px-48 xl:py-16"
    >
      <div className="container px-[30px] mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] ">
              <div className="text-7xl leading-none font-extrabold  text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
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
          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
