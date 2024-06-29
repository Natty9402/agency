import React from "react";
import { Phone } from "lucide-react";
import { Telegram, WhatsApp } from "@mui/icons-material";
import Link from "next/link";

const ContactSm = () => {
  return (
    <div className="fixed top-0 w-full flex items-center justify-center bg-primary text-secondary gap-20 z-10 ">
      <div className="flex gap-2 justify-center items-center">
        <Phone />
        <h1 className="tracking-tighter font-bold">09-00-42-44-37</h1>
      </div>

      {/* socials */}
      <div className="flex justify-evenly items-center gap-5">
        <Link href={"https://t.me/natty9402"} target="blank">
          <Telegram />
        </Link>
        <Link href={"/pricing"} target="blank">
          <WhatsApp />
        </Link>
      </div>
    </div>
  );
};

export default ContactSm;
