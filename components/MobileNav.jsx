"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        onClick={() => setOpen(true)}
        className="flex justify-center items-center"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetTitle></SheetTitle>
      <SheetContent className={"flex flex-col"}>
        <div className="mt-32 mb-16 text-center text-2xl">
          <Link href={"/"} onClick={() => setOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Siddhant<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                onClick={() => setOpen(false)}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } capitalize font-medium hover:text-accent transition-all text-xl `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
