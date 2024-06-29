const Info = () => {
  let infos = [
    {
      title: "Elegance",
      desc: "Our designs combine beauty and functionality, ensuring your website captivates and engages visitors with a polished, professional look.",
      img: "/elegant.jpg",
    },
    {
      title: "Advanced Technology",
      desc: "We harness cutting-edge technology to build high-performance, secure, and scalable websites that give you a competitive edge.",
      img: "/tech.jpg",
    },
    {
      title: "Tailored Solutions",
      desc: "We create bespoke solutions tailored to your business's unique needs, ensuring a personalized and impactful online presence.",
      img: "/tailored.jpg",
    },
    {
      title: "Exceptional Support",
      desc: "Our dedicated support team provides round-the-clock assistance, ensuring a seamless and stress-free experience from project inception to completion.",
      img: "/support.jpg",
    },
    {
      title: "Unbeatable Value",
      desc: "We offer the best pricing in Ethiopia, delivering exceptional quality and performance at a cost that fits your budget, ensuring maximum return on your investment.",
      img: "/price.jpg",
    },
  ];

  return (
    <div className="w-screen   bg-primary text-secondary p-5">
      <div className=" my-12 ">
        {/* header text */}
        <div className="flex flex-col items-start  justify-start lg:text-left p-5 mx-10 border-b border-secondary">
          <h1
            className="text-2xl lg:text-4xl  text-left capitalize my-5 font-bold"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Why our service is best in town?
          </h1>
          <p
            data-aos="fade-up text-sm lg:text-2xl font:semi-bold"
            data-aos-delay="250"
          >
            Our web agency delivers top-notch, innovative websites tailored to
            your needs.{" "}
            <span className="p-2 bg-secondary text-primary rounded-full">
              Trust us to elevate your brand and see why we're the best in
              Ethiopia.
            </span>
          </p>
        </div>
        {/* infos */}

        <div>
          {infos.map((info, index) => (
            <div
              className=" mx-auto border-b-4 border-secondary p-10 lg:p-32 relative group"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index + 1} * 500`}
              id={`a${index + 1}`}
            >
              {/* backround-image */}
              <div
                className="absolute inset-0 bg-cover -z-10 bg-center bg-no-repeat transition-opacity duration-300 opacity-50 lg:opacity-0 group-hover:opacity-40 "
                style={{ backgroundImage: `url(${info.img})` }}
              ></div>
              <div className="flex flex-col  lg:p-5 items-start justify-center  lg:text-left  lg:mx-10 text-left">
                <h1 className="text-2xl lg:text-6xl text-left lg:my-2 font-bold">
                  {info.title}
                </h1>
                <p className="text-1xl lg:text-2xl lg:my-3 font-extrabold">
                  {info.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
