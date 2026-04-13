import React from "react";

const Cart = ({ cartList }) => {

    

  return (
    <div>
      {cartList.map((data) => (
        <div className="flex items-center justify-between max-w-[1100px] mx-auto shadow-sm my-5 p-5 rounded-xl">
          <div className="flex items-center justify-center gap-4">
            <span className="w-[30px] h-[30px] rounded-full bg-[#fff] shadow-sm">
              <p>{data.icon}</p>
            </span>
            <div className="text-start">
              <h1 className="card-title font-semibold text-[20px]">{data.name}</h1>
              <p className="font-normal text-[16px] text-[#627382] ">
                ${data.price}
              </p>
            </div>
          </div>
          <button className="btn btn-ghost text-red-600">Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
