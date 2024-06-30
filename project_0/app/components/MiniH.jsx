const MiniH = () => {
  const links = [
    {
      title: "contact us",
      desc: "If you want to know more information or have any questions, you can contact us. We will be happy to help!",
      a: "fade-up-right",
      d: "100",
    },
    {
      title: "we are looking for talent",
      desc: "Our agency continues to grow continuously, and we are always on the lookout for new talent. Contact us!",
      a: "fade-up-left",
      d: "200",
    },
  ];

  return (
    <div className="mx-auto p-10 ">
      <div className="my-12 flex flex-col lg:flex-row gap-10">
        {links.map((link, index) => {
          return (
            <div
              className="rounded-lg bg-primary text-secondary p-5 lg:p-28 hover:bg-gradient-to-br from-cyan-400 to-blue-600 hover:text-primary transition-colors"
              key={index}
              data-aos={link.a}
              data-aos-delay={link.d}
            >
              <h1 className="text-2xl lg:text-4xl mb-15 capitalize font-extrabold">
                {link.title}
              </h1>
              <p className="text-sm lg:text-1xl mt-5">{link.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MiniH;
