import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import NavButton from "./ui/NavButton";

const Header = () => {
  return (
    <header className="py-1 my-8  fixed top-0 w-screen bg-secondary z-10 ">
      <div className="container mx-auto flex  items-center  justify-between ">
        {/* logo */}
        <div>
          <Link href={"/"}>
            <Image
              src={"/CREATIVE.png"}
              height={70}
              width={70}
              className="rounded-full bg-gradient-to-br from-cyan-500 to-blue-500"
            />
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
