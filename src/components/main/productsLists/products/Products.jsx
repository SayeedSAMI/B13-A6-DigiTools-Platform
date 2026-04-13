import React, { use, useState } from "react";
import ToggleProductCart from "../toggleProductCart/ToggleProductCart";

const Products = ({ productPromise, cartCount, setCartCount }) => {
  const [toggle, setToggle] = useState("Products");

  const productData = use(productPromise);
  //   console.log(productData);

  return (
    <div className="text-center">
      <div>
        <button
          onClick={() => setToggle("Products")}
          className={`btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] ${toggle === "Products" ? " text-white" : " btn-ghost bg-clip-text text-transparent"} rounded-full`}
        >
          Products
        </button>
        <button
          onClick={() => setToggle("Cart")}
          className={`btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA] ${toggle === "Cart" ? " text-white" : " btn-ghost bg-clip-text text-transparent"}  rounded-full`}
        >
          Cart({cartCount})
        </button>

        <ToggleProductCart
          productData={productData}
          toggle={toggle}
          cartCount={cartCount}
          setCartCount={setCartCount}
        ></ToggleProductCart>
      </div>
    </div>
  );
};

export default Products;
