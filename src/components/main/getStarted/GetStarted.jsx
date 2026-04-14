import React from "react";
import user from "/user.png";
import rocket from "/rocket.png";
import pak from "/package.png";
const GetStarted = () => {
  return (
    <div className="bg-[#f9fafc] py-[120px] px-auto text-center">
      <h1 className="font-extrabold text-[48px]">Get Started in 3 Steps</h1>
      <p className="text-[#627382] text-left font-normal text-sm flex justify-center items-center">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1000px] mt-10 mx-auto">
        <div className="card bg-base-100 w-96 shadow-sm  max-w-[282px]">
          <span className="w-[30px] h-[30px] absolute right-2 top-2 right-0.5 flex items-center justify-center text-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            01
          </span>

          <figure className="px-10 pt-10">
            <img src={user} alt="User Logo" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Create Account</h2>
            <p>
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm  max-w-[282px]">
          <span className="w-[30px] h-[30px] absolute right-2 top-2 right-0.5 flex items-center justify-center text-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            02
          </span>

          <figure className="px-10 pt-10">
            <img src={pak} alt="User Logo" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Choose Products</h2>
            <p>Browse our catalog and select the tools that fit your needs.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm  max-w-[282px]">
          <span className="w-[30px] h-[30px] absolute right-2 top-2 right-0.5 flex items-center justify-center text-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            03
          </span>

          <figure className="px-10 pt-10">
            <img src={rocket} alt="rocket Logo" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Start Creating</h2>
            <p>Download and start using your premium tools immediately.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
