import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import NavButton from "./ui/NavButton";

const Header = () => {
  return (
    <header className="py-1 my-8  fixed top-0 w-full bg-secondary z-10 ">
      <div className="container mx-auto flex  items-center  justify-between ">
        {/* logo */}
        <div>
          <Link href={"/"}>
            <h1 className="text-2xl text-primary font-semibold tracking-tighter">
              Dev.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-yellow-300 to-red-300">
                Et
              </span>
            </h1>
          </Link>
        </div>
        {/* links */}
        <div>
          {/* Big Nav */}
          <div className="hidden lg:flex items-center">
            <Nav />
          </div>
          {/* Mobile Nav */}
          <div className="flex lg:hidden">
            <MobileNav />
          </div>
        </div>
        <div className="hidden lg:flex">
          <NavButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
