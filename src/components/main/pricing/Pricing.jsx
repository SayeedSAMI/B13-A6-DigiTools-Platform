import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="bg-[#f9fafc] py-[120px] px-auto text-center">
      <h1 className="font-extrabold text-[48px]">
        Simple, Transparent Pricing
      </h1>
      <p className="text-[#627382] text-left font-normal text-sm flex justify-center items-center">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1000px] mx-auto mt-7">
        <div className="card   w-[282px]  bg-base-100  shadow-sm p-[24]">
          <div className="card-body pt-3">
            <h2 className="card-title font-bold text-2xl">Pro</h2>
            <p className="text-[#627382] text-left font-normal text-sm">
              Best for professionals
            </p>

            <div className="card-actions  flex flex-col">
              <p className="font-bold text-3xl">
                $29
                <span className="font-normal text-xl">/Month</span>
              </p>
              <div className="font-semibold">
                <p className="text-[#627382] flex gap-1.5 items-center">
                  <FaCheck color="green" />
                  Access to 10 free tools
                </p>
                <p className="text-[#627382] flex gap-1.5 items-center">
                  <FaCheck color="green" />
                  Basic templates
                </p>
                <p className="text-[#627382] flex gap-1.5 items-center">
                  <FaCheck color="green" />
                  Community support
                </p>
                <p className="text-[#627382] flex gap-1.5 items-center">
                  <FaCheck color="green" />1 project per month
                </p>
              </div>
              <button className="btn btn-md btn-block rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card  w-[282px] shadow-sm p-[24] bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <div className="badge badge-soft badge-warning absolute top-[-10px] right-25 ">
            Most Popular
          </div>

          <div className="card-body pt-3">
            <h2 className="card-title font-bold text-2xl text-white">Pro</h2>
            <p className="text-white text-left font-normal text-sm">
              Best for professionals
            </p>

            <div className="card-actions  flex flex-col">
              <p className="font-bold text-3xl text-white">
                $29
                <span className="font-normal text-xl">/Month</span>
              </p>
              <div className="font-semibold">
                <p className="text-whiteflex gap-1.5 items-center text-white">
                  <FaCheck color="white" />
                  Access to all premium tools
                </p>
                <p className="text-white flex gap-1.5 items-center">
                  <FaCheck color="white" />
                  Unlimited templates
                </p>
                <p className="text-white flex gap-1.5 items-center">
                  <FaCheck color="white" />
                  Priority support
                </p>
                <p className="text-white flex gap-1.5 items-center">
                  <FaCheck color="white" />
                  Unlimited projects
                </p>
                <p className="text-white flex gap-1.5 items-center">
                  <FaCheck color="white" />
                  Cloud sync
                </p>
                <p className="text-white flex gap-1.5 items-center">
                  <FaCheck color="white" />
                  Advanced analytics
                </p>
              </div>
              <button className=" text-white btn btn-md btn-block rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="card   w-[282px] bg-base-100  shadow-sm p-[24]">
          <div className="card-body pt-3">
            <h2 className="card-title font-bold text-2xl">Enterprise</h2>
            <p className="text-[#627382] text-left font-normal text-sm">
              For teams and businesses
            </p>

            <div className="card-actions  flex flex-col">
              <p className="font-bold text-3xl">
                $99
                <span className="font-normal text-xl">/Month</span>
              </p>
              <div className="font-semibold">
                <p className="text-[#627382] flex gap-1.5 items-center">
                  <FaCheck color="green" />
                  Everything in Pro
                </p>
                <p className="text-[#627382] flex gap-1.5 items-center">
                  <FaCheck color="green" />
                  Team collaboration
                </p>
                <p className="text-[#627382] flex gap-1.5 items-center">
                  <FaCheck color="green" />
                  Custom integrations
                </p>
                <p className="text-[#627382] flex gap-1.5 items-center">
                  <FaCheck color="green" />
                  Dedicated support
                </p>
                <p className="text-[#627382] flex gap-1.5 items-center">
                  <FaCheck color="green" />
                  SLA guarantee
                </p>
                <p className="text-[#627382] flex gap-1.5 items-center">
                  <FaCheck color="green" />
                  Custom branding
                </p>
              </div>
              <button className="btn btn-md btn-block rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
