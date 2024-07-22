import React from "react";
import { useSelector } from "react-redux";
import ProductItemsCrad from "./ProductItemsCrad";
import ProductNestedCatptis from "./ProductNestedCatItems";

const Cart = () => {
  const { normal_item, nested_items } = useSelector((store) => store.cart);

  if (normal_item.length === 0 || nested_items.length === 0) {
    return <h2 className="mt-20">Data is Not available</h2>;
  }

  console.log(normal_item);

  return (
    <div>
      <div className="mt-20">
        <div className="w-3/4 m-auto">
          <>
            {nested_items.map((item, index) => (
              <ProductNestedCatptis key={index} pti={item} />
            ))}
            <ProductItemsCrad itemCards={normal_item} />
          </>
        </div>
      </div>
    </div>
  );
};

export default Cart;
