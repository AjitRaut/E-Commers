import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProductNestedCatItems from "./ProductNestedCatItems";

const ProductNestedCategories = ({ nestedCategories }) => {
  const [show, setshow] = useState(false);

  const handleclick = () => {
    setshow(!show);
  };

  console.log(nestedCategories);
  if (!nestedCategories) {
    return null;
  }

  return (
    <>
      <div className="">
        {nestedCategories.map((category, index) => (
          <div key={index}>
            <div
              className="cursor-pointer flex justify-between place-items-center "
              onClick={handleclick}
            >
              <div className="text-lg font-bold p-[10px]">
                {category?.title}
                {category.itemCards && ` (${category.itemCards.length})`}
              </div>
              <div
                className={`transition-transform duration-300 ${
                  show ? "rotate-180" : ""
                }`}
              >
                {category.itemCards && category.itemCards.length > 0 && (
                  <MdKeyboardArrowDown className="h-6 w-6" />
                )}
              </div>
            </div>

            {show &&
              category?.itemCards?.map((itemcard, index) => (
                <ProductNestedCatItems key={index} pti={itemcard?.card?.info} />
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductNestedCategories;
