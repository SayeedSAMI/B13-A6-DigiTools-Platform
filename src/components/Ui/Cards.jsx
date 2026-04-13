import React from "react";
import { FaCheck } from "react-icons/fa";

const Cards = ({ data }) => {
  console.log(data);

  return (
    <div className="card bg-base-100 w-[332px] shadow-sm p-[24]">
      <figure className="px-10 pt-10"></figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">AI Writing Pro</h2>
        <p className="text-[#627382] text-left font-normal text-sm">
          Generate high-quality content, blogs, and marketing copy in seconds
          with advanced AI.
        </p>

        <div className="card-actions mt-3 flex flex-col">
          <p className="font-bold text-2xl">
            $20<span className="font-normal text-xl">/m</span>
          </p>
          <div className="font-semibold">
            <p className="text-[#627382] flex gap-1.5 items-center">
              <FaCheck color="green" /> Unlimited AI generations
            </p>
            <p className="text-[#627382] flex gap-1.5 items-center">
              <FaCheck color="green" /> 50+ writing templates
            </p>
            <p className="text-[#627382] flex gap-1.5 items-center">
              <FaCheck color="green" /> Grammar checker
            </p>
          </div>
          <button className="btn btn-md">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
