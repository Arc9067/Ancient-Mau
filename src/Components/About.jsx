import React from "react";
import Dog from "../assets/dog.png";

const About = () => {
  return (
    <div className="py-[50px] w-full about">
      <div className="container  flex flex-col gap-14 justify-center text-center items-center">
        <h1 className="text-4xl decoration-wavy underline-offset-[20px] overline uppercase font-bold">
          about
        </h1>
        <div className="flex flex-col gap-5 text-xl md:max-w-[600px] text-white">
          <img src={Dog} alt="" className="md:w-[15rem]" />

          <p className="">
            The Pharaoh of Egypt decided to honor Mau by making her the official
            cat of the royal palace.
          </p>
          <p className="">
            As time passed, Mau became more and more beloved by the people of
            Egypt. Her beauty and grace were unmatched, and she was often the
            subject of paintings and scriptures around the country. But Mau was
            not content to simply be admired, she had a greater purpose in mind.
          </p>
          <p className="">
            Instead of being admired not only by the Pharaohs and people of
            Egypt, she also became the first blockchain goddess of raptor Egypt.
          </p>
          <p className="">
            Her one and only mission from this point forward was to invest her
            time and energy towards the moon. Which symbolized her Islamic faith
            in raptor Mau the blockchain goddess.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
