import React from "react";
import Cards from "../../../Ui/Cards";

const Products = () => {
  return (
    <div className="text-center">
      <div>
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
          Products
        </button>
        <button className="btn btn-ghost  bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent  rounded-full">
          Cart(2)
        </button>
        
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Products;
