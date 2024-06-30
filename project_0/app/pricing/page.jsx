import Card from "./card";

const page = () => {
  return (
    <section
      className="mt-24 p-32 bg-gradient-to-br from-cyan-600 to-blue-500 text-secondary flex items-center justify-center"
      id="price"
    >
      <div className="mx-auto">
        <Card />
      </div>
    </section>
  );
};

export default page;
