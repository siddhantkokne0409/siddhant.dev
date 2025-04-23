"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiLangchain } from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquam architecto, perspiciatis magni eius vitae explicabo necessitatibus blanditiis illo.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Siddhant Kokane",
    },
    {
      fieldName: "Email",
      fieldValue: "koknesiddhant3@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

const experience = {
  icon: "/assests/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum, debitis veniam ipsam dicta ullam",
  items: [
    {
      company: "Kapil Engineering",
      position: "Full Stack Developer Intern",
      duration: "Jan 2025 - Present",
    },
  ],
};

const education = {
  icon: "/assests/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum, debitis veniam ipsam dicta ullam reiciendis odio excepturi modi quaerat  dolorum architecto consectetur.",
  items: [
    {
      institution: "Vishwakarma Institute of Technology",
      stream: "Artificial Intelligence and Data Science",
      duration: "2022 - 2025",
    },
    {
      institution: "Online Course",
      stream: "Front End Development",
      duration: "2024",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquam architecto, perspiciatis magni eius vitae explicabo necessitatibus blanditiis illo.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiLangchain />,
      name: "LangChain",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      {/* <div className="mx-auto w-full max-w-[250px] xl:max-w-[700px]"> */}
      <div className="mx-auto w-full max-w-[250px] sm:max-w-[600px] xl:max-w-[1000px]">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="max-h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        // <li
                        //   key={index}
                        //   className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1"
                        // >
                        <li
                          key={index}
                          className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1 text-center xl:text-left"
                        >
                          <span className="text-accent lg:text-left">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center xl:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-2 lg:text-left">
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent lg:text-left">
                            {item.duration}
                          </span>
                          <h3 className="text-lg max-w-[260px] min-h-[40px] text-center lg:text-left">
                            {item.stream}
                          </h3>
                          <div className="flex items-center gap-2 lg:text-left">
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left mb-7">
                <h3 className="text-3xl font-bold ">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-4xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="text-sm capitalize font-semibold">
                            {skill.name}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-3xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 text-center xl:grid-cols-2 gap-y-4 gap-x-5 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <div key={index}>
                        <li className="flex items-center justify-center xl:justify-start gap-4 text-white/60">
                          <span className="text-accent text-left">
                            {item.fieldName}:
                          </span>
                          <span className="text-lg text-white">
                            {item.fieldValue}
                          </span>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
