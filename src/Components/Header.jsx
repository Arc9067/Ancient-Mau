import React from "react";
import Logo from "../assets/logo1.png";

const Header = () => {
  return (
    <header className="absolute w-full text-secondary  py-3">
      <nav className="container flex justify-between items-center">
        <a href="" className="font-bold text-3xl flex items-center capitalize">
          <img src={Logo} alt="" className="w-[3rem]" />
        </a>

        <ul className=" gap-8 text-white hidden lg:flex capitalize">
          <li className="text-secondary cursor-pointer">
            <a href="">home</a>
          </li>
          <li className="hover:text-secondary cursor-pointer">
            <a href="">about</a>
          </li>
          <li className="hover:text-secondary cursor-pointer">
            <a href="">tokenomics</a>
          </li>
          <li className="hover:text-secondary cursor-pointer">
            <a href="">roadmap</a>
          </li>
        </ul>
        <a
          href=""
          className="text-white rounded-md grade px-8 font-bold capitalize text-xl py-3"
        >
          buy now
        </a>
      </nav>
    </header>
  );
};

export default Header;
