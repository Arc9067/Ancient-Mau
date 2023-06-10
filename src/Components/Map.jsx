import React from "react";
import Phase1 from "../assets/1.jpg";
import Phase2 from "../assets/2.jpg";
import Phase3 from "../assets/3.jpg";

const Map = () => {
  return (
    <div className="py-[50px] w-full Mics">
      <div className="container  flex flex-col gap-14 justify-center text-center items-center">
        <h1 className="text-4xl decoration-wavy underline-offset-[20px] overline uppercase font-bold">
          roadmap
        </h1>

        <div className="w-full grid-cols-1  lg grid md:grid-cols-3 gap-8 ">
          <img src={Phase1} alt="" />
          <img src={Phase2} alt="" />
          <img src={Phase3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Map;
