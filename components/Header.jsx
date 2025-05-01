import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-6 text-white flex justify-center">
      <div className="container mx-auto flex justify-around items-center">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Siddhant<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          
          <Button className="cursor-pointer">
            <Link href={"/contact"}>Hire me</Link>
          </Button>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
