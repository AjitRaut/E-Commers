import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useProductMenu from "../Utils/useProductMenu";
import { MdKeyboardArrowDown } from "react-icons/md";

const ProductCategories = () => {
  const { infoId } = useParams();
  const pmenu = useProductMenu(infoId);
  //   console.log(pmenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const cat =
    pmenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(cat);

  return (
    <>
      <div className="bg-slate-400 h-4">
        {cat?.map((ca) => (
          <div key={ca.card.card.title} className=" my-3 bg-slate-500">
            <div className="text-base font-bold px-2 flex justify-between place-items-center bg-white">
              {ca.card.card.title}({ca?.card?.card?.itemCards?.length})
              <div>
                <MdKeyboardArrowDown className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCategories;
