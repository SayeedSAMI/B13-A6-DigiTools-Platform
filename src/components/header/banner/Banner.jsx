import React from "react";
import banner from "/banner.png";
import play from "/Play.png";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[640px]  mx-auto">
      <div className="max-w-[1200px] hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-1 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <img src={banner} alt="Banner Image " />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <div className="badge badge-soft badge-primary mb-2">
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-5xl font-bold">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>
          <p className="py-6 text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="space-x-2">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
              Explore Products
            </button>
            <button className="btn btn-outline btn-primary  bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent  rounded-full">
              <img src={play} alt="Play Button" /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
