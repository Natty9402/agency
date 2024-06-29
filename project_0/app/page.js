"use client";

import { useEffect } from "react";
import Image from "next/image";
import Marq from "./components/Marq";
import HeorButtons from "./components/ui/HeorButtons";
import "./custom_styles/hero.css";
import Services from "./components/Services";
import Aos from "aos";
import "aos/dist/aos.css";
import Info from "./components/info_sec/Info";

export default function Home() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <section className="my-24" id="hero">
        <div className="h-3 bg-gradient-to-b from-secondary to-transparent border-0" />
        <div className="container mx-0  md:mx-auto  mt-0 p-2 md:p-8 lg:p12">
          <div className="flex flex-col  items-center  justify-center ">
            <div className="flex flex-col font-bold  mx-10 my-5 items-center text-secondary text-center lg:text-left">
              <h1 className="text-3xl md:text-6xl font-semibold mb-6 text-center">
                Creative Website Design and Development in{" "}
              </h1>
              <div className="p-5 m-auto bg-black rounded-md">
                <h2 className="bg-gradient-to-r text-center bg-clip-text text-3xl md:text-9xl text-transparent from-green-700 via-yellow-500 to-red-700 rounded">
                  Ethiopia<span className="text-sm md:text-4xl">.</span>
                </h2>
              </div>
              <p className="text-1xl md:text-2xl my-5 tracking-wider text-center font-bold text-black ">
                Empower Your Business With Innovative Web Solutions
              </p>
              <HeorButtons />
            </div>
            {/* Image */}
          </div>
        </div>
        <div className="h-5 bg-gradient-to-b from-transparent to-secondary border-0" />
      </section>
      <Services />
      <Info />
    </>
  );
}
