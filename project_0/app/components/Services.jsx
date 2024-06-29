import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Services = () => {
  const service = [
    {
      name: "Web Design",
      image: "/1.png",
      desc: "We craft custom web solutions tailored to your business needs.",
    },
    {
      name: "Redesigning",
      image: "/2.png",
      desc: "We Revamp your website for a fresh, modern look.",
    },
    {
      name: "Web Hosting",
      image: "/3.png",
      desc: "Reliable web hosting to keep your site running smoothly.",
    },
    {
      name: "AI Chat-Bot",
      image: "/4.png",
      desc: "Integrate AI chatbots for seamless customer interactions and support.",
    },
  ];

  return (
    <section className="my-24   p-2 md:p-8 lg:p12 mx-10 rounded  text-primary">
      <div className="container mx-0 lg:mx-auto flex flex-col gap-8 justify-center items-center">
        <h1 className="text-2xl lg:text-6xl font-semibold text-center">
          Our Services
        </h1>
        <Separator className=" my-6 bg-gradient-to-br from-cyan-500 to-blue-400 h-0.5 w-40" />
      </div>
      <p
        className="text-center text-1xl lg:text-2xl xl:text-3xl py-5 my-6 text-third mx-10"
        data-aos="fade-left"
      >
        We offer wide variety of services for our customers and provide amazing
        support after the website development process
      </p>
      <div className="flex flex-wrap   mx-auto gap-20 items-center justify-center my-10 ">
        {service.map((s, index) => {
          return (
            <div
              key={index}
              className="my-8 mx-auto flex flex-col justify-between  items-center p-6  w-80 rounded-md hover:bg-primary hover:text-secondary transition-all "
              data-aos="fade-right"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div className="flex-grow flex justify-center items-center">
                <Image src={s.image} width={200} height={100} unoptimized />
              </div>
              <div className="flex-grow flex flex-col items-center mx-auto">
                <h1 className="my-4 text-2xl  xl:text-3xl">{s.name}</h1>
                <h3 className="text-center text-1xl xl:text-1.5xl text-third ">
                  {s.desc}
                </h3>
                <button className="text-center my-4   p-3 font-bold rounded-lg bg-gradient-to-br from-cyan-600 to-blue-400 hover:text-secondary text-primary hover:bg-secondary  transition-all">
                  Get Service
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
