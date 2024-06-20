import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="mx-auto">
        <Link href={"/"}>hola</Link>
        <h1 className="text-green-300">Test</h1>
      </div>
    </header>
  );
};

export default Header;
