import React from "react";
import { useSelector } from "react-redux";
import ProductItemsCrad from "./ProductItemsCrad";
import ProductNestedCatptis from "./ProductNestedCatItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div>
      <div className="mt-20">
        <div className="w-3/4 m-auto">
          {cartItems.length > 0 ? (
            <>
              <ProductItemsCrad itemCards={cartItems} />
              {cartItems.map((item, index) => (
                <ProductNestedCatptis key={index} pti={item} />
              ))}
            </>
          ) : (
            <div>No items in cart</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;