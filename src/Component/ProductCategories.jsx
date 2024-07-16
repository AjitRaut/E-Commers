import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useProductMenu from "../Utils/useProductMenu";

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
      <div>
        {cat?.map((ca) => (
          <div key={ca.card.card.title}>
            <div className="text-base font-bold">
              {ca.card.card.title}({ca.card.card.itemCards.length})
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCategories;
