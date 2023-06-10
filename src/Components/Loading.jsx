import React from "react";
import Logo from "../assets/logo1.png";

const Loading = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="container flex justify-center items-center">
        <img src={Logo} alt="" className="animate-pulse md:w-[20rem]" />
      </div>
    </section>
  );
};

export default Loading;
