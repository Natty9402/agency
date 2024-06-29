import { SeparatorVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const links = [
    {
      name: "Contact",
      Link: "/Contact",
    },
    {
      name: "Freelance Jobs",
      Link: "/Contact",
    },
    {
      name: "about",
      Link: "/",
    },
  ];

  return (
    <div className="flex justify-center  bg-third  rounded  mb-0 py-2  w-full">
      {/* logo */}
      <div className="mx-3 p-4">
        <Image src={"/DigitalWorld.png"} width={150} height={150} />
      </div>

      {/* texts */}
      <div className="">
        <div className="flex flex-col  justify-center items-center mt-5  gap-5">
          {links.map((link, index) => {
            return (
              <Link
                href={link.Link}
                key={index}
                className="capitalize text-secondary text-3xl font-bold hover:text-orange-800 transition-all"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      {/* socilas */}
      <div className="flex flex-col gap-8 items-center justify-center mx-20">
        <h1 className="text-4xl text-secondary">Contact</h1>
        <p className="text-2xl text-secondary">0900424437</p>
      </div>
    </div>
  );
};

export default Footer;
