import React from "react";
import Dog from "../assets/dog.png";

const Mics = () => {
  return (
    <div className="py-[50px] w-full Mics">
      <div className="container  flex flex-col gap-14 justify-center text-center items-center">
        <h1 className="text-4xl decoration-wavy underline-offset-[20px] overline uppercase font-bold">
          tokenomics
        </h1>

        <div className="w-full grid-cols-1 lg grid lg:grid-cols-2 gap-8 ">
          <artcile className="h-24 text-white rounded-xl border  border-secondary/80 flex justify-center items-center flex-col">
            <p className="font-mono">1Billion</p>
            <h3 className="text-3xl capitalize">supply</h3>
          </artcile>
          <artcile className="h-24 text-white rounded-xl border  border-secondary/80 flex justify-center items-center flex-col">
            <p className="font-mono">0%</p>
            <h3 className="text-3xl capitalize">tax</h3>
          </artcile>
          <artcile className="h-24 text-white rounded-xl border  border-secondary/80 flex justify-center items-center flex-col">
            <p className="font-mono">1Eth </p>
            <h3 className="text-3xl capitalize">initial market cap</h3>
          </artcile>
          <artcile className="h-24 text-white rounded-xl border  border-secondary/80 flex justify-center items-center flex-col">
            <p className="font-mono">2%</p>
            <h3 className="text-3xl capitalize">max wallet</h3>
          </artcile>
        </div>
      </div>
    </div>
  );
};

export default Mics;
