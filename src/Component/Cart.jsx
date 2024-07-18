import React from "react";
import ProductItemsCrad from "./ProductItemsCrad";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems?.card?.info);
  return (
    <div>
      <div className="mt-20">
        
        <div className="w-3/4 m-auto">
          <ProductItemsCrad itemCards={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
