import React from "react";
import Logo from "../assets/logo1.png";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiBarChartAlt } from "react-icons/bi";

const Hero = () => {
  return (
    <section
      className="py-[150px] flex justify-center items-center min-h-screen w-full hero"
      id="hero"
    >
      <div className="container grid lg:grid-cols-2 justify-between items-center gap-24">
        <article className="flex flex-col gap-7">
          <h1 className="text-6xl text-white font-bold hero-header">
            Welcome to raptor cat
          </h1>
          <p className="text-white text-xl">
            raptor cat, the sacred Egyptian cat. This mysterious feline was
            known for her stunning black coat and her piercing blue eyes that
            glowed fiercely in the night. raptor Mau was not an ordinary cat,
            she was believed to be a sacred goddess and was worshipped by the
            Egyptians.
          </p>
          <a
            href=""
            className="text-white w-max rounded-md grade px-8 font-bold capitalize text-xl py-3"
          >
            live chart
          </a>

          <div className="flex gap-3 items-center">
            <a href="" className="text-4xl hover:text-white">
              <FaTelegramPlane />
            </a>
            <a href="" className="text-4xl hover:text-white">
              <AiFillTwitterCircle />
            </a>
            <a href="" className="text-4xl hover:text-white">
              <BiBarChartAlt />
            </a>
          </div>
        </article>
        <img src={Logo} alt="" className="rounded-full w-[25rem]" />
      </div>
    </section>
  );
};

export default Hero;
