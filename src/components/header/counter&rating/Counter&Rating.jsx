import React from "react";

const CounterRrating = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10  text-white mb-32 mx-0">
      <div className="flex gap-52 justify-center items-center bg-transparent text-center">
        <div>
          <div className="text-4xl font-bold">50K+</div>
          <div className=" text-white/80">Active Users</div>
        </div>
        <div className="hidden lg:block border-l border-white/30"></div>

        <div>
          <div className="text-4xl font-bold">200+</div>
          <div className=" text-white/80">Premium Tools</div>
        </div>

        <div className="hidden lg:block border-l border-white/30"></div>
        <div>
          <div className="text-4xl font-bold">4.9</div>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-white"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-white"
              aria-label="2 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-white"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-white"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-white"
              aria-label="5 star"
              defaultChecked
            />
          </div>
          <div className=" text-white/80">Rating</div>
        </div>
      </div>
    </div>
  );
};

export default CounterRrating;
