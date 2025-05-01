"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { animate, motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "We create responsive, user-friendly websites — from sleek landing pages to dynamic web apps — using robust frontend and backend technologies.",
    href: "",
  },
  {
    num: "02",
    title: "Software Development",
    description:
      "We develop custom software solutions that streamline workflows, enhance efficiency, and solve real-world business challenges.",
    href: "",
  },
  {
    num: "03",
    title: "AI Development",
    description:
      "We build AI-powered solutions that automate tasks, extract insights from data, and enable intelligent decision-making.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 px-12 xl:px-52 xl:py-10">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl font-extrabold   group-hover:text-[#00ff99] transition-all duration-500 ease-in-out">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[40px] h-[40px]  rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
