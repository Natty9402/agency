import React from "react";
import Link from "next/link";

const HeorButtons = () => {
  return (
    <div className="my-10 mx-auto font-bold" id="btn">
      <Link href={"/"}>
        <button class="relative border-0 hover:border-sky-600 duration-500 group cursor-pointer hover:text-secondary text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold ">
          <div class="absolute z-0 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div class="absolute z-0 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-00"></div>
          <div class="absolute z-0 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
          <div class="absolute z-0 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
          <div class="absolute z-0 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
          <p class="z-0 text-1xl font-extrabold ">Go Online Now!</p>
        </button>
      </Link>
    </div>
  );
};

export default HeorButtons;
