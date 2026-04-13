import React, { use } from "react";
import Cards from "../../../Ui/Cards";

const Products = ({ productPromise }) => {
  const productData = use(productPromise);
  //   console.log(productData);

  return (
    <div className="text-center">
      <div>
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
          Products
        </button>
        <button className="btn btn-ghost  bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent  rounded-full">
          Cart(2)
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1100px] mx-auto my-8 gap-8">
          {productData.map((data) => (
            <Cards data={data}></Cards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
