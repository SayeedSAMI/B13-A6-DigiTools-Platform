import React from "react";
import Cards from "../../../Ui/Cards";

const ToggleProductCart = ({
  productData,
  toggle,
  cartCount,
  setCartCount,
}) => {
  return (
    <div>
      {toggle === "Products" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1100px] mx-auto my-8 gap-8">
          {productData.map((data) => (
            <Cards
              key={data.id}
              data={data}
              cartCount={cartCount}
              setCartCount={setCartCount}
            ></Cards>
          ))}
        </div>
      ) : (
        <div className="max-w-[1120px] h-[200px] mx-auto flex flex-col justify-center items-center text-center shadow-xl rounded-xl">
          <h1 className="font-extrabold text-3xl mb-4">Cart Empty</h1>
          <p className="text-[#627382] text-left font-normal text-sm">
            Add Product From Products Section
          </p>
        </div>
      )}
    </div>
  );
};

export default ToggleProductCart;
