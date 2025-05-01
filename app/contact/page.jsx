"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState } from "react";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "koknesiddhant3@gmail.com",
  },

  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "India",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (res.ok) {
      toast("Message sent!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } else {
      toast(result.message);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center px-4 py-12 xl:px-48 xl:py-6"
    >
      <div className="mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[48%] order-2 xl:order-none ">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-8 bg-[#27272c] rounded-xl xl:h-[560px]"
            >
              <h3 className="text-2xl text-accent">Let's work together</h3>
              <p className="text-sm text-white/60">
                I am available to work on innovative and impactful projects. If
                you have a proposal, inquiry, or would like to discuss your
                development needs, please complete the form below. I will
                respond to your message at the earliest convenience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <Select onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Website-development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Software-development">
                      Software Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Type your message here.."
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <Button size="sm" className="max-w-40 min-h-12 cursor-pointer">
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[50px] h-[50px] xl:w-[62px] xl:h-[62px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[24px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-base xl:text-lg">
                        {item.title}
                      </p>
                      <h3 className="text-base xl:text-lg">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
