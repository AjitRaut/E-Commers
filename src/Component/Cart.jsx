import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import NestedCartcard from "./NestedCartcard";
import { cartclear } from "../Utils/cartSlice";
import { Link } from "react-router-dom";
import { Cart_Bg_Url } from "../Utils/Url";

const Cart = () => {
  const { normal_item, nested_items } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleclearcart = () => {
    dispatch(cartclear());
  };

  const hasItems = normal_item.length > 0 || nested_items.length > 0;

  return (
    <div>
      <div className="mt-20">
        <div className="w-3/4 m-auto">
          {hasItems && (
            <div className="flex justify-center place-items-center p-3 font-bold text-xl ">
              <button
                onClick={handleclearcart}
                className="bg-orange-400 p-2 rounded-md"
              >
                Clear Cart
              </button>
            </div>
          )}

          {nested_items.length > 0
            ? nested_items.map((item, index) => (
                <NestedCartcard key={index} index={index} nestedcards={item} />
              ))
            : null}

          {normal_item.length > 0 ? <CartCard cards={normal_item} /> : null}

          {!hasItems && (
            <div className="flex flex-col place-items-center">
              <div className="h-[276px] mt-24 w-[320px]">
                <img src={Cart_Bg_Url} alt="" />
              </div>
              <div className="text-center ">
                <p className="font-medium text-xl text-gray-600"> Your cart is empty</p>
                <p className="text-base font-normal my-1 text-gray-500"> You can go to home page to view more restaurants</p>
              </div>
              <Link to={"/"}>
                <div className="mt-5 flex justify-center  text-white text-center">
                  <button className="bg-orange-500 text-lg font-bold p-2">
                    SEE RESTAURANTS NEAR YOU
                  </button>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
