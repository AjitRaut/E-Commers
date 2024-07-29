import React from "react";
import { useSelector } from "react-redux";
import ProductItemsCrad from "./ProductItemsCrad";
import ProductNestedCatptis from "./ProductNestedCatItems";
import CartCard from "./CartCard";
import NestedCartcard from "./NestedCartcard";

const Cart = () => {
  const { normal_item, nested_items } = useSelector((store) => store.cart);

  console.log("nested_items:", nested_items);
  console.log("normal_item:", normal_item);

  // if (normal_item.length === 0 || nested_items.length === 0) {
  //   return <h2 className="mt-20">Data is Not available</h2>;
  // }

  return (
    <div>
      <div className="mt-20">
        <div className="w-3/4 m-auto">
          {nested_items.map((item, index) => (
            // <ProductNestedCatptis key={index} pti={item} />
            <NestedCartcard  key={index} nestedcards={item} />
            //  <div key={index}>
            //    {item?.name}
            //  </div>
          ))}
          
          <CartCard cards={normal_item} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
