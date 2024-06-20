"use client";

import React from "react";
import NavButton from "./ui/NavButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const links = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "placehold1",
      link: "/placehold1",
    },
    {
      name: "placehold2",
      link: "/placehold3",
    },
    {
      name: "vision",
      link: "/vision",
    },
    {
      name: "contact",
      link: "/contact",
    },
  ];

  let pathName = usePathname();

  return (
    <div>
      <div className="flex gap-8 items-center">
        {links.map((link, index) => {
          return (
            <Link
              href={link.link}
              key={index}
              className={`${
                pathName === link.link &&
                "text-orange-300 border-b-2 border-orange-300"
              } capitalize font-bold hover:text-orange-400 transition-all`}
            >
              {link.name}
            </Link>
          );
        })}
        <NavButton />
      </div>
    </div>
  );
};

export default Nav;
