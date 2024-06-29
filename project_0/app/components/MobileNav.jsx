"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNav = () => {
  const links = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "services",
      link: "/placehold1",
    },
    {
      name: "work",
      link: "/placehold3",
    },
  ];

  let pathName = usePathname();

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <CiMenuFries className="text-[32px] text-primary items-center justify-center" />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col h-full gap-8 justify-center">
            {/* logo */}
            <div className="my-5 py-0">
              <Image
                src={"/DigitalWorld.png"}
                alt="logo"
                width={300}
                height={300}
                objectFit="contain"
                priority={true}
              />
            </div>
            {/* links */}
            <div className="flex flex-col gap-8 justify-center items-center">
              {links.map((link, index) => {
                return (
                  <Link
                    href={link.link}
                    key={index}
                    className={`${
                      link.link === pathName &&
                      "text-secondary  border-b-4 border-black"
                    } capitalize font-extrabold text-3xl transition-all hover:tracking-wider`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
