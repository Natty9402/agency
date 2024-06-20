import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-6 lg:py-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <div>
          <Link href={"/"}>
            <Image
              src={"/DigitalWorld.svg"}
              height={100}
              width={100}
              className="rounded-full"
            />
          </Link>
        </div>
        {/* links */}
        <div>
          {/* Big Nav */}
          <div className="hidden lg:flex">
            <Nav />
          </div>
          {/* Mobile Nav */}
          <div className="flex lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
