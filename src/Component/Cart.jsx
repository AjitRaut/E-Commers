import React from "react";
import ProductItemsCrad from "./ProductItemsCrad";
import { useSelector } from "react-redux";
import ProductNestedCatptis from "./ProductNestedCatItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div>
      <div className="mt-20">
        <div className="w-3/4 m-auto">
          <ProductItemsCrad itemCards={cartItems} />
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <ProductNestedCatptis key={index} pti={item} />
            ))
          ) : (
            <ProductItemsCrad itemCards={cartItems} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
