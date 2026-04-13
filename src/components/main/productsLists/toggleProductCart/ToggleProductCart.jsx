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
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div>
      {toggle === "Products" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1100px] mx-auto my-8 gap-8 mb-[100px]">
          {productData.map((data) => (
            <Cards
              key={data.id}
              data={data}
              cartCount={cartCount}
              setCartCount={setCartCount}
              cartList={cartList}
              setCartList={setCartList}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            ></Cards>
          ))}
        </div>
      ) : cartCount === 0 ? (
        <div className="max-w-[1120px] h-[200px] mx-auto flex flex-col justify-center items-center text-center shadow-xl rounded-xl mb-[100px]">
          <h1 className="font-extrabold text-3xl mb-4">Cart Empty</h1>
          <p className="text-[#627382] text-left font-normal text-sm">
            Add Product From Products Section
          </p>
        </div>
      ) : (
        <div className="max-w-[1320px]  mx-auto shadow-xl rounded-xl p-9 mb-[100px]">
          <Cart
            cartList={cartList}
            setCartList={setCartList}
            cartCount={cartCount}
            setCartCount={setCartCount}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          ></Cart>
          <div className="flex items-center justify-between p-5">
            <p className="text-[#627382] text-left font-normal text-sm">
              Total:
            </p>
            <p className="font-bold text-2xl">${totalPrice}</p>
          </div>
          <button
            onClick={() => {
              (setTotalPrice(0), setCartList([]), setCartCount(0));
            }}
            className="btn  btn-block max-w-[900px]  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default ToggleProductCart;
