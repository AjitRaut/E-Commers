import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useProductMenu from "../Utils/useProductMenu";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProductItemsCrad from "./ProductItemsCrad";

const ProductCategories = ({categories}) => {
  const { infoId } = useParams();
  const pmenu = useProductMenu(infoId);
  //   console.log(pmenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

//   const cat =
//     pmenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//       (c) =>
//         c.card?.card?.["@type"] ===
//           "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
//         c.card?.card?.["@type"] ===
//           "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     );
//   console.log(cat);

  return (
    <>
      <div>
       
          <div key={categories.title}>
            <div className="flex justify-between place-items-center border-t-[12px] bg-white">
              <div className="text-base font-bold">
              {categories.title}
              {categories.itemCards && ` (${categories.itemCards.length})`}
              </div>
              <div>
                <MdKeyboardArrowDown className="h-6 w-6" />
              </div>
            </div>
            <ProductItemsCrad itemCards={categories.itemCards} />
          </div>
      
      </div>
    </>
  );
};

export default ProductCategories;
