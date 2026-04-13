import React from "react";
import { FaCheck } from "react-icons/fa";

const Cards = ({ data, cartCount, setCartCount }) => {
  //   console.log(data);

  const handleCartCount = () => {
    const newCartCount = cartCount + 1;
    setCartCount(newCartCount);
  };

  return (
    <div className="card bg-base-100 w-[332px] shadow-sm p-[24]">
      <div className="flex justify-between mt-7 mx-7">
        <span className="w-[30px] h-[30px] rounded-full bg-[#fff] shadow-sm">
          <p>{data.icon}</p>
        </span>
        {data.tag === "best seller" ? (
          <div className="badge badge-soft badge-warning">{data.tag}</div>
        ) : data.tag === "popular" ? (
          <div className="badge badge-soft badge-primary">{data.tag}</div>
        ) : (
          <div className="badge badge-soft badge-success">{data.tag}</div>
        )}
      </div>
      <div className="card-body pt-3">
        <h2 className="card-title font-bold text-2xl">{data.name}</h2>
        <p className="text-[#627382] text-left font-normal text-sm">
          {data.description}
        </p>

        <div className="card-actions  flex flex-col">
          <p className="font-bold text-2xl">
            $20<span className="font-normal text-xl">/m</span>
          </p>
          <div className="font-semibold">
            {data.features.map((feature ,index) => (
              <p key={index} className="text-[#627382] flex gap-1.5 items-center">
                <FaCheck color="green" /> {feature}
              </p>
            ))}
          </div>
          <button
            onClick={handleCartCount}
            className="btn btn-md btn-block rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
