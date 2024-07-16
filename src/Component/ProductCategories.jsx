import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useProductMenu from "../Utils/useProductMenu";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProductItemsCrad from "./ProductItemsCrad";
import ProductNestedCategories from "./ProductNestedCategories";

const ProductCategories = ({ categories }) => {
  console.log(categories);
  const { infoId } = useParams();
  const pmenu = useProductMenu(infoId);

  const [show, setshow] = useState(false);
  
  const handleshow = () => {
    setshow(!show);
  };

  return (
    <>
      <div>
        <div key={categories.title}>
          <div
            className="flex justify-between place-items-center border-t-[12px] bg-white cursor-pointer"
            onClick={handleshow}
          >
            <div className="text-lg font-bold p-[10px]">
              {categories.title}
              {categories.itemCards && ` (${categories.itemCards.length})`}
            </div>
            <div>
              <MdKeyboardArrowDown className="h-6 w-6" />
            </div>
          </div>
          {show && (
            <ProductItemsCrad
              itemCards={categories.itemCards}
              nestedCategories={categories.categories}
            />
          )}
          {show && (
            <ProductNestedCategories nestedCategories={categories.categories} />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCategories;
