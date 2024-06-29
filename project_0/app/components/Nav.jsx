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
      name: "pricing",
      link: "/pricing",
    },
    {
      name: "work",
      link: "/placehold3",
    },
  ];

  let pathName = usePathname();

  return (
    <div>
      <div className="flex gap-8 items-center text-2xl p-3  rounded">
        {links.map((link, index) => {
          return (
            <Link
              href={link.link}
              key={index}
              className={`${
                pathName === link.link &&
                "font-extrabold border-b-2 border-primary"
              } text-primary capitalize font-bold hover:border-b-2  transition-all`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
