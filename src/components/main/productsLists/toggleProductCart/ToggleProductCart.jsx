import React, { useState } from "react";
import Cards from "../../../Ui/Cards";
import Cart from "../cart/Cart";

const ToggleProductCart = ({
  productData,
  toggle,
  cartCount,
  setCartCount,
}) => {
  const [cartList, setCartList] = useState([]);

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
              cartList={cartList}
              setCartList={setCartList}
            ></Cards>
          ))}
        </div>
      ) : cartCount === 0 ? (
        <div className="max-w-[1120px] h-[200px] mx-auto flex flex-col justify-center items-center text-center shadow-xl rounded-xl">
          <h1 className="font-extrabold text-3xl mb-4">Cart Empty</h1>
          <p className="text-[#627382] text-left font-normal text-sm">
            Add Product From Products Section
          </p>
        </div>
      ) : (
        <Cart
          cartList={cartList}
          setCartList={setCartList}
        ></Cart>
      )}
    </div>
  );
};

export default ToggleProductCart;
