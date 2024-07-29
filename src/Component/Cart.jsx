import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import NestedCartcard from "./NestedCartcard";
import { cartclear } from "../Utils/cartSlice";
import { Link } from "react-router-dom";

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
                <NestedCartcard key={index} nestedcards={item} />
              ))
            : null}

          {normal_item.length > 0 ? <CartCard cards={normal_item} /> : null}

          {!hasItems && (
            <div>
              <h2 className="mt-24 text-center text-xl font-bold">
                Cart Is Empty
              </h2>
              <Link to={"/"}>
                <div className="mt-56 flex justify-center  text-white text-center">
                  <button className="bg-orange-500 text-xl font-bold p-3">Go To Shop</button>
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
