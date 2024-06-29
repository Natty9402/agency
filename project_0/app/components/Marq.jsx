import React from "react";
import Marquee from "react-fast-marquee";

const Marq = () => {
  return (
    <div className="h-2 ">
      <Marquee autoFill={true} speed={150}>
        <h1 className="m-auto text-3xl lg:text-9xl overflow-hidden text-secondary">
          Transform Your Business Online{" "}
          <span className="text-secondary">Big Impact, Small Investment!</span>{" "}
          <span className=" text-secondary p-3 mx-4 h-full rounded items-center">
            {" "}
            ድህረ ገጽ ከፉክክር እንዲቀድሙ ያደርግዎታል !
          </span>
        </h1>
      </Marquee>
    </div>
  );
};

export default Marq;
