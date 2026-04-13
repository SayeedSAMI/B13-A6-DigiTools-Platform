import React from "react";

const ReadytoTransform = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10  text-center text-white mx-0 space-y-3">
      <h1 className="font-extrabold text-[38px]">
        Ready to Transform Your Workflow?
      </h1>
      <p className="text-[#fff] text-left font-normal text-sm flex justify-center items-center">
        Join thousands of professionals who are already using Digitools to work
        smarter.Start your free trial today.
      </p>
      <div className="space-x-2 mt-9">
        <button className="btn btn-outline btn-primary bg-white text-black  rounded-full">
          Explore Products
        </button>
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
          View Pricing
        </button>
      </div>
      <p>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default ReadytoTransform;
