import { Phone } from "lucide-react";
import { Telegram, WhatsApp } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-primary text-secondary p-6">
      <div className="mx-5 flex  justify-evenly gap-5">
        <Image src={"/CREATIVE.jpg"} height={60} width={100} />
        <div className="flex gap-2 justify-center items-center">
          <Phone />
          <h1 className="tracking-tighter font-bold">09-00-42-44-37</h1>
        </div>
        <div className="flex justify-evenly items-center gap-5">
          <Link
            href={"https://t.me/natty9402"}
            target="blank"
            className="text-2xl"
          >
            <Telegram />
          </Link>
          <Link href={"/pricing"} target="blank">
            <WhatsApp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
